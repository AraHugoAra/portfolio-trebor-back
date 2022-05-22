import Carousel from './Carousel'

function PreviewVideos() {

    return (
        <div style={{   backgroundColor: "#c6ffd3", 
                        display:"flex", 
                        flexDirection: "column", 
                        alignItems:"center", 
                        height:"820px",
                        justifyContent:"center",
                    }}>
            <h1>Videos</h1>
            <Carousel />
            <a href=""><h2>View All Videos</h2></a>
        </div>
    )
}

export default PreviewVideos