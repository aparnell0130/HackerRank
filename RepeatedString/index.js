function repeatedString(s, n) {
    // Write your code here
    let counter = 0
    let numStrAs = 0
    let r = n % s.length

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            numStrAs++
        }
    }



    if (n >= s.length) {
        counter = Math.floor(n / s.length) * numStrAs
    }
    for (let i = 0; i < r; i++) {

        if (s[i] === 'a') {
            counter++
        }

    }
    return counter
}
console.log(repeatedString('aba', 10))
console.log(repeatedString('a', 1000000000000))
console.log(repeatedString('ceebbcb', 817723))
console.log(repeatedString('gfcaaaecbg', 547602))