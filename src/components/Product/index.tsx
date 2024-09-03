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

      const renderRating = () => {
        const stars = Array.from({ length: rating }, (_, index) => (
          <img
            className="star" 
            key={index}
            src="/img/star.png"
            alt="Star"
          />
        ));
        return <div>{stars}</div>;
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
                <h5>Rating: {renderRating()}</h5>
                <button onClick={handleButtonClick}>
                    {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                </button>
            </div>

        </div>

    )
}

