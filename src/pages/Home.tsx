import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../components/ui/SearchBar";
import CategoryTabs from "../components/ui/CategoryTabs";
import StickyCategoryPills from "../components/ui/StickyCategoryPills";
import PromoBanner from "../components/ui/PromoBanner";
import FoodCard from "../components/ui/FoodCard";
import "./Home.css";

const extraCategories = [
  {
    id: "cat-carnes",
    title: "Carnes",
    items: [
      {
        id: "rn1",
        title: "Ribeye Steak",
        price: "$85.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 800,
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "rn2",
        title: "BBQ Ribs",
        price: "$65.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 950,
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "rn3",
        title: "Filet Mignon",
        price: "$95.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 700,
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "rn4",
        title: "T-Bone Steak",
        price: "$90.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 850,
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "cat-verduras",
    title: "Verduras",
    items: [
      {
        id: "vg1",
        title: "Veggie Bowl",
        price: "$25.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 320,
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "vg2",
        title: "Espárragos a la Parrilla",
        price: "$18.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 150,
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "vg3",
        title: "Ensalada de Espinacas",
        price: "$22.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 210,
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "vg4",
        title: "Berenjena Asada",
        price: "$20.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 280,
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "cat-postres",
    title: "Postres",
    items: [
      {
        id: "ps1",
        title: "Tiramisú",
        price: "$18.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 450,
        image:
          "https://images.unsplash.com/photo-1484723091791-c0e7e14f9d02?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "ps2",
        title: "Pastel de Chocolate",
        price: "$16.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 550,
        image:
          "https://images.unsplash.com/photo-1484723091791-c0e7e14f9d02?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "ps3",
        title: "Cheesecake de Fresa",
        price: "$17.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 480,
        image:
          "https://images.unsplash.com/photo-1484723091791-c0e7e14f9d02?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "ps4",
        title: "Helado Sundae",
        price: "$14.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 380,
        image:
          "https://images.unsplash.com/photo-1484723091791-c0e7e14f9d02?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "cat-sopas",
    title: "Sopas",
    items: [
      {
        id: "sp1",
        title: "Sopa de Tomate",
        price: "$15.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 200,
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "sp2",
        title: "Sopa de Pollo",
        price: "$18.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 250,
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "sp3",
        title: "Minestrone",
        price: "$17.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 220,
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "sp4",
        title: "Sopa de Cebolla Francesa",
        price: "$20.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 300,
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "cat-hamburguesas",
    title: "Hamburguesas",
    items: [
      {
        id: "hb1",
        title: "Hamburguesa Clásica",
        price: "$28.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 700,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "hb2",
        title: "Hamburguesa Doble",
        price: "$35.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 950,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "hb3",
        title: "Hamburguesa BBQ Bacon",
        price: "$32.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 850,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "hb4",
        title: "Hamburguesa Vegetariana",
        price: "$26.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 500,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "cat-pizzas",
    title: "Pizzas",
    items: [
      {
        id: "pz1",
        title: "Pizza Margarita",
        price: "$32.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 600,
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "pz2",
        title: "Pizza Pepperoni",
        price: "$35.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 750,
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "pz3",
        title: "Pizza Cuatro Quesos",
        price: "$38.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 800,
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "pz4",
        title: "Pizza Hawaiana",
        price: "$34.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 680,
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "cat-bebidas",
    title: "Bebidas",
    items: [
      {
        id: "bd1",
        title: "Jugo Natural",
        price: "$8.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 120,
        image:
          "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "bd2",
        title: "Limonada de Coco",
        price: "$10.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 180,
        image:
          "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "bd3",
        title: "Té Helado",
        price: "$7.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 90,
        image:
          "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "bd4",
        title: "Cerveza Artesanal",
        price: "$12.000",
        description: "Delicioso plato preparado fresco para ti.",
        kcal: 220,
        image:
          "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
];

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <SearchBar />

      {/* Special Offers Section */}
      <section className="section">
        <div className="section-header">
          <h3>Ofertas Especiales</h3>
        </div>
        <PromoBanner
          title="30% de Descuento"
          discount="Pide ahora"
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
              description="Delicioso plato preparado fresco para ti."
              kcal={450}
              image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              isFavorite={true}
            />
            <FoodCard
              id="burger-1"
              title="Cheese Burger"
              price="$30.000"
              description="Delicioso plato preparado fresco para ti."
              kcal={650}
              image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            />
            <FoodCard
              id="salad-1"
              title="Fresh Salad"
              price="$20.000"
              description="Delicioso plato preparado fresco para ti."
              kcal={220}
              image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
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
            description="Delicioso plato preparado fresco para ti."
            kcal={580}
            image="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            variant="horizontal"
          />
          <FoodCard
            id="salmon-1"
            title="Grilled Salmon"
            price="$45.000"
            description="Delicioso plato preparado fresco para ti."
            kcal={420}
            image="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            variant="horizontal"
          />
          <FoodCard
            id="bowl-1"
            title="Greens, Tomato & Basil"
            price="$23.500"
            description="Delicioso plato preparado fresco para ti."
            kcal={310}
            image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            variant="horizontal"
          />
        </div>
      </section>

      {/* Render Specific Category Sections */}
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
              />
            ))}
          </div>
        </section>
      ))}

      <StickyCategoryPills />
    </div>
  );
};

export default Home;
