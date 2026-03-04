import React, { useState, useEffect, useRef } from "react";
import CartBar from "./CartBar";
import CartSheet from "./CartSheet";
import "./StickyCategoryPills.css";

interface PillCategory {
  label: string;
  sectionId: string;
}

const categories: PillCategory[] = [
  { label: "Carnes", sectionId: "cat-carnes" },
  { label: "Verduras", sectionId: "cat-verduras" },
  { label: "Postres", sectionId: "cat-postres" },
  { label: "Sopas", sectionId: "cat-sopas" },
  { label: "Hamburguesas", sectionId: "cat-hamburguesas" },
  { label: "Pizzas", sectionId: "cat-pizzas" },
  { label: "Bebidas", sectionId: "cat-bebidas" },
];

const StickyCategoryPills: React.FC = () => {
  const [activeLabel, setActiveLabel] = useState("Carnes");
  const [cartOpen, setCartOpen] = useState(false);
  const pillsRef = useRef<HTMLDivElement>(null);

  // ── Scroll to section on click ─────────────────────
  const handleClick = (cat: PillCategory) => {
    const section = document.getElementById(cat.sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveLabel(cat.label);
  };

  // ── Auto-scroll pill bar to keep active pill visible ──
  useEffect(() => {
    if (!pillsRef.current) return;
    const activeBtn = pillsRef.current.querySelector(
      ".filter-pill.active",
    ) as HTMLElement;
    if (activeBtn) {
      setTimeout(() => {
        activeBtn.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }, 1000);
    }
  }, [activeLabel]);

  // ── Track scroll → highlight the right pill ────────
  useEffect(() => {
    const sectionIds = categories.map((c) => c.sectionId);
    const scrollContainer = document.querySelector(".mobile-content");

    const handleScroll = () => {
      let closestId: string | null = null;
      let closestDistance = Infinity;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - 80);
        if (rect.top <= 200 && distance < closestDistance) {
          closestDistance = distance;
          closestId = id;
        }
      }

      if (closestId) {
        const match = categories.find((c) => c.sectionId === closestId);
        if (match) setActiveLabel(match.label);
      }
    };

    scrollContainer?.addEventListener("scroll", handleScroll);
    return () => scrollContainer?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="sticky-category-wrapper">
        {/* Cart summary bar — sits above the pills */}
        <CartBar onOpen={() => setCartOpen(true)} />

        <div className="filter-pills hide-scrollbar" ref={pillsRef}>
          {categories.map((cat) => (
            <button
              key={cat.label}
              className={`filter-pill ${activeLabel === cat.label ? "active" : ""}`}
              onClick={() => handleClick(cat)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cart sheet */}
      <CartSheet open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default StickyCategoryPills;
