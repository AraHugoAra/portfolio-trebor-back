import { useEffect, useState } from "react"
import VideoItem from "./VideoItem"

function Videos() {

    const [state, setState] = useState({isFetching: true})

    useEffect(() => {
        fetch('http://localhost:1337/api/videos?populate=video')
            .then(data => data.json())
            .then(json => setState({videos: json, isFetching: false}))
            .catch(err => console.log(err))
    }, [])

    return (
        state.isFetching ? (
            <p>Loading...</p>
        ) : (
        <div>
            <button onClick={() => console.log(state)}>state</button>
            <ul>
            {state.videos.data.map(item => 
                <li key={item.id}>
                    <VideoItem  itemName={item.attributes.title} 
                                itemVideo={item.attributes.video.data.attributes.url} />
                </li>
            )}
            </ul>
        </div>
        )
    )
}

export default Videos