import { useState, useEffect } from 'react'

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
            fetch('https://portfolio-trebor-strapi.herokuapp.com/api/subscribers', {
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
        <div className='subscribe'>
            <form className='subscribe__form'>
            <h1 className='subscribe__title' id="subscribe">Subscribe</h1>
            <input  className={status !== "unvalid" || input === "" ? "formInput--valid" : "unvalid"}
                    name="form-input" type="email" 
                    placeholder='Email Address (required)' required 
                    onChange={(e) => handleInput(e)}>
            </input>
            <button onClick={handleSubmit}>Submit</button>
            {status === "unvalid" && <p className='unvalid'>The email "{input}" appeared to be unvalid. Please try again.</p>}
            {status === "valid" && <p className='valid'>Welcome to our subscribers!</p>}
            </form>
        </div>
    )
}

export default Subscribe