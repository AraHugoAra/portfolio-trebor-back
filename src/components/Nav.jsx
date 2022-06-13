import { useLocation } from "react-router-dom"

function Nav ({cart}) {

    useLocation()

    return(
        <div className="banner__nav">
        <a className={(window.location.href).includes("music") ? "nav__link--active" : "nav__link"} href="/music" ><h2>Music</h2></a>
        <a className={(window.location.href).includes("videos") ? "nav__link--active" : "nav__link"} href="/videos" ><h2>Videos</h2></a>
        <a className={(window.location.href).includes("store") ? "nav__link--active" : "nav__link"} href="/store" ><h2>Store</h2></a><span className={cart.length === 0 ? "dot-hidden" : "dot"}></span>
        <a className="nav__link" href="/#subscribe" ><h2>✉</h2></a>
        </div>
    )
}

export default Nav