import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Banner } from './components/Banner';
import { ProductInterface } from './interfaces/Interfaces';
import { ProductPage } from './components/ProductPage';

function App() {

  const [products, setProducts] = useState([] as ProductInterface [])
  const [newProduct, setNewProduct] = useState({
    id: 0,
    name: "",
    img:"",
    category: "",
    quantity: 0,
    price: 0,
    rating: 0,
    date: new Date("1990-01-01")
  } as ProductInterface) 

  const addingNewProduct = (product: ProductInterface) => {
    console.log(product)
    setProducts([...products, product])
  }

  return (
    <div className="App">
      <Banner />
      <ProductPage addingNewProduct = {(product: ProductInterface) => addingNewProduct(product)} productId={products.length + 1} />
      
    </div>
  );
}

export default App;
