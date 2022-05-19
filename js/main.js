// Lesson 9 
// Task 1

let number = prompt("enter number")

function getArea(number) {
    if (number == "") {

        number = prompt("please, enter a radius")
        getArea(number)

    } else if (isNaN(number)) {

        number = prompt("it must be number")
        getArea(number)
    } else {
        console.log(`squear= ${Math.PI* Math.pow(number,2)}`)
    }
}
getArea(number)




//task 2
let number = prompt("enter number")

function getSqrt(number) {
    if (number == "") {
        number = prompt("please, enter a radius")
        getSqrt(number)
    } else if (isNaN(number)) {
        number = prompt("it must be number")
        getSqrt(number)
    } else if (number < 0) {
        number = prompt("please, enter a positive number")
        getSqrt(number)
    } else {
        console.log(`pow from ${number}= ${Math.pow(number,2)}`)
    }
}
getSqrt(number)

// // Task 3
const MyMath = {
    PI: function () {
        return 355 / 113
    },

    pow: function (number, degree) {
        if (typeof number == "string" || typeof degree == 'string') {
            alert("no it's must be a number")
        } else if (number == undefined || degree == null) {
            alert("no no, write some thing")
        }

        return number ** degree
    },

    abs: function (number) {
        if (typeof number == "string") {
            alert("no it's must be a number")
        } else if (number == undefined) {
            alert("no no, write some thing")
        }
        return +number
    },



    max: function () {
        if (arguments.length == 0) {
            return alert("enter some number")
        }

        for (let j = 0; j < arguments.length; j++) {
            if (typeof (arguments[j]) == "string") {
                return alert("it must be a number")
            } else {
                continue
            }
        }

        let n = -Infinity
        for (let i = 0; i < arguments.length; i++)
            if (arguments[i] >= n) {
                n = arguments[i]
            }
        else {
            continue
        }
        return n
    },


    min: function (p) {
        if (arguments.length == 0) {
            return alert("enter some number")
        }

        for (let j = 0; j < arguments.length; j++) {
            if (typeof (arguments[j]) == "string") {
                return alert("it must be a number")
            } else {
                continue
            }
        }
        let n = Infinity
        for (let i = 0; i < arguments.length; i++)
            if (arguments[i] <= n) {
                n = arguments[i]
            }
        else {
            continue
        }
        return n

    },
}

console.log(MyMath.max(11, -2, 90, -8, 99, 3, 5, 9, 2, 11))


// Lesson 10
// Task1
function arrCopy(n) {
    return n.map(el => el)
}
const arr2 = arrCopy([1, 2, 3, [1, 2, 3]])
console.log(arr2)

// Task2

function arrTostring(arr) {
    return arr.map(el => `${el}`)
}
const arr2 = arrTostring([1, 29, 300, [1, 2, 3]])
console.log(arr2)

// Task3

function getLength(arr) {
    return arr.map(el => el.length)
}
const arr2 = getLength(["fff", "lll", "d", "eeeeee"])
console.log(arr2)

// Task 4

function removeDuplicates(arr) {
    let res = []
    for (let str of arr) {
        if (!res.includes(str)) {
            res.push(str)
        }
    }
    return res
}
const arr2 = removeDuplicates(["dd", "dd", "d", "ttt", 'ttt'])
console.log(arr2)













///own



// let Person={
// name:"scd ff ,[s] sef/, sf se ef ",
// age:'12',

// }
// let obj2={
//     name:"eee",
//     price:34
// }

// let as={}
// let ff=Object.assign({},Person)
// let newPerson=JSON.parse(JSON.stringify(Person))

// console.log(newPerson)

// function Car(brand = "bmw", price = "88") {
//     this.brand = brand;
//     this.price = price

// }
// let car = new Car("au")
// console.log(car)

// let m= -4
// console.log(parseInt(9.99))

// function rundomColor(){
// const r=Math.round(Math.random()*(255-0))
// const g=Math.round(Math.random()*(255-0))
// const b=Math.round(Math.random()*(255-0))
// return [r,g,b]
// }
// const bodyBackground=rundomColor()
// document.body.style.background=`rgb(${bodyBackground})`

// let user={}
// let id=2
// let b =user.find((element)=>element.id==id)
// let c =user.filter(user=>user.name.include("dd"))
// let powNumbers=number.map(num=>num**2)
// let powNumbers=number.some(num=>num>2) чи хоть один
// let powNumbers=number.every(num=>num>2)  чи всі


// const euros = [29.76, 41.85, 46.5];
// const sum = euros.reduce((total, amount) => {return total += amount},0); 
// console.log(sum)

// number=[3,2,5,6]
// let y=number.some(num=>num>2)
// console.log(y)

// function f(){
//     if number.some
// }