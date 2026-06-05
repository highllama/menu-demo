import { X } from "lucide-react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useEffect, useState } from "react";
import BottomSheet from "@/components/atoms/BottomSheet";
import "./InstallPwaBanner.css";

/* ── Platform detection ───────────────────────── */
function getInstallPlatform(): "ios" | "android" | "other" {
  const ua = navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(ua)) return "ios";
  if (/android/.test(ua)) return "android";
  return "other";
}

/* ── Inline icon pills matching the screenshot ── */
const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="ipwa-pill">{children}</span>
);

/* iOS share icon (box with up-arrow) */
const IosShareIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <polyline points="16 6 12 2 8 6" />
    <line x1="12" y1="2" x2="12" y2="15" />
  </svg>
);

/* Android three-dot menu icon */
const AndroidMenuIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="5" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="12" cy="19" r="1.5" />
  </svg>
);

/* Chevron-down icon for "View more" */
const ChevronDownIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/* Plus-square icon for "Add to Home Screen" */
const PlusSquareIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

/* ── Step data per platform ───────────────────── */
const iosSteps = [
  <>
    Toca{" "}
    <Pill>
      <IosShareIcon /> Compartir
    </Pill>{" "}
    en la barra del navegador
  </>,
  <>
    Luego toca{" "}
    <Pill>
      <ChevronDownIcon /> Ver más
    </Pill>
  </>,
  <>
    Selecciona{" "}
    <Pill>
      <PlusSquareIcon /> Agregar a inicio
    </Pill>
  </>,
];

const androidSteps = [
  <>
    Presiona{" "}
    <Pill>
      <AndroidMenuIcon />
    </Pill>{" "}
    para abrir el menú del navegador
  </>,
  <>
    Selecciona{" "}
    <Pill>
      <PlusSquareIcon /> Agregar a pantalla de inicio
    </Pill>
  </>,
  <>
    Confirma tocando <strong>Agregar</strong>
  </>,
];

/* ── App identity card ────────────────────────── */
const AppCard = () => (
  <div className="ipwa-app-card">
    <div className="ipwa-app-icon">
      <img src="/logo.svg" alt="Kalendu" />
    </div>
    <div className="ipwa-app-info">
      <span className="ipwa-app-name">Kalendu Menu</span>
      <span className="ipwa-app-domain">kalendu.com</span>
    </div>
  </div>
);

const InstallPwaBanner = () => {
  const { getItem, setItem } = useLocalStorage();
  const [showBanner, setShowBanner] = useState(false);
  const [showInstallBottomSheet, setShowInstallBottomSheet] = useState(false);

  const platform = getInstallPlatform();
  const steps = platform === "android" ? androidSteps : iosSteps;

  useEffect(() => {
    async function init() {
      const installPwaBannerLastShow = await getItem(
        "installPwaBannerLastShow",
      );
      const now = Date.now();
      const diff = now - (installPwaBannerLastShow ?? 0);
      const oneDay = 24 * 60 * 60 * 1000;
      if (installPwaBannerLastShow) {
        if (diff > oneDay) {
          setShowBanner(true);
        }
      } else {
        setShowBanner(true);
      }
    }
    init();
  }, [getItem]);

  if (!showBanner) return null;
  return (
    <>
      <BottomSheet
        open={showInstallBottomSheet}
        onClose={() => setShowInstallBottomSheet(false)}
      >
        <div className="ipwa-container">
          <h2 className="ipwa-title">Instala la app</h2>

          {/* <AppCard /> */}

          <ol className="ipwa-steps">
            {steps.map((step, i) => (
              <li key={i} className="ipwa-step">
                <span className="ipwa-step-number">{i + 1}</span>
                <span className="ipwa-step-text">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </BottomSheet>

      <div className="h-10 w-full shadow-xl flex items-center justify-center">
        <div className=" flex items-center justify-center ">
          <span
            onClick={async () => {
              await setItem("installPwaBannerLastShow", Date.now().toString());
              setShowBanner(false);
            }}
            className="cursor-pointer rounded-full p-4 hover:bg-muted/70"
          >
            <X size={14} />
          </span>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="text-gray-700 text-xs sm:text-base ">
            No te pierdas de nada!, recibe notificaciones y mucho mas!
          </p>
        </div>
        <div className="w-auto flex items-center justify-end pr-4">
          <button
            onClick={() => setShowInstallBottomSheet(true)}
            className="add-btn"
          >
            Instalar
          </button>
        </div>
      </div>
    </>
  );
};

export default InstallPwaBanner;
