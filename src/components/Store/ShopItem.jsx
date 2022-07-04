function ShopItem({itemName, itemUrl, itemId, itemPrice, cart, updateCart, itemInStock, itemStripeApi}) {

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
            <img className="shop-item__cover" src={`${itemUrl}`} alt={`img-${itemId}`} />
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
                            src="https://portfolio-trebor.s3.eu-west-3.amazonaws.com/thumbnail_shopping_cart_e145666e46_8dc356e242.png?width=512&height=512" 
                            alt="button-add" />
                </button>
            ) : (
                <div className="shop-item__buttons">
                <button className="shop-item__buttons" onClick={addToCart} >
                    <img    className="shop-item__buttons--image"
                                src="https://portfolio-trebor.s3.eu-west-3.amazonaws.com/thumbnail_plus_b902f1b2a2_0bb07393ba.png?width=512&height=512" 
                                alt="button-plus" />
                </button>
                <p className="shop-item__buttons--amount">{currentItemAdded.amount}</p>
                {currentItemAdded.amount > 1 ? (
                    <button className="shop-item__buttons" onClick={deleteFromCart} >
                        <img    className="shop-item__buttons--image"
                                src="https://portfolio-trebor.s3.eu-west-3.amazonaws.com/thumbnail_minus_1_d52d6c71f0_6fbdc12900.png?width=512&height=512" 
                                alt="button-minus" />
                    </button>
                ) : (
                    <button className="shop-item__buttons" onClick={deleteFromCart} >
                        <img    className="shop-item__buttons--image"
                                src="https://portfolio-trebor.s3.eu-west-3.amazonaws.com/thumbnail_delete_9efffd2cfa_2c95a61ab7.png?width=512&height=512" 
                                alt="button-delete" />
                    </button>)}
                </div>
            )}
            </div>
        </div>
    )
}

export default ShopItem