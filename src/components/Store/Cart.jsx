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

    return (
        <>
        <div className={isOpen ? "cart active" : "cart"}>
        <div className='cart__top'>
            <img    className='cart__top--button-close'
                    onClick={() => setIsOpen(false)}
                    src="http://localhost:1337/uploads/close_1_c80dcc1c65.png?updated_at=2022-06-11T14:00:52.892Z"
                    alt="button-close-cart"/>
            <h2 className='cart__top--title'>Cart</h2>
        </div> 
            <div className='cart__list'>
            {cart.length === 0 ? (
                <div className='cart__list--empty'>Cart is empty.</div>
                ):(
                <> 
                    <ul>
                    {cart.map(item => 
                        <li key={`item-${item.name}`}>
                            <img src={`http://localhost:1337${item.url}`} alt={`icon-${item.name}`} /><div>{item.name}<br />{item.price}€ x{item.amount}</div>
                        </li>
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
        <div className={!isOpen ? 'cart__button-open' : 'cart__button-open active'}>
            <img    onClick={() => setIsOpen(true)}
                    src="http://localhost:1337/uploads/shopping_bag_48a98e1ee0.png?updated_at=2022-06-11T14:05:41.662Z"
                    alt="button-open-cart"/>
            <span className={cart.length === 0 ? "dot--hidden" : "dot--cart"} ></span> 
        </div>
        </>
    ) 
}

export default Cart