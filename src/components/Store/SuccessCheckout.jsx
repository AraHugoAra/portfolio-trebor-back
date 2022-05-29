import { useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'

function SuccessChekout() {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/store")
        }, 5000)

    })

    return(<div>
        <h1 style={{textAlign: "center"}}>Your purchase has been successful, check your emails 🤗</h1>
        <p style={{textAlign: "center" ,textDecoration: "italic"}}>Redirecting to store...</p>
        <Link to="/store"><p style={{textAlign: "center" ,textDecoration: "italic"}}>(click here if the redirection does not work)</p></Link>
    </div>)
}

export default SuccessChekout