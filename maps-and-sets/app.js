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

const sonlar = [1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 5, 7, 8, 8, 9]
const newSet = [...new Set(sonlar)]
console.log(newSet)

const userIds = [101, 102, 101, 105, 102, 110, 105];

const uniqueIds = [...new Set(userIds)]
console.log(uniqueIds);

const dictionary = new Map()
dictionary.set('olma', 'apple')
dictionary.set('banan', 'banana')

console.log(dictionary.has('cherry'))
console.log(dictionary.size)
console.log(dictionary)

const aMap = new Map();
const obj = { id: 1 };

aMap.set(obj, "Admin");

console.log(aMap.has({ id: 1 }));
console.log(aMap.has(obj));

const mevalar = ['Olma', 'Banan', 'Uzum'];

for (const meva of mevalar) {
    console.log(meva);
}

const prices = new Map([
    ['Bread', 2],
    ['Milk', 5],
    ['Cheese', 15]
]);

for (const [product, price] of prices) {
    console.log(`${product}: ${price} $`);
}