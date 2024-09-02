import React from 'react';
import "./sidebar.css"
import { SidebarProps } from '../../interfaces/Interfaces';
import { Link,useNavigate } from 'react-router-dom';



export const Sidebar: React.FC<SidebarProps> = ({ onFilterChange, onSortChange, onHomePage, onProductPage, onCartPage  }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    onHomePage();
    navigate('/');
  };
  
  const handleProductClick = () => {
    onProductPage();
    navigate('/product-page');
  };

  const handleCartClick = () => {
    onCartPage();
    navigate('/cart');
  };
  
  return (
    <div className="sidebar">

      <span className="link-like" onClick={handleHomeClick}>Home</span><br />
      <span className="link-like" onClick={handleProductClick}>Product</span><br />
      <span className="link-like" onClick={handleCartClick}>Cart</span><br />

      <h3>Search Bar</h3>
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => onFilterChange('name', e.target.value)}
      />

      <h3>Filter by:</h3>
      <label htmlFor='filterCategory'>Category:</label>
      <input
        type="text"
        name="filterCategory"
        onChange={(e) => onFilterChange('category', e.target.value)}
      />

      <label htmlFor='filterPrice'>Price:</label>
      <input
        type="number"
        name="filterPrice"
        onChange={(e) => onFilterChange('price', Number(e.target.value))}
      />

      <label htmlFor="filterQuantity">Quantity:</label>
      <input
        type="number"
        name="filterQuantity"
        onChange={(e) => onFilterChange('quantity', Number(e.target.value))}
      />

      <label htmlFor="filterRating">Rating/Stars:</label>
      <input
        type="number"
        name="filterRating"
        onChange={(e) => onFilterChange('rating', Number(e.target.value))}
      />

      <h3>Sort by:</h3>
      <label htmlFor="sortPrice">Price: </label>
      <select name="sortPrice" onChange={(e) => onSortChange('price', e.target.value as 'asc' | 'desc')}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <hr />
      <label htmlFor="sortQuantity">Quantity: </label>
      <select name="sortQuantity" onChange={(e) => onSortChange('quantity', e.target.value as 'asc' | 'desc')}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <hr />
      <label htmlFor="sortRating">Rating/Stars: </label>
      <select name="sortRating" onChange={(e) => onSortChange('rating', e.target.value as 'asc' | 'desc')}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <hr />
      <label htmlFor="sortDate">Date Listed/Added: </label>
      <select name="sortDate" onChange={(e) => onSortChange('date', e.target.value as 'asc' | 'desc')}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <hr />
    </div>
  );
};