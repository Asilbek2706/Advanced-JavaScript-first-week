// 'use strict';
//
// const nexia = ['Nexia 1', 'Nexia 2'];
// const gentra = ['Gentra', 'Onix'];
//
// const barchaMashinalar = [...nexia, 'Malibu', ...gentra]
// console.log(barchaMashinalar)
//
// const sonlar = [10, 20, 30, 40, 50];
// const [birinchi, ...qolganlari] = sonlar;
// console.log(qolganlari);
//
// const nums = [1, 2, 3, 4, 5]
//
// const [n1, n2] = nums
// console.log(nums)
// console.log(n1, n2)
//
// const [first, second,  ...others] = nums
// console.log(first)
// console.log(second)
// console.log(others)
//
// // const person = { name: 'Asilbek', lastName: 'Karomatov', age: 20 }
// // const { name, age } = person
// // person.name = name
// // person.age = age
// // console.log(person.name)
// // console.log(name)
// // console.log(age)
//
// // const { username, ...othernames} = person
// // console.log(username)
// // console.log(othernames)
//
//
// /* Rest operator */
// // const total = (...numbers) => {
// //     return numbers.reduce((acc, curr) => acc + curr, 0)
// }
// //
// // console.log(total(20, 30, 23, 45))
//
// // const { name, ...othernames } = {
// //     name: 'Asilbek',
// //     lastName: 'Karomatov',
// //     age: 20,
// //     job: 'Frontend Developer'
// // }
// // console.log(name)
// // console.log(othernames)
// // console.log(job)
//
// /* spread operator */
// // const numbers = [10, 15, 20]
// // const max = Math.max(...numbers)
// // const min = Math.min(...numbers)
// // console.log(max)
// // console.log(min)
//
// // const array1 = [1, 2, 3, 4, 5]
// // const array2 = [...array1, 6, 7, 8, 9, 10]
// // console.log(array2)
// //
// // const person = {
// //     name: 'John',
// //     age: 4
// // }
// // const personWithJob = {...person, job: 'Frontend Developer'};
// // console.log(personWithJob);
//
// // SPREAD (Sochyapmiz)
// // const qoshiqlar = ['vilka', 'pichoq'];
// // const stol = [...qoshiqlar, 'tarelka']; // ['vilka', 'pichoq', 'tarelka']
// // console.log(stol);
//
// // REST (Yig'yapmiz)
// // const [birinchi, ...qolganlari] = ['olma', 'behi', 'anor', 'anjir'];
// // console.log(qolganlari);
// // console.log(birinchi);
//
// function greet() {
//     console.log('Hello World')
// }
//
// function respond() {
//     return setTimeout(() => {
//         console.log("Hey")
//     }, 2000)
// }
//
//
// greet()
// respond()

const foo = () => console.log('First')
const bar = () => setTimeout(() => console.log('Second'), 2000)
const baz = () => console.log('Third')

bar()
foo()
baz()