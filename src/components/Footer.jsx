import Networks from "./Networks";
import Github from "./Github";
import "../styles/Footer.css"

function Footer() {

    return (
        <div className="footer">
            <Networks imgName="ntw-foot" divName="ntw-div-foot" />
            <Github />
        </div>
    )
}

export default Footer