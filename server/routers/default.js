const express = require('express')
const router = express.Router()

router.get('/test_one', async (req, res) => {
    try {
        console.log('Test one get received')
        res.json({ message: 'test one' })
    } catch (e) {
        console.error(e)
        res.status(404).send(e)
    }
})

router.post('/test_two', async (req, res) => {
    try {
        console.log('Test two get received')
        res.json({ message: 'test two' })
    } catch (e) {
        console.error(e)
        res.status(404).send(e)
    }
})

module.exports = router
