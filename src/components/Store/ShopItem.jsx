function ShopItem({itemName, itemUrl, itemId, itemPrice, cart, updateCart, itemInStock, itemStripeApi}) {

    const baseUrl = "http://localhost:1337"
    const currentItemAdded = cart.find((item) => item.name === itemName)
    const cartFilteredCurrentItem = cart.filter((item) => item.name !== itemName)

    function addToCart() {
        if (currentItemAdded) {
            updateCart([
				...cartFilteredCurrentItem,
				{ name: itemName, price: itemPrice, stripeApi: itemStripeApi ,amount: currentItemAdded.amount + 1 }
			])} else {
        updateCart([...cart, {name: itemName, price: itemPrice, stripeApi: itemStripeApi ,amount: 1}])
    }}

    function deleteFromCart() {
        currentItemAdded.amount > 1 ? (
            updateCart([...cartFilteredCurrentItem, {name: itemName, price: itemPrice, stripeApi: itemStripeApi ,amount: currentItemAdded.amount -1}])
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
                <button className="shop-item__buttons" onClick={addToCart} disabled={!itemInStock && true} >🛒</button>
            ) : (
                <div className="shop-item__buttons">
                <button className="shop-item__buttons" onClick={addToCart} >➕</button>
                <p className="shop-item__buttons--amount">{currentItemAdded.amount}</p>
                {currentItemAdded.amount > 1 ? (
                    <button className="shop-item__buttons" onClick={deleteFromCart} >➖</button>
                ) : (
                    <button className="shop-item__buttons" onClick={deleteFromCart} >❌</button>)}
                </div>
            )}
            </div>
        </div>
    )
}

export default ShopItem