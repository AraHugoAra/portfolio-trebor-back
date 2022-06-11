import { useState, useEffect } from 'react'
import Checkout from './Checkout'

function Cart({cart, updateCart}) {
    const [isOpen, setIsOpen] = useState(true)
    const initialTotal = 0
    const totalCart = cart.reduce((acc, currItem) => acc + (currItem.price * currItem.amount), initialTotal)
  
    useEffect(() => {(totalCart === 0) ? (
        document.title ='TRéBOR 🛒 empty'
        ) : (
        document.title =`TRéBOR 🛒 ${totalCart}€`
        )}, [totalCart])

    return isOpen ? (
        <div className='cart'>
            <button className='cart__button-close' onClick={() => setIsOpen(false)} >Close</button> 
            <div className='cart__list'>
            {cart.length === 0 ? (
                <div>Cart is empty.</div>
                ):(
                <>
                    <h2 className='cart__list--title'>Cart</h2>
                    <ul className='cart__list--ul'>
                    {cart.map(item => 
                        <li className='cart__list--li' key={`item-${item.name}`}>{item.name}: {item.price}€ x{item.amount}</li>
                    )}
                    </ul>
                    <h3 className='cart__list--total'>Total: {totalCart}€</h3>
                    <div className='cart__buttons'>
                        <button className='cart__buttons--empty' onClick={() => updateCart([])} >Empty cart</button>
                        <Checkout cart={cart} />
                    </div>
                </>
                )}
            </div>
        </div>
    ) : (<button className='cart__button-open' onClick={() => setIsOpen(true)} >Open cart</button>) 
}

export default Cart