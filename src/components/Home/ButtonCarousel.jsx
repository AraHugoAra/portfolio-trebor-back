function ButtonCarousel({action, setCurrent, current, setDisplayed}) {

    function handleClick() {
        action === "+" ? (
        (current < 5) ? (setCurrent(current +1)) : (setCurrent(0))
        ) : (
        (current > 0) ? (setCurrent(current -1)) : (setCurrent(5)) 
        );
        setDisplayed(true);
    }
    

    return (<div>
                <img    onClick={handleClick}
                        className={action === "-" ? "preview-videos__button--prev" : "preview-videos__button--next"} 
                        src={action === "+" ? (
                            "http://localhost:1337/uploads/next_ff5f2a7df6.png?updated_at=2022-06-11T13:01:23.846Z"
                            ) : (
                            "http://localhost:1337/uploads/previous_bd56f6d8a5.png?updated_at=2022-06-11T13:01:08.313Z"
                            )} 
                        alt={`button-${action}`} />
        </div>
    )
}

export default ButtonCarousel