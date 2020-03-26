const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const defaultSubRouter = require('./routers/demo')

const app = express()
const publicPath = path.join(__dirname, '..', 'public')

const port = process.env.PORT || 5000

app.use(express.static(publicPath))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// this is a default sub-router for demo
app.use('/demo', defaultSubRouter)

// always just serve index.html on random routes
app.get('*', (req, resp) => {
    resp.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
