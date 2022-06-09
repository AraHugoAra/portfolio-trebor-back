import {useEffect, useState} from 'react'

function PreviewMusic() {

 const [state, setState] = useState({isFetching: true,})

    useEffect(() => {
        fetch('http://localhost:1337/api/musics?populate=cover')
            .then(res => res.json())
            .then(json => setState({
                            image: json,
                            isFetching: false}))
        }, []) 

    return (
        <div className='preview-music'>
        <h1 className='preview-music__title'>Music</h1>
            {state.isFetching === true ? (
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            ) : (
            <div className='preview-music__content'>
                <div>
                    <img    className='preview-music__content--cover'
                            src={`http://localhost:1337${state.image.data[0].attributes.cover.data.attributes.formats.small.url}`} 
                            alt={`cover-${state.image.data[0].attributes.title}`} />
                </div>
                <div className='preview-music__content--infos'>
                    <h2>Available Now</h2>
                    <h1>{state.image.data[0].attributes.title}</h1>
                    <a href={state.image.data[0].attributes.link} ><button>Stream</button></a>
                </div> 
            </div>)}
            <a className='preview-music__view-all' href="/music"><h2>View All Releases</h2></a>  
        </div>
    )
}

export default PreviewMusic