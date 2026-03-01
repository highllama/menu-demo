import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, ListOrdered, Heart, MessageSquare, User } from 'lucide-react';
import './BottomNav.css';

const BottomNav: React.FC = () => {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Home size={24} />
        <span>Home</span>
      </NavLink>
      <NavLink to="/order" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <ListOrdered size={24} />
        <span>Order</span>
      </NavLink>
      <NavLink to="/wishlist" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Heart size={24} />
        <span>Wishlist</span>
      </NavLink>
      <NavLink to="/chat" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <MessageSquare size={24} />
        <span>Chat</span>
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <User size={24} />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
