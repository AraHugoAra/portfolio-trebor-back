const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.json('hi')
})

app.get('/videos', (req, res) => {
        const options = {
            method: 'GET',
            url: 'http://localhost:1337/api/videos?populate=video,poster',
            headers: {Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN_SALT}`}
        }
        axios.request(options).then((response) => {
            res.json(response.data)
        })
    }
)

app.get('/store', (req, res) => {
    const options = {
        method: 'GET',
        url: 'http://localhost:1337/api/shop-items?populate=image,category',
        headers: {Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN_SALT}`}
    }
    axios.request(options).then((response) => {
        res.json(response.data)
    })
}
)

app.listen(8000, () => console.log(`Server is Running on ${PORT}`))