import { useEffect, useState } from "react";
import "./NotificationsPrompt.css";

interface NotificationsPromptProps {
  onAccept: () => void;
}

const NotificationsPrompt = ({ onAccept }: NotificationsPromptProps) => {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    // Small delay so the sheet animates in after mount
    const t = setTimeout(() => {
      setVisible(true);
      setAnimating(true);
    }, 100);
    return () => clearTimeout(t);
  }, []);

  const handleAccept = () => {
    setAnimating(false);
    setTimeout(() => {
      setVisible(false);
      onAccept();
    }, 350);
  };

  if (!visible) return null;

  return (
    <div className={`notif-backdrop ${animating ? "notif-backdrop--in" : ""}`}>
      <div className={`notif-sheet ${animating ? "notif-sheet--in" : ""}`}>
        {/* Drag handle */}
        <div className="notif-handle" />

        {/* Icon */}
        <div className="notif-icon-wrap">
          <svg
            className="notif-bell"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </div>

        {/* Copy */}
        <h2 className="notif-title">Activa las notificaciones</h2>
        <p className="notif-body">
          Entérate al instante de ofertas exclusivas, el estado de tus pedidos y
          novedades de la tienda.
        </p>

        {/* CTA */}
        <button
          id="notif-accept-btn"
          className="notif-accept-btn"
          onClick={handleAccept}
        >
          Activar notificaciones
        </button>

        <button
          id="notif-dismiss-btn"
          className="notif-dismiss-btn"
          onClick={() => {
            setAnimating(false);
            setTimeout(() => setVisible(false), 350);
          }}
        >
          Ahora no
        </button>
      </div>
    </div>
  );
};

export default NotificationsPrompt;
