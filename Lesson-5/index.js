// const btn = document.getElementById("btn")

// btn.addEventListener("click", onClickHandle)


//price // identifier - định danh 

// Function -> nên có định danh  
// (): group
// (): make a function call 

// function myFunc() {

// }
// const myFunc1 = function () {

// }

// const myFunc2 = () => {

// }

// let myf = myFunc2
// myFunc2()
// myf()

// Callback
// - 1 function 
// - 2 function được truyền vào hàm khác như là tham số
// myFunc( a()     ) // make a function. Sẽ thành công nếu như a là 1 hàm và kết quả trả về cũng là 1 hàm.  


function onClickHandle(thamSo) {
	console.log(thamSo)
	console.log("Click me!")
}

// HOF - higher order function

/**
 * @param greet String 
 * @param callback a function take an agrument ...
 * My first higher-order function
 */
// function myHOF(greet, callback) {
// 	let value = 6
// 	callback(value)
// 	console.log(greet)
// 	return greet
// }


// myHOF("Hello", (a) => {
// 	console.log(`From callback with ${a}`)
// })

// document.getElementById("id").addEventListener()
// setTimeout(()=>{
// 	console.log("call back")
// },5000)


// Closure & Context 
// 1 - Closure là khả năng cho 1 hàm nhớ về nơi nó được sinh ra
// 2 - Context (execution context) - chính là this. Tuỳ thuộc vào nơi sinh ra (khai báo) và nơi thực thi mà function sẽ có 1 context ( execution context - ngữ cảnh thực thi) khác nhau (tức là this khác nhau!)

// function myHOF(greet, callback) {
// 	const someObject = {
// 		k:"v"
// 	}
// 	function someFunction(){
// 		function xFunction(){
// 			console.log(this)
// 			console.log(someObject)
// 		}
// 		return xFunction
// 	}
// 	return someFunction
// }

// const some = myHOF()
// const x = some()
// // x()
// const obj = {
// 	"kk":"vv",
// 	ff: function (cb){
// 		cb()
// 		console.log(this)
// 	}
// }
// function cbF(){
// 	this["kkk"] = "vvv"
// 	console.log(this)

// }
// cbF = cbF.bind(obj)
// obj.ff(cbF)
// console.log(obj)
// Thread - Thứ tự thực hiện các dòng code

// Async

// setTimeout(
// 	()=>{
// 		console.log("Run after 2s")
// 	},2000
// )

// console.log("Run now")

// Promise

// - Web APIs 
// - Thread in Javascript 
// 1 - 1 luồng bình thường & 1 luồng bất thường (bất đồng bộ) sync /async

// Event Loops + Event Queue -> trái tim của lập trình async trong javascript | được implement bởi runtime sử dụng đa luồng 

// Promise - 1 cái kiểu dữ liệu (1 class ) dành cho lập trình bất đồng bộ

// const a = Promise.resolve()
// setTimeout(
// 	()=>{
// 		console.log("Run after 2s")
// 	},0
// )

// console.log("Line 128")

// a.then(()=>{
// 	console.log("Exit")
// })

// const a = fetch('https://reqres.in/api/users?page=2')
// console.log(a)
// a.then(r=>r.json()).then(r=>{
// 	console.log(r)
// })
// console.log("abc")
// async function getData(page){
// 	const response = await fetch(`https://reqres.in/api/users?page=${page}`)
// 	console.log(response)
// 	const data = await response.json()
// 	console.log(data)
// }
// console.log("now")
// getData(2)
// console.log("next now?")

const myPromise = new Promise(
	(resolve, reject) => {
		setTimeout(() => {
			resolve("some kind of data")
		}, 2000)
		console.log("in Promise constructor")
	})
function someF (){
	myPromise.then((data) => {
		console.log(data)
		return 1
	})
		.then((v) => {
			console.log(v)
			myP = new Promise((resolve, reject) => {
				setTimeout(() => {
					// try {
						
						const f = resolve
						if (Math.random() > 0.2){
							throw new Error("Some weird error?")
						} 
						f("line 165")
	
						// } catch (e) {
					// 	reject(e)
					// }
				}, 2000)
			})
			return myP
		})
		.catch(err => {
			console.log(err)
			console.log("Some error")
			return "ERROR VALUE"
		})
		.then((v) => {
			Node
			console.log("No error happen")
			console.log(v)
		})
		.then()
		.catch(reason => {
			console.log("catching error")
			console.log(reason)
		})
	
}
try{
	someF()	
}catch (e){
	console.log(e)
}
console.log("now")
// Xử lý firebase