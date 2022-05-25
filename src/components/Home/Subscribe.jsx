import { useState, useEffect } from 'react'
import '../../styles/App.css'

function Subscribe() {

    const [input, setInput] = useState("")
// email input status: waiting = waiting for input / neutral ; valid = subscriber added ; unvalid = uncorrect email format
    const [status, setStatus] = useState("waiting")

    function handleInput(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const data = {email: `${input}`};
// eslint-disable-next-line
        const mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (`${input}`.match(mailFormat)) {
            fetch('http://localhost:1337/api/subscribers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({data}),
            })
            .then(response => {response.json(); response.ok && setStatus("valid")})
            .catch(error => console.log(error))
        } else {
            setStatus("unvalid")
        }
    }

    useEffect (function clearInput() {
        const timer = status === "unvalid" ? (
            setTimeout(() => {setInput(""); setStatus("waiting")}, 4000)
        ) : (null)
        return () => clearTimeout(timer)
    }, [status])

    return (
        <div style={{backgroundColor: "#d8d8d8", 
                     display: "flex", 
                     flexDirection: "column", 
                     justifyContent: "flex-start", 
                     alignItems: "center",
                     textAlign: "center",
                     height: "700px"
                    }}>
            <h2>Subscribe</h2>
            <form>
            <input  className={status !== "unvalid" || input === "" ? "formInput--valid" : "formInput--unvalid"} 
                    style={{width: "200px"}}
                    name="form-input" type="email" 
                    placeholder='jean-michel.blanquer@elysee.fr' required 
                    onChange={(e) => handleInput(e)}>
            </input>
            <button onClick={handleSubmit}>Submit</button>
            {status === "unvalid" && <p style={{color: "red", fontStyle: "italic"}}>Email appeared to be unvalid. Please try again.</p>}
            {status === "valid" && <p style={{color: "green", fontStyle: "italic"}}>Welcome to our subscribers!</p>}
            </form>
        </div>
    )
}

export default Subscribe