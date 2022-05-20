function ButtonCarousel({content, action, videosLength, setCurrent, current}) {

    function handleClick() {
        action === "+" ? (
        (current < videosLength -1) ? (setCurrent(current +1)) : (setCurrent(0))
        ) : (
        (current > 0) ? (setCurrent(current -1)) : (setCurrent(videosLength -1)) 
        )
    }
    

    return (<div>
            <button onClick={handleClick}>{content}</button>
        </div>
    )
}

export default ButtonCarousel