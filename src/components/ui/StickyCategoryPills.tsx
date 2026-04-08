import React, { useState, useEffect, useRef } from "react";
import CartBar from "./CartBar";
import CartSheet from "./CartSheet";
import "./StickyCategoryPills.css";
import { useMenuProvider } from "@/providers/MenuProvider/useMenuProvider";

interface PillCategory {
  label: string;
  sectionId: string;
}

// const categories: PillCategory[] = [
//   { label: "Carnes", sectionId: "cat-carnes" },
//   { label: "Verduras", sectionId: "cat-verduras" },
//   { label: "Postres", sectionId: "cat-postres" },
//   { label: "Sopas", sectionId: "cat-sopas" },
//   { label: "Hamburguesas", sectionId: "cat-hamburguesas" },
//   { label: "Pizzas", sectionId: "cat-pizzas" },
//   { label: "Bebidas", sectionId: "cat-bebidas" },
// ];

const StickyCategoryPills: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const pillsRef = useRef<HTMLDivElement>(null);
  const { menu } = useMenuProvider();
  const categories = menu?.categories ?? [];
  const [activeLabel, setActiveLabel] = useState(categories?.at(0)?.name);

  // ── Scroll to section on click ─────────────────────
  const handleClick = (cat: PillCategory) => {
    const section = document.getElementById(cat.id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveLabel(cat.name);
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
    if (!categories.length) return;
    if (!activeLabel) setActiveLabel(categories.at(0)?.name);
    const sectionIds = categories.map((c) => c.id);
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
        const match = categories.find((c) => c.id === closestId);
        if (match) setActiveLabel(match.name);
      }
    };

    scrollContainer?.addEventListener("scroll", handleScroll);
    return () => scrollContainer?.removeEventListener("scroll", handleScroll);
  }, [categories.length]);

  return (
    <>
      <div className="sticky-category-wrapper">
        {/* Cart summary bar — sits above the pills */}
        <CartBar onOpen={() => setCartOpen(true)} />

        <div className="filter-pills hide-scrollbar" ref={pillsRef}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-pill ${activeLabel === cat.name ? "active" : ""}`}
              onClick={() => handleClick(cat)}
            >
              {cat.name}
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
