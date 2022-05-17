import {useEffect, useState} from 'react'
import '../styles/Banner.css'

function LatestMusic() {

    /* const [music, setMusic] = useState([])

    useEffect(() => {
        fetch('http://localhost:1337/api/musics?populate=cover')
            .then(res => res.json())
            .then(json => setMusic(json))
        }
    ,[])

    const musicLength = music.data.length
    const lastIndex = musicLength -1 */

    function handleClick(e) {
        e.prevenDefault()
        console.log('clic')
    }

    return (
        <div className='LatestMusic'>
            {/* <img src={`http://localhost:1337${music.data[lastIndex].attributes.cover.data.attributes.formats.small.url}`} alt={`cover-${music.data[lastIndex].attributes.title}`} /> */}
            <img src="http://localhost:1337/uploads/small_miniature_sun_starts_shining_herbe_add77c58d1.jpg" alt="cover-sss-endur" />
            <button onClick={handleClick} >Stream</button>
        </div>
    )
}

export default LatestMusic