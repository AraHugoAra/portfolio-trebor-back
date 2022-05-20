import { useState } from 'react'

function Subscribe() {

    const [input, setInput] = useState("")

    function handleInput(e) {
        setInput(e.target.value)
        console.log(input)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const data = {email: `${input}`}
        fetch('http://localhost:1337/api/subscribers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({data}),
        })
        .then(response => {response.json()})
        .then(data => console.log('Success: ', data))
        .catch(error => console.log('Error', error))
    }

    return (
        <div style={{backgroundColor: "rgb(174, 174, 174", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <h2>Subscribe</h2>
            <form>
            <input type="email" placeholder='jean-michel.blanquer@elysee.fr' required onChange={(e) => handleInput(e)}></input>
            <br />
            <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Subscribe