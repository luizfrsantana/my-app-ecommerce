import React from "react";
import "./product.css"
import { ProductInterface, ProductProps } from "../../interfaces/Interfaces"

export const Product:React.FC<ProductProps>  = ({
    id,
    name,
    img,
    category,
    price,
    quantity,
    rating,
    date,
    isInCart,
    onAddToCart,
    onRemoveFromCart,
    isCartPage,
  }) => {
    
    const handleButtonClick = () => {
        if (isInCart) {
          onRemoveFromCart(id);
        } else {
          onAddToCart({ id, name, img, category, quantity, price, rating, date });
        }
      };

    return (
        <div className="product">
            <div className="header">
                <img src={img} alt={name} />    
            </div> 
            <div className="footer">
                <h4>{name}</h4>
                <h5>Category: {category}</h5>
                <h5>Price: {price}</h5>
                <h5>Rating: {rating}</h5>
                <button onClick={handleButtonClick}>
                    {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                </button>
            </div>

        </div>

    )
}

