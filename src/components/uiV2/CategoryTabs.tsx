import React, { useState } from "react";
import "./CategoryTabs.css";
import { useMenuProvider } from "../../providers/MenuProvider/useMenuProvider";

interface Category {
  id: string;
  name: string;
  image: string;
  sectionId: string;
}

// const categories: Category[] = [
//   {
//     id: "1",
//     name: "Carnes",
//     sectionId: "cat-carnes",
//     image:
//       "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=200&q=80",
//   },
//   {
//     id: "2",
//     name: "Verduras",
//     sectionId: "cat-verduras",
//     image:
//       "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=200&q=80",
//   },
//   {
//     id: "3",
//     name: "Postres",
//     sectionId: "cat-postres",
//     image:
//       "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=200&q=80",
//   },
//   {
//     id: "4",
//     name: "Sopas",
//     sectionId: "cat-sopas",
//     image:
//       "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=200&q=80",
//   },
//   // {
//   //   id: "5",
//   //   name: "Ensaladas",
//   //   sectionId: "cat-ensaladas",
//   //   image:
//   //     "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=200&q=80",
//   // },
//   {
//     id: "6",
//     name: "Hamburguesas",
//     sectionId: "cat-hamburguesas",
//     image:
//       "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=200&q=80",
//   },
//   {
//     id: "7",
//     name: "Pizzas",
//     sectionId: "cat-pizzas",
//     image:
//       "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=200&q=80",
//   },
//   {
//     id: "8",
//     name: "Bebidas",
//     sectionId: "cat-bebidas",
//     image:
//       "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=200&q=80",
//   },
// ];

const CategoryTabs: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { menu } = useMenuProvider();
  const categories = menu?.categories ?? [];

  const handleClick = (cat: any) => {
    setActiveId(cat.name);

    const section = document.getElementById(cat.id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="category-scroll-container hide-scrollbar">
      <div className="category-tabs">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className={`category-card ${activeId === cat.name ? "active" : ""}`}
            onClick={() => handleClick(cat)}
          >
            <div className="category-card-image-wrapper">
              <img
                src={cat.files.at(0)?.url}
                alt={cat.name}
                className="category-card-img"
              />
            </div>
            <div className="category-card-content">
              <span className="category-card-name">{cat.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
