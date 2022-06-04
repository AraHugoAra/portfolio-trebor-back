// Components
import Networks from './Networks'
import Nav from './Nav'
// React stuff
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

function Banner () {
    const [logo, setLogo] = useState({isFetching: true});
    const rootUrl = "http://localhost:1337"

    useEffect(() => {
        fetch(`${rootUrl}/api/assets/1?populate=media`)
            .then(res => res.json())
            .then(json => {
                setLogo({isFetching: false,
                    logo:json})
            })
    }, []);

    // Image en dur pour debug
    // <img src="http://localhost:1337/uploads/thumbnail_Logo_T_Re_BOR_1_525027ca06.jpg" alt="logo-trebor-dur" />

    return (
        <div className='banner'>
            <Networks className="banner__networks"/>
        {logo.isFetching ? <div>Loading...</div> :
            (<Link to="/"><img className="banner__logo" src={`${rootUrl}${logo.logo.data.attributes.media.data.attributes.formats.thumbnail.url}`} alt="logo-trebor" /></Link>  )}
            <Nav />
        </div>
    )
}

export default Banner