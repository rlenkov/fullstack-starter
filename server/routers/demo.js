const express = require('express')
const { rollDice } = require('../roll.js')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        console.log('Test one get request received!')
        res.json({ message: 'With this API you can roll a 1-100 sided dice.' })
    } catch (e) {
        console.error(e)
        res.status(500).send(e)
    }
})

router.post('/roll', async (req, res) => {
    const { dice } = req.body
    try {
        const diceInt = parseInt(dice, 10)
        if (Number.isNaN(diceInt)) {
            throw new Error('Dice must be a number!')
        }
        if (diceInt > 100 || diceInt < 1) {
            throw new Error('Invalid dice identifier!')
        }
        console.log('Test two post request received!')
        const result = rollDice(1, dice)
        res.json({ result })
    } catch (e) {
        console.error(e)
        res.status(400).send({ message: e.message })
    }
})

module.exports = router
