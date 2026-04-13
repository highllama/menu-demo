import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MobileWrapper from "./components/layout/MobileWrapper";
import Home from "./pages/Home";
import RecommendedList from "./pages/RecommendedList";
import MenuProvider from "./providers/MenuProvider";
import { useEffect, useRef, useState } from "react";
import NotificationsPrompt from "./components/molecules/NotificationsPrompt";

function App() {
  const subscribed = useRef(false);
  const searchParams = new URLSearchParams(window.location.search);
  const storeSlug = searchParams.get("s");
  const isPWA = searchParams.get("pwa") === "true";
  const [showNotifPrompt, setShowNotifPrompt] = useState(false);

  const subscribeToPush = async () => {
    if (subscribed.current) return;
    subscribed.current = true;
    try {
      const registration = await navigator.serviceWorker.ready;
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await fetch(`${API_URL}/pushNotifications/getPublicKey`);
      const { publicKey } = await response.json();

      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicKey,
      });

      const body = {
        subscription,
        storeSlug,
        deviceInfo: {
          userAgent: navigator.userAgent,
          language: navigator.language,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          hardwareConcurrency: navigator.hardwareConcurrency,
        },
      };
      await fetch(`${API_URL}/pushNotifications/subscribe`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error("Push subscription failed", err);
    }
  };

  useEffect(() => {
    if (!isPWA) return;
    const permission = window?.Notification?.permission;
    if (
      window?.Notification &&
      (permission === "default" || permission === undefined)
    ) {
      // Show our custom prompt after a short delay
      const t = setTimeout(() => setShowNotifPrompt(true), 3000);
      return () => clearTimeout(t);
    }
    if (permission === "granted") {
      subscribeToPush();
    }
  }, []);

  return (
    <BrowserRouter>
      <MenuProvider>
        <MobileWrapper>
          <Routes>
            <Route path="/menu" element={<Home />} />
            <Route path="/recommended" element={<RecommendedList />} />
            <Route path="*" element={<Navigate to="/menu" replace />} />
          </Routes>
        </MobileWrapper>
        {isPWA && showNotifPrompt && (
          <NotificationsPrompt
            onAccept={() => {
              setShowNotifPrompt(false);
              subscribeToPush();
            }}
          />
        )}
      </MenuProvider>
    </BrowserRouter>
  );
}

export default App;
