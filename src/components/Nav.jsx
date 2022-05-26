// Styles
import '../styles/Banner.css'

function Nav () {

    return(
        <div className="nav">
        <a href="/music" ><div><h1>Music</h1></div></a>
        <a href="/videos" ><div><h1>Video</h1></div></a>
        <a href="/store" ><div><h1>Store</h1></div></a>
        <a href="/#subscribe" ><div><h1>✉</h1></div></a>
        </div>
    )
}

export default Nav