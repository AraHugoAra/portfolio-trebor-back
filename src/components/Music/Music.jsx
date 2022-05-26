import { useEffect, useState } from "react";
import MusicItem from "./MusicItem";

function Music() {

    const [state, setState] = useState({isFetching: true})
    const html = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/0C9EDM8jzXKFoPxX7JU3XQ?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`

    useEffect(() => {
        fetch('http://localhost:1337/api/musics?populate=cover')
            .then(data => data.json())
            .then(json => setState({music: json, isFetching: false}))
            .catch(err => console.log('Erreur: ',err))
    }, [])

    return (
        state.isFetching ? (
            <p>Loading...</p>
        ) : (
        <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
            <h2>Get a quick listen</h2>
            <div style={{width: "500px"}} dangerouslySetInnerHTML={{__html:`${html}`}} />
            <ul style={{display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap"
                    }}>
            {state.music.data.map(item => 
                <li key={item.id}>
                    <MusicItem  itemName={item.attributes.title} 
                                itemCover={item.attributes.cover.data.attributes.formats.thumbnail.url}
                                itemLink={item.attributes.link} />
                </li>
            )}
            </ul>
        </div>
        )
    )
}

export default Music