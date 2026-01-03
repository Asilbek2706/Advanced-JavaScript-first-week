/** JS da 7 xil primitive data types mavjud
 * 1.string
 * 2.number
 * 3.bigint
 * 4.boolean
 * 5.undefined
 * 6.symbol
 * 7.null
 */
// let age = 20
// let firstname = 'John'
// let job = null
//
// let person1Name = "Asilbek"
// let person2Name = person1Name
//
// console.log(person1Name)
// console.log(person2Name)
//
// person1Name = 'John'
// console.log(person1Name)
// console.log(person2Name)
//
// /* Reference data type */
// const hobbies = ['Football', 'Coding']
// const anotherHobbies = hobbies
// console.log(hobbies)
// console.log(anotherHobbies)
//
// hobbies.push('Swimming')
// console.log(hobbies)
// console.log(anotherHobbies)
//
// const person = {
//     name: 'John',
//     age: 20,
//     job: 'Frontend Developer'
// }
//
// const anotherPerson = person
// console.log(person)
// console.log(person)
//
// anotherPerson.age = 26
// console.log(person)
// console.log(person)


// const hobby = ['Football', 'Coding']
// const anotherHobby = hobby
//
// if (hobby === anotherHobbies) {
//     console.log('1. Identical hobbies')
// }

// const newHobby = ['Football', 'Coding']
// if (hobby === newHobby) {
//     console.log('2. Identical hobbies')
// }

const hobbies = ['Football', 'Coding']
const spreadHobbies = [...hobbies]
hobbies.push('Hockey')
console.log(hobbies)
console.log(spreadHobbies)

const forHobbies = []
for (const hobby of hobbies) {
    forHobbies.push(hobby)
}

const jsonHobbies = JSON.parse(JSON.stringify(hobbies))