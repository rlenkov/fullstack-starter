import express from 'express'
import path from 'path'
import { router } from './routers/demo'

const app = express()
const publicPath = path.join(__dirname, '..', 'public')

const port = process.env.PORT || 5000

app.use(express.static(publicPath))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// this is a default sub-router for demo
app.use('/demo', router)

// always just serve index.html on random routes
app.get('*', (req, resp) => {
    resp.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})