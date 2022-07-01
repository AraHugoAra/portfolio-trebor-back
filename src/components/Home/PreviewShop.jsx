import { useEffect, useState } from "react"

function PreviewShop() {

    const [state, setState] = useState({isFetching: true})
    const [display, setDisplay] = useState("notdisplayed")
    const baseUrl = "https://portfolio-strapi-autogithub.herokuapp.com"

    useEffect(() => {
        fetch('http://localhost:8000/store')
            .then(data => data.json())
            .then(json => setState({items: json.data, isFetching: false}))
            .catch(err => console.log(err))
    }, [])

    const showButton = e => {
        e.preventDefault();
        setDisplay("displayed");
    };
    
    const hideButton = e => {
        e.preventDefault();
        setDisplay("notdisplayed");
    };

    return (
        <div className="preview-shop">
            <h1 className="preview-shop__title">Store</h1>
            {state.isFetching ? (
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            ) : (
                <div className="preview-shop__content">
                        {state.items.map((item, index) => ((item.attributes.bestSale === true) || (index === state.items.length -1))  && (
                        <div    className="preview-shop__content--productbox"
                                key={`div-${item.id}`}  
                                onMouseEnter={e => showButton(e)}
                                onMouseLeave={e => hideButton(e)}>
                                <img className="preview-shop__content--cover" key={`img-${item.id}`} src={`${baseUrl}${item.attributes.image.data.attributes.formats.medium.url}`} alt="displayed-items" />  
                                <a className={`preview-shop__content--${display}`} href="http://localhost:3000/store" key={`link-${item.id}`}><button>Buy Now</button></a>
                        </div>      
            ))}
                </div>
            )}
                <a className="preview-shop__view-all" href="http://localhost:3000/store"><h2>Shop All</h2></a>
        </div>
    )
}

export default PreviewShop