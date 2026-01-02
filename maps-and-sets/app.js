// maps
const myMap = new Map()

myMap.set('firstname', 'Asilbek')
myMap.set('lastname', 'Karomatov')
myMap.set('age', 20)

console.log(myMap.get('firstname'))

myMap.set('job', 'Frontend Developer')
console.log(myMap.get('job'))

console.log(myMap.has('firstname'))

console.log(myMap.size)

myMap.delete('lastname')
console.log(myMap.size)
console.log(myMap)


const newMap = new Map()
newMap['firstname'] = 'Asilbek'
newMap['lastname'] = 'Karomatov'

console.log(newMap)
console.log(newMap.has('firstname'))
newMap.delete('lastname')
console.log(newMap)


//sets
const mySet = new Set()
mySet.add(10)
mySet.add(15)
mySet.add(15)
mySet.add("Asilbek")
const person = {firstname: 'Asilbek', lastname: 'Karomatov'}
mySet.add(person)

console.log(mySet)

mySet.add({firstname: 'Asilbek', lastname: 'Karomatov'})

console.log(mySet.has(10))
console.log(mySet.has(11))
console.log(mySet.has(person))

console.log(mySet.size)

mySet.delete(10)
console.log(mySet.has(10))