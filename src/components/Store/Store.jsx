import Cart from "./Cart"
import ShoppingList from "./ShoppingList"
import Categories from "./Categories"
import { useState } from "react"

function Store() {
   
    const [activeCategory, setActiveCategory] = useState([])
    const [cart, updateCart] = useState([])

    return (
        <div style={{
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                alignItems: "stretch",
                columnCount: "3"
            }}>
            <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <ShoppingList activeCategory={activeCategory} cart={cart} updateCart={updateCart} />
            <Cart cart={cart} updateCart={updateCart} />
        </div>
    )
}

export default Store