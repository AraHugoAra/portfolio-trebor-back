function ShopItem({itemName, itemUrl, itemId, itemPrice, cart, updateCart, itemInStock, itemStripeApi}) {

    const baseUrl = "http://localhost:1337"
    const currentItemAdded = cart.find((item) => item.name === itemName)
    const cartFilteredCurrentItem = cart.filter((item) => item.name !== itemName)

    function addToCart() {
        if (currentItemAdded) {
            updateCart([
				...cartFilteredCurrentItem,
				{ name: itemName, url: itemUrl, price: itemPrice, stripeApi: itemStripeApi ,amount: currentItemAdded.amount + 1 }
			])} else {
        updateCart([...cart, {name: itemName, url: itemUrl, price: itemPrice, stripeApi: itemStripeApi ,amount: 1}])
    }}

    function deleteFromCart() {
        currentItemAdded.amount > 1 ? (
            updateCart([...cartFilteredCurrentItem, {name: itemName, url: itemUrl, price: itemPrice, stripeApi: itemStripeApi ,amount: currentItemAdded.amount -1}])
        ) : (
            updateCart(cartFilteredCurrentItem)
        )
    }

    return (
        <div className="shop-item">
            <img className="shop-item__cover" src={`${baseUrl}${itemUrl}`} alt={`img-${itemId}`} />
            <h3 className="shop-item__name">{itemName}</h3>
            {!itemInStock ? ( 
                <p className="shop-item__price--unavailable">{itemPrice}€</p>
            ) : (
                <p className="shop-item__price">{itemPrice}€</p>
            )}
            <div className="shop-item__buttons">
            {!currentItemAdded ? (
                <button className="shop-item__buttons" onClick={addToCart} disabled={!itemInStock} >
                    <img    className={itemInStock ? "shop-item__buttons--image" : "shop-item__buttons--image-disabled"}
                            src="http://localhost:1337/uploads/shopping_cart_e145666e46.png?updated_at=2022-06-11T13:00:42.474Z" 
                            alt="button-add" />
                </button>
            ) : (
                <div className="shop-item__buttons">
                <button className="shop-item__buttons" onClick={addToCart} >
                    <img    className="shop-item__buttons--image"
                                src="http://localhost:1337/uploads/plus_b902f1b2a2.png?updated_at=2022-06-11T13:00:56.468Z" 
                                alt="button-plus" />
                </button>
                <p className="shop-item__buttons--amount">{currentItemAdded.amount}</p>
                {currentItemAdded.amount > 1 ? (
                    <button className="shop-item__buttons" onClick={deleteFromCart} >
                        <img    className="shop-item__buttons--image"
                                src="http://localhost:1337/uploads/minus_1_d52d6c71f0.png?updated_at=2022-06-11T13:40:19.404Z" 
                                alt="button-minus" />
                    </button>
                ) : (
                    <button className="shop-item__buttons" onClick={deleteFromCart} >
                        <img    className="shop-item__buttons--image"
                                src="http://localhost:1337/uploads/delete_9efffd2cfa.png?updated_at=2022-06-11T13:01:00.956Z" 
                                alt="button-delete" />
                    </button>)}
                </div>
            )}
            </div>
        </div>
    )
}

export default ShopItem