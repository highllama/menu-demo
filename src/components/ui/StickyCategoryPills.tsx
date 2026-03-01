import React, { useState } from 'react';
import './StickyCategoryPills.css';

const categories = ['Todos', 'Carnes', 'Verduras', 'Postres', 'Sopas', 'Ensaladas', 'Hamburguesas', 'Pizzas', 'Bebidas'];

const StickyCategoryPills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  return (
    <div className="sticky-category-wrapper">
      <div className="filter-pills hide-scrollbar">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StickyCategoryPills;
