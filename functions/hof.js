/** Funksiyani argument sifatida berib yuborish*/
const isEven = (num) => num % 2 === 0
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const evenNumbers = numbers.filter(isEven)
console.log(evenNumbers)

/** Funksiyaning funksiya qaytarish holati*/
const add = (x) => (y) => x + y
const x10 = add(10)
console.log(x10(15))
const result = add(10)(15)
console.log(result)

/** Soliq hisoblab beruvchi funksiya */
function createTaxCalculator(taxRate) {
    return function(productPrice) {
        return productPrice * taxRate
    }
}

const educationTax = createTaxCalculator(0.05) // 5% tax
const transportationTax = createTaxCalculator(0.2) // 20% tax
const foodTax = createTaxCalculator(0.1) // 10% tax

console.log(educationTax(1000))
console.log(transportationTax(10000))
console.log(foodTax(1000))