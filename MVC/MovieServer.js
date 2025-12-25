const express = require('express')
const path = require('path')
const db = require('./config/db')
const movie = require('./Model/movieModel')
const router = require('./routs/movieRouter')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// static folder for images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use('/Movie', router)

app.listen(8000, () => {
    console.log('Server listen')
})