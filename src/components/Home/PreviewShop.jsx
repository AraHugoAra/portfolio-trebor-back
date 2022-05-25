import { useEffect, useState } from "react"

function PreviewShop() {

    const [state, setState] = useState({isFetching: true})
    const baseUrl = "http://localhost:1337"

    useEffect(() => {
        fetch("http://localhost:1337/api/shop-items?populate=image")
            .then(data => data.json())
            .then(json => setState({items: json.data, isFetching: false}))

    }, [])
    

    return (
        <div style={{height: "750px", 
                     background: "#ffe5e8",
                     display: "flex",
                     flexDirection: "column",
                     justifyContent: "center",
                     alignItems: "center",
                     textAlign: "center"
                    }}>
            <h1>Store</h1>
            {state.isFetching ? (
                <div>Loading...</div>
            ) : (
                <div>
                        {state.items.map(item => item.attributes.bestSale === true && (
                        <div key={`div-${item.id}`}>
                            <img key={`img-${item.id}`} src={`${baseUrl}${item.attributes.image.data.attributes.formats.medium.url}`} alt="best-seller" />
                            <br key={`br-${item.id}`}/>
                            <a className="btn-test" href="http://localhost:3000/store" key={`link-${item.id}`}>Buy Now</a>
                        </div>      
            ))}
                </div>
            )}
                <a href="http://localhost:3000/store"><h2>Shop All</h2></a>
        </div>
    )
}

export default PreviewShop