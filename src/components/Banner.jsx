// Components
import Networks from './Networks'
import Nav from './Nav'
// React stuff
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

function Banner ({cart}) {


    const [offset, setOffset] = useState(0);

    useEffect(() => {
        // watch scroll and store it in state
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className={offset <= 80 ? "banner" : "banner sticky"}>
            <Networks className="banner__networks"/>
            <Link to="/"><img className="banner__logo" src="https://portfolio-trebor.s3.eu-west-3.amazonaws.com/thumbnail_Logo_T_Re_BOR_fond_transparent_2c9ae5649c_cf18bf370c.png?width=1000&height=360" alt="logo-trebor" /></Link>
            <Nav cart={cart}/>
        </div>
    )
}

export default Banner