import React from 'react';
import { NavLink } from 'react-router-dom';
import './CategoryTabs.css';

interface Category {
  id: string;
  name: string;
  icon: string;
}

const categories: Category[] = [
  { id: '1', name: 'Carnes', icon: '🥩' },
  { id: '2', name: 'Verduras', icon: '🥗' },
  { id: '3', name: 'Postres', icon: '🥞' },
  { id: '4', name: 'Sopas', icon: '🥣' },
  { id: '5', name: 'Ensaladas', icon: '🥬' },
  { id: '6', name: 'Hamburguesas', icon: '🍔' },
  { id: '7', name: 'Pizzas', icon: '🍕' },
  { id: '8', name: 'Bebidas', icon: '🍹' },
];

const CategoryTabs: React.FC = () => {
  return (
    <div className="category-scroll-container hide-scrollbar">
      <div className="category-tabs">
        {categories.map((cat) => (
          <NavLink
            key={cat.id}
            to={`/?category=${cat.name.toLowerCase()}`}
            className={({ isActive }) => `category-tab ${isActive ? 'active' : ''}`}
          >
            <div className="category-icon-wrapper">
              <span className="category-icon">{cat.icon}</span>
            </div>
            <span className="category-name">{cat.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
