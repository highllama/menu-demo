import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CategoryTabs from "../components/ui/CategoryTabs";
import StickyCategoryPills from "../components/ui/StickyCategoryPills";
import PromoBanner from "../components/ui/PromoBanner";
import FoodCard from "../components/ui/FoodCard";
import FoodDetailsSheet, {
  type FoodItem,
} from "../components/ui/FoodDetailsSheet";
import useCartStore from "../providers/cartStore";
import "./Home.css";
import extraCategories from "../data/categoriesWithProducts";

const Home: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);
  const cartCount = useCartStore((s) => s.cart.length);
  const hasCart = cartCount > 0;

  return (
    <div
      className="home-container"
      style={hasCart ? { paddingBottom: "130px" } : undefined}
    >
      {/* Special Offers Section */}
      <section className="section">
        <div className="section-header" style={{ marginTop: "2rem" }}>
          <h3>Ofertas Especiales</h3>
        </div>
        <PromoBanner
          title="30% de Descuento"
          discount="Pizza napolitana"
          image="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        />
      </section>

      {/* Categories */}
      <CategoryTabs />

      {/* Special Deals Section */}
      <section className="section">
        <div className="section-header">
          <h3>Promociones</h3>
          <NavLink to="/recommended" className="see-all-link">
            Ver todo
          </NavLink>
        </div>
        <div className="horizontal-scroll-container hide-scrollbar">
          <div className="deals-list">
            <FoodCard
              id="pizza-1"
              title="Italian Pizza"
              price="$35.000"
              description="Pizza italiana con masa fina, tomate fresco y albahaca."
              kcal={450}
              image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              isFavorite={true}
              onCardClick={setSelectedItem}
            />
            <FoodCard
              id="burger-1"
              title="Cheese Burger"
              price="$30.000"
              description="Pan artesanal con carne angus, queso cheddar y salsas."
              kcal={650}
              image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              onCardClick={setSelectedItem}
            />
            <FoodCard
              id="salad-1"
              title="Fresh Salad"
              price="$20.000"
              description="Mix de hojas verdes, tomates cherry y vinagreta cítrica."
              kcal={220}
              image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              onCardClick={setSelectedItem}
            />
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="section">
        <div className="section-header">
          <h3>Platos Populares</h3>
        </div>
        <div className="vertical-list">
          <FoodCard
            id="pasta-1"
            title="Pasta Puttanesca"
            price="$28.000"
            description="Pasta al dente con aceitunas, alcaparras y tomates frescos."
            kcal={580}
            image="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            variant="horizontal"
            onCardClick={setSelectedItem}
          />
          <FoodCard
            id="salmon-1"
            title="Grilled Salmon"
            price="$45.000"
            description="Salmón a la plancha con espárragos y salsa de limón."
            kcal={420}
            image="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            variant="horizontal"
            onCardClick={setSelectedItem}
          />
          <FoodCard
            id="bowl-1"
            title="Greens, Tomato & Basil"
            price="$23.500"
            description="Bowl fresco de espinacas, tomate y albahaca con aderezo balsámico."
            kcal={310}
            image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            variant="horizontal"
            onCardClick={setSelectedItem}
          />
        </div>
      </section>

      {/* Category Sections */}
      {extraCategories.map((cat) => (
        <section className="section" id={cat.id} key={cat.id}>
          <div className="section-header">
            <h3>{cat.title}</h3>
          </div>
          <div className="vertical-list">
            {cat.items.map((item) => (
              <FoodCard
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                kcal={item.kcal}
                image={item.image}
                variant="horizontal"
                onCardClick={setSelectedItem}
              />
            ))}
          </div>
        </section>
      ))}

      <StickyCategoryPills />

      {/* Food Details Bottom Sheet */}
      <FoodDetailsSheet
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
};

export default Home;
