import { useRef, useState } from "react"

function VideoItem({itemName, itemVideo, itemPoster}) {

    const vidRef = useRef(null)
    const [displayed, setDisplayed] = useState(true)

    function handlePlayVIdeo() {
        vidRef.current.play()
        vidRef.current.controls=true
        setDisplayed(false)
    }

    return (
        <div className = "video-item">
            <video ref={vidRef} className = "video-item__video" poster={`http://localhost:1337${itemPoster}`}>
                <source src={`http://localhost:1337${itemVideo}`} />
            </video>
            <h2 className = "video-item__title">{itemName}</h2>
            <button hidden={!displayed} onClick={handlePlayVIdeo} className = "video-item__button" >▶</button>
        </div>
    )
}

export default VideoItem