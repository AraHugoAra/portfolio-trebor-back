import {useEffect, useState} from 'react'
import '../styles/Banner.css'

function LatestMusic() {

 const [state, setState] = useState({isFetching: true,})

    useEffect(() => {
        fetch('http://localhost:1337/api/musics?populate=cover')
            .then(res => res.json())
            .then(json => setState({
                            image: json,
                            isFetching: false}))
        }, []) 
    

// TEST API REQUEST EN ASYNC :

/*     const [music, setMusic] = useState([])
    const musicLength = music.data.length
    const lastIndex = musicLength -1
    
    const fetchMusic = async () => {
        const url = "http://localhost:1337/api/musics?populate=cover"
        const response = await fetch(url)
        const json = await response.json()
        setMusic(json)
    }

    useEffect(() => fetchMusic, []) */

// Liens en dur pour debug

{/* <img src="http://localhost:1337/uploads/small_miniature_sun_starts_shining_herbe_add77c58d1.jpg" alt="cover-sss-endur" />
<a className='btn-test' href="https://open.spotify.com/album/46bZcuev4Gl9xgZGVh2cAu?si=h0m_aIQQRPygUePJBR1h5w&nd=1" >Stream</a> */}


    return (
        state.isFetching === true ? <div>Loading...</div> : 

        <div style={{backgroundColor: "#d7ecff",
                     alignItems: "center",
                     display: "flex",
                     flexDirection: "column"}}>
            <h2>Available Now</h2>
            <img style={{width: "500px", height: "500px"}} 
                 src={`http://localhost:1337${state.image.data[0].attributes.cover.data.attributes.formats.small.url}`} 
                 alt={`cover-${state.image.data[0].attributes.title}`} />
            <a className='btn-test' href={state.image.data[0].attributes.link} >Stream</a>               
        </div>
    )
}

export default LatestMusic