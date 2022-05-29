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
        <div style={{margin: "30px"}}>
            <img src={`${baseUrl}${itemUrl}`} alt={`img-${itemId}`} />
            <h3>{itemName}</h3>
            {!itemInStock ? ( 
                <p style={{color:"red",fontStyle:"italic"}}>Not available <span style={{textDecoration:'line-through'}}>{itemPrice}€</span></p>
            ) : (
                <p>{itemPrice}€</p>
            )}
            {!currentItemAdded ? (
                <button onClick={addToCart} disabled={!itemInStock && true} >🛒</button>
            ) : (
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <button onClick={addToCart} >➕</button>
                <p>{currentItemAdded.amount}</p>
                {currentItemAdded.amount > 1 ? (
                    <button onClick={deleteFromCart} >➖</button>
                ) : (
                    <button onClick={deleteFromCart} >❌</button>)}
                </div>
            )}
        </div>
    )
}

export default ShopItem