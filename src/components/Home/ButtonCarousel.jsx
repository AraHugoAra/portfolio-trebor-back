function ButtonCarousel({content, action, setCurrent, current, setDisplayed}) {

    function handleClick() {
        action === "+" ? (
        (current < 5) ? (setCurrent(current +1)) : (setCurrent(0))
        ) : (
        (current > 0) ? (setCurrent(current -1)) : (setCurrent(5)) 
        );
        setDisplayed(true);
    }
    

    return (<div className={action === "-" ? "preview-videos__button--prev" : "preview-videos__button--next"}>
            <button onClick={handleClick}>{content}</button>
        </div>
    )
}

export default ButtonCarousel