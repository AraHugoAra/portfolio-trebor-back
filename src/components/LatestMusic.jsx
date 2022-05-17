import {useEffect, useState} from 'react'
import '../styles/Banner.css'

function LatestMusic() {

    /* const [music, setMusic] = useState([])
    const musicLength = music.data.length
    const lastIndex = musicLength -1

    useEffect(() => {
        fetch('http://localhost:1337/api/musics?populate=cover')
            .then(res => res.json())
            .then(json => setMusic(json))
        }
    ,[])  */
    


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

    return (
        <div className='LatestMusic'>
            {/* <img src={`http://localhost:1337${music.data[lastIndex].attributes.cover.data.attributes.formats.small.url}`} alt={`cover-${music.data[lastIndex].attributes.title}`} />
            <a href={music.data[lastIndex].attributes.link} >Stream</a> */}
            <img src="http://localhost:1337/uploads/small_miniature_sun_starts_shining_herbe_add77c58d1.jpg" alt="cover-sss-endur" />
            <h2>Available Now</h2>
            <a className='btn-test' href="https://open.spotify.com/album/46bZcuev4Gl9xgZGVh2cAu?si=h0m_aIQQRPygUePJBR1h5w&nd=1" >Stream</a>
        </div>
    )
}

export default LatestMusic