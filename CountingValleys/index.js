function countingValleys(steps, path) {

    let valleyCounter = 0
    let seaLevel = 0

    for (let i = 0; i < steps; i++) {

        if (path[i] === 'D') {
            seaLevel--
        }

        else {
            if (seaLevel === -1) {
                valleyCounter++
            }
            seaLevel++
        }
    }

    return valleyCounter
}

console.log(countingValleys(10, 'UDDDUDUUDU'))