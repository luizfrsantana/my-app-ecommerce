import { useState } from "react"
import "./productPage.css"
import { ProductInterface } from "../../interfaces/Interfaces"
import { DropDownList } from "../DropDownList";

const productCategories: String[] = [
    "Electronics",
    "Clothing",
    "Books",
    "Home & Kitchen",
    "Sports & Outdoors",
  ];

interface ProductPageProps {
    addingNewProduct: (product: ProductInterface) => void;
    productId: number;
}

export const ProductPage = (props: ProductPageProps) => {
    const [name, setName] = useState("")
    const [img, setImg] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(0.0)
    const [quantity, setQuantity] = useState(0)
    const [rating, setRating] = useState(0)
    const [date, setDate] = useState(new Date())

    const [statusForm, setStatusForm] = useState<boolean>()
    const [displayForm, setdisplayForm] = useState("none")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const product: ProductInterface = {
            "id": props.productId,
            "name": name,
            "img": img,
            "category": category,
            "price": price,
            "quantity": quantity,
            "rating": rating,
            "date": date
        }
        props.addingNewProduct(product)
    }

    const handlerDisplayForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {setdisplayForm("block")} else {setdisplayForm("none")}

    }

    return (
        <div>
            <label htmlFor="displayForm">New Product?</label>
            <input type="checkbox" name="displayForm" checked={statusForm} onChange={handlerDisplayForm}/>

            <section className="form" style={{display: displayForm}}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Product Name"
                        required
                        
                    />
                    <input
                        type="text"
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                        placeholder="Product Image URL"
                        required
                    />

                    <DropDownList
                        itens = {productCategories}
                        value={category}
                        updateValue={(value:string) => setCategory(value)}
                    />
                    <label htmlFor="price"> Price: </label>
                    <input
                        type="number"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(parseFloat(e.target.value))}
                        placeholder="Price"
                         min="0" max="999999" step="0.01"
                         required
                    />
                    <label htmlFor="quantidy"> Quantity: </label>
                    <input
                        type="number"
                        name="quantidy"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        placeholder="Quantity"
                        min="0"
                        required
                    />
                    <label htmlFor="rating"> Rating: </label>
                    <input
                        type="number"
                        name="rating"
                        value={rating}
                        onChange={(e) => setRating(parseInt(e.target.value))}
                        placeholder="Rating"
                        min="0" max="5"
                        required
                    />
                    <label htmlFor="dateListed"> Date listed: </label> 
                    <input
                        type="date"
                        name="dateListed"
                        value={date.toISOString().split("T")[0]}
                        onChange={(e) => setDate(new Date(e.target.value))}
                        required
                    />
                    <br />
                    <button type="submit">Add Product</button>
                </form>
            </section>
        </div>
    )

}