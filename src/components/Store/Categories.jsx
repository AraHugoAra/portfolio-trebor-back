import { useEffect, useState } from "react"


function Categories({activeCategory, setActiveCategory}) {

    const [categories, setCategories] = useState([])

    // Fetch categories
    useEffect(() => {
        fetch("http://localhost:1337/api/categories")
            .then(data => data.json())
            .then(json => setCategories(json.data))
    }, [])

    function handleReset() {
        setActiveCategory([])
        document.getElementById('WAV').checked = false
        document.getElementById('CD').checked = false
        document.getElementById('Vinyl').checked = false
        document.getElementById('Photo').checked = false
    }

    function handleCheck(e) {
        const filteredCurrentCategory = activeCategory.filter((category) => category !== e.target.value )
        e.target.checked === true ? (
            setActiveCategory([...activeCategory, e.target.value])
        ) : (
            setActiveCategory(filteredCurrentCategory)
    )}

    return (
        <div style={{width: "300px"}}>
            {categories.map((item) => (
            <div key={item.id}>
                <input onChange={(e) => handleCheck(e)} type="checkbox" value={item.attributes.name} name={item.attributes.name} id={item.attributes.name} />
                <label htmlFor={item.attributes.name}>{item.attributes.name}</label>
            </div>))}
            <button onClick={() => handleReset()}>Reset</button>
        </div>
    )
}

export default Categories