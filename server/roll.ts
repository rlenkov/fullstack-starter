export default (min: number, max: number) => {
    return min + Math.floor(Math.random() * (max - min + 1))
}
