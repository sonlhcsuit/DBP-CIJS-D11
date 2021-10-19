// variable -

// let // non-re-declarable + block scoped 

// const // hằng số -> bất biến -> cannot re-assignment

// const a = 100
// a = 10 // invalid ->

// var // function scoped re-declarable

// var a = 10

// var a = 20 => không hoàn hảo 

// if ( a % 10){
//     var a = 20
//     console.log(a )
// }
// console.log(a)
// var a = 10
// var a = 20

// var b = 20
// var a = 30
// // căn phòng lớn , chung
// { 
//     // căn phòng riêng nhỏ
//     console.log(b)
//     var a = 10
//     console.log(a)
// }

// console.log(a)
// function myfunc () { // function scoped
//     var a = "fuzzy"
//     console.log(a)
// }
// myfunc()
// console.log(a)
// const obj = {
//     a : 10,
//     b:{
//         c:{d:
//         }
//     }
// }
// let i = 12
// for (var i = 0;i<10;i++){
//     // console.log(i)
// }
// console.log(i)
// console.log(i)

// Hoisting - kéo lên - pull - biến khai báo bởi var & function 
// console.log(a)
// let a = "string a"

// var b = "string b"

// function A (){
//     b()
// }