import "./product.css"
import { ProductInterface } from "../../interfaces/Interfaces"

export const Product  = (props: ProductInterface) => {
    return (
        <div className="product">
            <div className="header">
                <img src={props.img} alt={props.name} />    
            </div> 
            <div>
            </div>

        </div>

    )
}