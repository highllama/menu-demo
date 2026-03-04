import React, { useState } from "react";
import { ArrowLeft, SlidersHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FoodCard from "../components/ui/FoodCard";
import FoodDetailsSheet, {
  type FoodItem,
} from "../components/ui/FoodDetailsSheet";
import "./RecommendedList.css";

const RecommendedList: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);

  const filters = ["Todos", "Sopas", "Pizzas", "Hamburguesas", "Sushi"];

  const items = [
    {
      id: "french-toast",
      title: "Tostada Francesa",
      price: "$20.000",
      image:
        "https://images.unsplash.com/photo-1484723091791-c0e7e14f9d02?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description:
        "Pan brioche dorado con canela, miel y frutas frescas de temporada.",
    },
    {
      id: "meat-potatoes",
      title: "Carne con Papas",
      price: "$40.000",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description:
        "Corte jugoso acompañado de papas al romero y salsa chimichurri.",
    },
    {
      id: "burger-2",
      title: "Hamburguesa con Queso",
      price: "$30.000",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description:
        "Carne angus con queso cheddar, lechuga y salsa especial de la casa.",
    },
    {
      id: "pizza-2",
      title: "Pizza Italiana",
      price: "$35.000",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description:
        "Masa artesanal con mozzarella, albahaca fresca y aceite de oliva.",
      isFavorite: true,
    },
    {
      id: "juice",
      title: "Jugo de Naranja",
      price: "$10.000",
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Naranja recién exprimida con un toque de jengibre y hielo.",
    },
  ];

  return (
    <div className="recommended-container">
      <header className="page-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={24} />
        </button>
        <h2>Recomendados para ti</h2>
        <button className="filter-icon-btn">
          <SlidersHorizontal size={20} />
        </button>
      </header>

      <div className="filter-pills hide-scrollbar">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-pill ${activeCategory === filter ? "active" : ""}`}
            onClick={() => setActiveCategory(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="recommended-list">
        {items.map((item) => (
          <FoodCard
            key={item.id}
            {...item}
            variant="horizontal"
            onCardClick={setSelectedItem}
          />
        ))}
      </div>

      <FoodDetailsSheet
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
};

export default RecommendedList;
