import React from "react";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { flushSync } from "react-dom";
import "./FoodCard.css";

interface FoodCardProps {
  id: string;
  title: string;
  description?: string;
  image: string;
  price: string;
  kcal?: number;
  isFavorite?: boolean;
  variant?: "vertical" | "horizontal"; // vertical for home page deals, horizontal for recommended list
}

const FoodCard: React.FC<FoodCardProps> = ({
  id,
  title,
  description,
  image,
  price,
  kcal,
  isFavorite = false,
  variant = "vertical",
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (!document.startViewTransition) {
      navigate(`/item/${id}`);
      return;
    }

    document.startViewTransition(() => {
      flushSync(() => {
        navigate(`/item/${id}`);
      });
    });
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // In a real app, toggle favorite state here
  };

  return (
    <div className={`food-card ${variant}`} onClick={handleCardClick}>
      <div className="food-card-image-wrapper">
        <img
          src={image}
          alt={title}
          className="food-card-img"
          style={{ viewTransitionName: `food-image-${id}` }}
        />
      </div>
      <div className="food-card-content">
        <div className="food-card-header-row">
          <h4
            className="food-card-title"
            style={{ viewTransitionName: `food-title-${id}` }}
          >
            {title}
          </h4>
          {variant === "horizontal" && (
            <span className="food-card-kcal">{kcal} kcal</span>
          )}
        </div>
        {description && <p className="food-card-description">{description}</p>}
        <div style={{ flexGrow: 1 }} />
        <div className="food-card-footer">
          <span className="food-card-price">{price}</span>
          {variant === "vertical" && kcal && (
            <span className="food-card-kcal">{kcal} kcal</span>
          )}
          {variant === "horizontal" && (
            <div className="food-card-actions">
              <button
                className={`favorite-btn ${isFavorite ? "active" : ""}`}
                onClick={handleFavoriteClick}
              >
                <Heart
                  size={16}
                  fill={isFavorite ? "var(--primary-color)" : "none"}
                  color={
                    isFavorite
                      ? "var(--primary-color)"
                      : "var(--text-secondary)"
                  }
                />
              </button>
              <button className="add-btn" onClick={(e) => e.stopPropagation()}>
                AÑADIR
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
