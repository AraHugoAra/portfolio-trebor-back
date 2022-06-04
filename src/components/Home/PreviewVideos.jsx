import Carousel from './Carousel'

function PreviewVideos() {

    return (
        <div className='preview-videos'>
            <h1 className='preview-videos__title'>Videos</h1>
            <Carousel />
            <a className='preview-videos__view-all' href="/videos"><h2>View All Videos</h2></a>
        </div>
    )
}

export default PreviewVideos