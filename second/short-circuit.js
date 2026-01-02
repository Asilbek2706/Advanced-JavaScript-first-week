/* Short-circuit evaluation */

// OR ( || )
// console.log(true || false)
// console.log(10 || 'Asilbek')
// console.log('' || 'Asilbek')
// console.log(true || 0)
//
// const person = {
//     name: 'John',
//     age: 32
// }
// console.log(person.job || 'Software Engineer')

//AND ( && )
// console.log(true && false)
// console.log(0 && 'Asilbek')
// console.log('' && 'Asilbek')
// console.log(true && null)
//
// const person = {
//     name: 'John',
//     age: 32
// }
// console.log(person.job && 'Software Engineer')

/* Nullish coalescing operator */
const subject = ''
const emailSubject = subject ?? 'A default subject'
console.log(emailSubject)

/* Optional chaining */
const person = {
    name: 'John',
    age: 25
}

const companyName = person.job?.companyName;  //person.name && person.name.companyName
console.log(companyName)
console.log(person.study?.())

