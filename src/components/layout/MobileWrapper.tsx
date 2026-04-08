import React, { useEffect, useRef } from "react";
import "./MobileWrapper.css";
import { useSearchParams } from "react-router-dom";

interface MobileWrapperProps {
  children: React.ReactNode;
}

const MobileWrapper: React.FC<MobileWrapperProps> = ({ children }) => {
  const [searchParams] = useSearchParams();
  const storeSlug = searchParams.get("s");
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    const manifestLink = document.createElement("link");
    manifestLink.rel = "manifest";
    manifestLink.href = `${import.meta.env.VITE_S3_PUBLIC_BASE}/${storeSlug}/pwa/manifest.webmanifest`;
    document.head.appendChild(manifestLink);
  }, [storeSlug]);

  return (
    <div className="mobile-wrapper">
      <div className="mobile-content">{children}</div>
    </div>
  );
};

export default MobileWrapper;
