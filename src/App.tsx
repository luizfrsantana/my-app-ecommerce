import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Banner } from "./components/Banner";
import { ProductInterface } from "./interfaces/Interfaces";
import { ProductPage } from "./components/ProductPage";
import { Product } from "./components/Product";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Home } from "./components/Home";

function App() {

  const [products, setProducts] = useState([] as ProductInterface[]);
  const [cart, setCart] = useState([] as ProductInterface[]);
  const [cartTotalValue, setcartTotalValue] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([] as ProductInterface[]);
  const [currentPage, setCurrentPage] = useState("");

  const handleProductPage = () => {
    setFilteredProducts(products)
    setCurrentPage("ProductPage")

  }

  const handleCartPage = () => {
    console.log({cartTotalValue})
    setFilteredProducts(cart)
    setCurrentPage("cart")
  }

  const handleHomePage = () => {
    setFilteredProducts([])
    setCurrentPage("Home")
  }

  
  const addingNewProduct = (product: ProductInterface) => {
    console.log(product);
    const updatedProducts = [...products, product];
    setProducts([...products, product]);
    setFilteredProducts(updatedProducts);
  };

  const handleFilterChange = (filter: string, value: string | number) => {
    const itemsToFilter = currentPage === "cart" ? cart : products;
    const filtered = itemsToFilter.filter((product) =>
      String(product[filter as keyof ProductInterface])
        .toLowerCase()
        .includes(String(value).toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSortChange = (sortBy: string, order: "asc" | "desc") => {
    const sorted = [...filteredProducts].sort((a, b) => {
      const compareA = a[sortBy as keyof ProductInterface];
      const compareB = b[sortBy as keyof ProductInterface];
      if (order === "asc") {
        return compareA > compareB ? 1 : -1;
      } else {
        return compareA < compareB ? 1 : -1;
      }
    });
    setFilteredProducts(sorted);
  };

  const addToCart = (product: ProductInterface, price: number) => {
    setCart([...cart, product]);
    setcartTotalValue(cartTotalValue + price)
  };

  const removeFromCart = (productId: number, price: number) => {
    setCart(cart.filter(product => product.id !== productId));
    setcartTotalValue(cartTotalValue - price)
  };

  const isProductInCart = (productId: number) => {
    return cart.some((product) => product.id === productId);
  };


  useEffect(() => {}, [filteredProducts]);

  return (
    <Router> {/* Envolva tudo dentro do Router */}
      <div className="App">
        <Banner />
        <div className="content">
          <Sidebar
            onFilterChange={handleFilterChange}
            onSortChange={handleSortChange}
            onProductPage={handleProductPage}
            onCartPage={handleCartPage}
            onHomePage={handleHomePage}
          />
          <div className="productlist">
            <Routes>
              <Route
                path="/product-page"
                element={
                  <ProductPage
                    addingNewProduct={(product: ProductInterface) => {
                      addingNewProduct(product)
                    }
                    }
                    productId={products.length + 1}
                  />
                }
              />
              < Route path="/" element={<Home />} />
              
            </Routes>
              {filteredProducts.map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  img={product.img}
                  category={product.category}
                  quantity={product.quantity}
                  price={product.price}
                  rating={product.rating}
                  date={product.date}
                  isInCart={isProductInCart(product.id)}
                  onAddToCart={() => addToCart(product, product.price)}
                  onRemoveFromCart={() => removeFromCart(product.id, product.price)}
                  isCartPage={currentPage === "cart"}
                />
              ))}
            {currentPage === "cart" && <h1>Cart Total Value: {cartTotalValue}</h1>}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;