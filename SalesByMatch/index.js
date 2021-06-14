function sm(n, ar) {
    let pairs = 0
    const trans = ar.reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 0
        }
        obj[item]++
        return obj
    }, {})

    const transVals = Object.values(trans)

    for (let i = 0; i < transVals.length; i++) {
        const int = Math.floor(transVals[i] / 2)
        pairs += int
    }
    return pairs
}


sm(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])