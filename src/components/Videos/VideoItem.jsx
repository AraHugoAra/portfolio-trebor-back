function VideoItem({itemName, itemVideo, itemPoster}) {

    return (
        <div>
            <h2>{itemName}</h2>
            <video width="600" height="600" controls poster={`http://localhost:1337${itemPoster}`}>
                <source src={`http://localhost:1337${itemVideo}`} />
            </video>
        </div>
    )
}

export default VideoItem