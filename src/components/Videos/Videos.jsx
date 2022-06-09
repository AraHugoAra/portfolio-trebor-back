import { useEffect, useState } from "react"
import VideoItem from "./VideoItem"

function Videos() {

    const [state, setState] = useState({isFetching: true})

    useEffect(() => {
        fetch('http://localhost:1337/api/videos?populate=video,poster')
            .then(data => data.json())
            .then(json => setState({videos: json, isFetching: false}))
            .catch(err => console.log(err))
    }, [])

    return (
        state.isFetching ? (
            <p>Loading...</p>
        ) : (
        <div className = "videos">
            <ul className = "videos__list">
            {state.videos.data.map((item, index) => 
                <li key={item.id}>
                    <VideoItem  itemName={item.attributes.title} 
                                itemVideo={item.attributes.video.data.attributes.url}
                                itemPoster={item.attributes.poster.data.attributes.url} />
                </li>
            )}
            </ul>
        </div>
        )
    )
}

export default Videos