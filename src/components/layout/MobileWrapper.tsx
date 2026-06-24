import React, { useEffect, useRef } from "react";
import "./MobileWrapper.css";
import useStoreSlug from "@/hooks/useStoreSlug";
import InstallPwaBanner from "../molecules/InstallPwaBanner";
import useIsPwa from "@/hooks/useIsPwa";

interface MobileWrapperProps {
  children: React.ReactNode;
}

const MobileWrapper: React.FC<MobileWrapperProps> = ({ children }) => {
  const storeSlug = useStoreSlug();
  const mounted = useRef(false);
  const isPWA = useIsPwa();

  useEffect(() => {
    if (mounted.current) return;
    if (!storeSlug) return;
    mounted.current = true;
    const manifestLink = document.createElement("link");
    manifestLink.rel = "manifest";
    manifestLink.href = `${import.meta.env.VITE_CLOUDFRONT_PUBLIC}/${storeSlug}/pwa/manifest.webmanifest`;
    document.head.appendChild(manifestLink);
  }, [storeSlug]);

  return (
    <div className="mobile-wrapper">
      {!isPWA && <InstallPwaBanner />}
      <div className="mobile-content">{children}</div>
    </div>
  );
};

export default MobileWrapper;
