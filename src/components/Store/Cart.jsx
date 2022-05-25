import { useState, useEffect } from 'react'

function Cart({cart, updateCart}) {
    const [isOpen, setIsOpen] = useState(true)
    const initialTotal = 0
    const totalCart = cart.reduce((acc, currItem) => acc + (currItem.price * currItem.amount), initialTotal)
  
    useEffect(() => {{(totalCart === 0) ? (
        document.title ='TRéBOR 🛒 empty'
        ) : (
        document.title =`TRéBOR 🛒 ${totalCart}€`
        )}}, [cart])

    return isOpen ? (
        <div style={{
            height: '800px',
            width: '350px',
            backgroundColor: 'lightgreen'
        }}>
            <h1>Panier</h1>
            {cart.length === 0 ? (
            <div className="lmj-empty-cart" >Votre panier est vide</div>
            ):(
            <ul>
                {cart.map(item => 
                    <li key={`item-${item.name}`}>{item.name}: {item.price}€ x{item.amount}</li>
                )}
            </ul>)}
            <h2>Total: {totalCart}€</h2>
            <button style={{position: 'absolute', top: '800px'}} onClick={() => setIsOpen(false)} >Fermer</button>
            <button onClick={() => updateCart([])} >Vider le panier</button>
        </div>
    ) : (<button style={{height: "20px"}}className="lmj-open-button" onClick={() => setIsOpen(true)} >Ouvrir</button>) 
}

export default Cart