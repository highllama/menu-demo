import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MobileWrapper from "./components/layout/MobileWrapper";
import Home from "./pages/Home";
import RecommendedList from "./pages/RecommendedList";
import MenuProvider from "./providers/MenuProvider";
import { useEffect, useRef } from "react";
import isPWA from "./utils/isPWA";
import { useSearchParams } from "react-router-dom";

function App() {
  // const [searchParams] = useSearchParams();
  // const storeSlug = searchParams.get("s");
  const subscribed = useRef(false);
  useEffect(() => {
    const manifestLink = document.createElement("link");
    manifestLink.rel = "manifest";
    // manifestLink.href = `${import.meta.env.VITE_S3_PUBLIC_BASE}/${storeSlug}/pwa/manifest.webmanifest`;
    // document.head.appendChild(manifestLink);

    if (!isPWA()) {
      return;
    }
    async function subscribeToPush() {
      if (subscribed.current) {
        return;
      }
      subscribed.current = true;
      const registration = await navigator.serviceWorker.ready;
      debugger;
      // Get public key from your server
      const API_URL = import.meta.env.VITE_API_URL;
      console.log(API_URL);
      const response = await fetch(`${API_URL}/pushNotifications/getPublicKey`);
      const { publicKey } = await response.json();

      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicKey,
      });
      console.log(subscription);

      // Send subscription to server
      await fetch(`${API_URL}/pushNotifications/subscribe`, {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: { "Content-Type": "application/json" },
      });
    }

    // Trigger this based on a UI action or app load
    console.log(Notification.permission);
    if (Notification.permission === "default") {
      setTimeout(() => {
        subscribeToPush();
      }, 1000);
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
