import { useState } from "react"
import "./productPage.css"
import { ProductInterface } from "../../interfaces/ProductInterface"

interface ProductPageProps {
    addingNewProduct: (product: ProductInterface) => void;
    productId: number;
}

export const ProductPage = (props: ProductPageProps) => {
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(0.0)
    const [quantity, setQuantity] = useState(0)
    const [rating, setRating] = useState(0)
    const [date, setDate] = useState(new Date())

    const [statusForm, setStatusForm] = useState<boolean>()
    const [displayForm, setdisplayForm] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const product: ProductInterface = {
            "id": props.productId,
            "name": name,
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
                    />
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Category"
                    />
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(parseFloat(e.target.value))}
                        placeholder="Price"
                         min="0" max="999999" step="0.01"
                    />
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        placeholder="Quantity"
                        min="0"
                    />
                    <input
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(parseInt(e.target.value))}
                        placeholder="Rating"
                        min="0" max="5"
                    />
                    <input
                        type="date"
                        value={date.toISOString().split("T")[0]}
                        onChange={(e) => setDate(new Date(e.target.value))}
                    />
                    <button type="submit">Add Product</button>
                </form>
            </section>
        </div>
    )

}