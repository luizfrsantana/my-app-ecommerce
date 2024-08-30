import "./product.css"
import { ProductInterface } from "../../interfaces/Interfaces"

export const Product  = (props: ProductInterface) => {
    return (
        <div className="product">
            <div className="header">
                <img src={props.img} alt={props.name} />    
            </div> 
            <div className="footer">
                <h4>{props.name}</h4>
                <h5>Category: {props.category}</h5>
                <h5>Price: {props.price}</h5>
                <h5>Rating: {props.rating}</h5>
            </div>

        </div>

    )
}

