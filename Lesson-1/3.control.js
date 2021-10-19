// loop 
// for - co dien, for-in for -of 
let a = [1, 2, 4]
let obj = {
    key: "some value",
    key2: "some value 2",
    key3: {
        key4: "value 4"
    }
}

for (let i = 0; i < 2; i++) {
    let element = a[i]
    console.log(element)
}


for (let key in obj) {
    console.log(obj[key])
}

let keys = Object.keys(obj)
console.log(keys)
for (let i = 0; i < keys.length; i++) {
    console.log(obj[keys[i]])
}

// for(let element of a ){
//     console.log(element)
// }

// while 
// do while 
// condition - branc

// if (truthy) {

// }

// if (truthy) {
// // truthy block
// } else {
// // falsy block
// }

// if (truthy){
// // truthy
// } else if (truthy2){

// } else if (){

// }

// switch (some_var) {
//     case 1 :
//         //
//         break;
//     case 2:
//         break

//         case 3:
//             break;
// }