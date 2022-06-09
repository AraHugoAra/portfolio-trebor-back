import {useState, useEffect} from 'react'

function Networks({className}) {

    const [state, setState] = useState({isLoading: true})
    
    useEffect(() => {
        fetch("http://localhost:1337/api/networks?populate=icon,iconWhite")
            .then(res => res.json())
            .then(json => {
                setState({networks: json.data, isLoading: false})
            })
        }
    ,[])

    return (
        state.isLoading === true ? (
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        ) : (
        <div className={className} >
            <ul className='networks'>
                {state.networks.map(item => 
                    (<li key={`link-${item.id}`}>
                        <a href={item.attributes.link}>
                        <img    className="networks__logo" key={`img-${item.id}`} 
                                src={className === "footer__networks" ? `http://localhost:1337${item.attributes.iconWhite.data.attributes.url}` : `http://localhost:1337${item.attributes.icon.data.attributes.url}`}
                                alt={item.attributes.name} />
                        </a>
                    </li>)
                    )}
            </ul>
        </div>)
    )
}

export default Networks