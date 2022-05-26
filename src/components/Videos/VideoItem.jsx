function VideoItem({itemName, itemVideo /* itemHtml */}) {

    return (
        <div>
            <h2>{itemName}</h2>
            <video width="600" height="600" controls >
                <source src={`http://localhost:1337${itemVideo}`} />
            </video>
        </div>
    )
}

export default VideoItem