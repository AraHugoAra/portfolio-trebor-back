import {useState, useEffect} from 'react'

function Networks({imgName, divName}) {

    const [networks, setNetworks] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:1337/api/networks?populate=icon&link")
            .then(res => res.json())
            .then(json => {
                setNetworks(json.data)
            })
        }
    ,[])

    return (
        <div className={divName}>
        {networks.map(item => (<a key={`link-${item.id}`} href={item.attributes.link}><img className={imgName} key={`img-${item.id}`} src={`http://localhost:1337${item.attributes.icon.data.attributes.formats.thumbnail.url}`} alt={item.attributes.name} /></a>))}
        </div>

    )
}

export default Networks