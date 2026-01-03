
// 'use strict';

function myFunc() {
    console.log(this)
}

// const person = {
//     name: 'Asilbek',
//     printName: function() {
//         console.log(this.name)
//     }
// }
//
// person.printName()

// console.log([1, 2] === [1, 2])

// function printName() {
//     console.log(`Hello, ${this.name}`)
// }
// const person1 = { name: 'Asilbek' }
// printName.call(person1)


const person = {
    name: 'Asilbek',
    printName: function() {
        setTimeout(() => {
            console.log(`Hello ${this.name}!`)
        }, 2000)
    }
}

// person.printName()
//
// let ism = "Ali"
//
// function oyna() {
//     let ism = "Vali"
//     console.log(ism) // Bu yerda nima chiqadi?
// }
//
// oyna()
// console.log(ism)


const user = {
    name: 'Ali',
    regularFunc: function() {
        console.log('Regular:', this.name)
    },
    arrowFunc: () => {
        console.log('Arrow:', this.name)
    }
}

user.regularFunc() // Regular: Ali
user.arrowFunc()   // Arrow: undefined (chunki u window dan qidiryapti)

var brand = "Men Globalman"
const car = {
    brand: 'Tesla',
    showBrand: function() {
        console.log("1-natija:", this.brand)

        const innerFunction = function() {
            console.log("2-natija:", this.brand)
        }
        innerFunction()

        const arrowFunction = () => {
            console.log("3-natija:", this.brand)
        }
        arrowFunction()
    }
}

car.showBrand()