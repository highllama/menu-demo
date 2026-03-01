import React, { useState } from 'react';
import { ArrowLeft, SlidersHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FoodCard from '../components/ui/FoodCard';
import './RecommendedList.css';

const RecommendedList: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filters = ['Todos', 'Sopas', 'Pizzas', 'Hamburguesas', 'Sushi'];

  const items = [
    {
      id: 'french-toast',
      title: 'Tostada Francesa',
      price: '$20.000',
      image: 'https://images.unsplash.com/photo-1484723091791-c0e7e14f9d02?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      description: "Delicioso plato preparado fresco para ti.",
    },
    {
      id: 'meat-potatoes',
      title: 'Carne con Papas',
      price: '$40.000',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      description: "Delicioso plato preparado fresco para ti.",
    },
    {
      id: 'burger-2',
      title: 'Hamburguesa con Queso',
      price: '$30.000',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      description: "Delicioso plato preparado fresco para ti.",
    },
    {
      id: 'pizza-2',
      title: 'Pizza Italiana',
      price: '$35.000',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      description: "Delicioso plato preparado fresco para ti.",
      isFavorite: true,
    },
     {
      id: 'juice',
      title: 'Jugo de Naranja',
      price: '$10.000',
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      description: "Delicioso plato preparado fresco para ti.",
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
        {filters.map(filter => (
          <button
            key={filter}
            className={`filter-pill ${activeCategory === filter ? 'active' : ''}`}
            onClick={() => setActiveCategory(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="recommended-list">
        {items.map(item => (
          <FoodCard
            key={item.id}
            {...item}
            variant="horizontal"
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendedList;
