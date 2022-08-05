import express from 'express'
import rollDice from '../roll'

export const router = express.Router()

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
    const { result } = req.body
    try {
        if (Number.isNaN(result)) {
            throw new Error('Dice must be a number!')
        }
        if (result > 100 || result < 1) {
            throw new Error('Invalid dice identifier!')
        }
        console.log('Test two post request received!')
        const rollResult = rollDice(1, result)
        console.log(rollResult)
        res.json({ result: rollResult })
    } catch (e: any) {
        console.error(e)
        res.status(400).send({ message: e.message })
    }
})

export default router
