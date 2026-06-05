import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import "./BottomSheet.css";

interface BottomSheetProps {
  children: React.ReactNode;
  onClose: () => void;
  open: boolean;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  children,
  open,
  onClose,
}) => {
  const [visible, setVisible] = useState(false);

  // Animate in when item is set
  useEffect(() => {
    if (open) {
      // Small delay so the initial render paints before transition
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [open]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 320);
  };

  return (
    <>
      <div
        className={`sheet-overlay ${visible ? "visible" : ""}`}
        onClick={handleClose}
      />

      <div
        className={`food-details-sheet ${visible ? "sheet-open" : "sheet-closed"}`}
      >
        {/* Drag handle */}
        {/* <div className="sheet-handle" /> */}
        {/* Close button */}
        <button className="sheet-close-btn" onClick={handleClose}>
          <X size={20} />
        </button>
        {children}
      </div>
    </>
  );
};

export default BottomSheet;
