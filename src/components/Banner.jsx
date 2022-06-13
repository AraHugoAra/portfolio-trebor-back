// Components
import Networks from './Networks'
import Nav from './Nav'
// React stuff
import { Link } from 'react-router-dom'

function Banner ({cart}) {

    // Image en dur pour debug
    // <img src="http://localhost:1337/uploads/thumbnail_Logo_T_Re_BOR_1_525027ca06.jpg" alt="logo-trebor-dur" />

    return (
        <div className='banner'>
            <Networks className="banner__networks"/>
            <Link to="/"><img className="banner__logo" src="http://localhost:1337/uploads/Logo_T_Re_BOR_fond_transparent_2c9ae5649c.png?updated_at=2022-05-31T10:38:47.946Z" alt="logo-trebor" /></Link>
            <Nav cart={cart}/>
        </div>
    )
}

export default Banner