import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MobileWrapper from "./components/layout/MobileWrapper";
import Home from "./pages/Home";
import RecommendedList from "./pages/RecommendedList";
import MenuProvider from "./providers/MenuProvider";
import { useEffect, useRef } from "react";
import isPWA from "./utils/isPWA";

function App() {
  const subscribed = useRef(false);
  const storeSlug = new URLSearchParams(window.location.search).get("s");
  useEffect(() => {
    console.log(isPWA());
    // if (!isPWA()) {
    //   return;
    // }
    async function subscribeToPush() {
      if (subscribed.current) {
        return;
      }
      subscribed.current = true;
      const registration = await navigator.serviceWorker.ready;
      // Get public key from your server
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await fetch(`${API_URL}/pushNotifications/getPublicKey`);
      const { publicKey } = await response.json();

      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicKey,
      });
      console.log(subscription);

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
      // Send subscription to server
      await fetch(`${API_URL}/pushNotifications/subscribe`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });
    }

    // Trigger this based on a UI action or app load
    console.log(window?.Notification?.permission, "notifstatus");
    if (
      window?.Notification &&
      ["default", "granted", undefined].includes(
        window?.Notification?.permission,
      )
    ) {
      setTimeout(() => {
        subscribeToPush();
      }, 3000);
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
      </MenuProvider>
    </BrowserRouter>
  );
}

export default App;
