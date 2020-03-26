const rollDice = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1))
}

module.exports = {
    rollDice,
}
