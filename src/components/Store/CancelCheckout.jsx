import { useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'

function CancelCheckout() {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/store")
        }, 5000)

    })

    return(<div className="checkout">
        <h1 className="checkout__message">Your purchase has been canceled.</h1>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        <p className="checkout__redirecting">Redirecting to store... </p>
        <Link to="/store"><p className="chcekout__link"> (click here if the redirection does not work)</p></Link>
    </div>)
}

export default CancelCheckout