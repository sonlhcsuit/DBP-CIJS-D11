const translatePigLatin = (word) => {
    let modifiedWord = word;
    const vowels = 'euoai'.split('')
    if (vowels.indexOf(word[0]) != -1) {
        modifiedWord = `${word}way` // word + "way"
    } else {
        let firstVowelIndex = 0;
        for (let i = 0; i < word.length; i++) {
            if (vowels.indexOf(word[i]) != -1) {
                firstVowelIndex = i;
                break;
            }
        }
        let consonantCluster = word.slice(0, firstVowelIndex)
        let remain = word.slice(firstVowelIndex)
        // console.log(consonantCluster)
        // console.log(remain)
        modifiedWord = `${remain}${consonantCluster}ay`
    }
    return modifiedWord
}

const p = (i, storages) => {
    return p(i - 3, storages) + p(i - 1, storages)
}
const padovan = (m, n) => {

    return padovan(m - 1, n - 1, storage)
    const positive = [] // bắt đầu từ 0 -> vô cùng dương
    const negative = [] // 0 -> vô cùng âm 
    // tính positive trước
    for (let i = 0; i < n + 1; i++) {
        if (i == 0 || i == 1 || i == 2) {
            positive.push(1)
        } else {
            let value = positive[i - 3] + positive[i - 2]
            positive.push(value)
        }
    }

    // for (let i = 3; i < Math.abs(m) + 3; i--) {
    //     if (i == 0 || i == 1 || i == 2) {
    //         negative.push(1)
    //     } else {
    //         let value = negative[i - 3] - negative[i - 1]
    //         negative.push(value)
    //     }
    // }

    for (let i = 2; i > m - 1; i--) {
        if (i == 0 || i == 1 || i == 2) {
            negative.push(1)
        } else {
            let l = negative.length
            let value = negative[l - 3] - negative[l - 1]
            negative.push(value)
        }
    }
    return [...negative.slice(3).reverse(), ...positive]
}

let result = translatePigLatin("schwayz")
console.log(result)
result = padovan(-10, 10)
console.log(result)
// let name = "Son"
// let greet = "Hello"
// const greeting = greet + ", welcome to the house, Mr. " + name  
// const greetings = `${greet}, welcome to the house,Mr. ${name}`
// const a = [1,2,3]
// read - access element []
// string -> array | array of chars, read-only : vowels[0] = 'huha' -> invalid     
// if ('a' in 'aaaabbb'){
//     console.log("true")
// }

// document.querySelector()
// document.getElementById()

