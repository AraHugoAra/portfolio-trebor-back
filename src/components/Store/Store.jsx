import Cart from "./Cart"
import ShoppingList from "./ShoppingList"
import Categories from "./Categories"
import { useState } from "react"

function Store() {
   
    const [activeCategory, setActiveCategory] = useState([])
    const [cart, updateCart] = useState([])

    return (
        <div className="store">
            <div className="store__items-list-box">
                <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                <ShoppingList activeCategory={activeCategory} cart={cart} updateCart={updateCart} />
            </div>
            <div className="store__cart-box">
                <Cart cart={cart} updateCart={updateCart} />
            </div>
        </div>
    )
}

export default Store