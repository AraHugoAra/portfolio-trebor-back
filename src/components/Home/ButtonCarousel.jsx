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
                            "https://portfolio-trebor.s3.eu-west-3.amazonaws.com/thumbnail_small_next_ff5f2a7df6_a0b3b4d01f.png?width=500&height=500"
                            ) : (
                            "https://portfolio-trebor.s3.eu-west-3.amazonaws.com/thumbnail_small_previous_bd56f6d8a5_da239d5977.png?width=500&height=500"
                            )} 
                        alt={`button-${action}`} />
        </div>
    )
}

export default ButtonCarousel