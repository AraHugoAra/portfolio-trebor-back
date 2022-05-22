import Carousel from './Carousel'

function LatestVideos() {

    return (
        <div style={{   backgroundColor: "#c6ffd3", 
                        display:"flex", 
                        flexDirection: "column", 
                        alignItems:"center", 
                        height:"820px",
                        justifyContent:"center",
                    }}>
            <Carousel />
        </div>
    )
}

export default LatestVideos