/** Call
 * function introduce(greeting, hobby) {
 console.log(greeting + ", my name is " + this.firstname +" " + this.lastname + ". I like " + hobby + ".")
 }

 const person = {
 firstname: 'Asilbek',
 lastname: 'Karomatov'
 }

 introduce.call(person, "Hello", "coding")*/

/** Apply
function introduce(greeting, hobby) {
    console.log(greeting + ", my name is " + this.firstname +" " + this.lastname + ". I like " + hobby + ".")
}

const person = {
    firstname: 'Asilbek',
    lastname: 'Karomatov'
}

introduce.apply(person, ["Hello", "coding"])
 */

/** bind */
function introduce(greeting, hobby) {
    console.log(greeting + ", my name is " + this.firstname +" " + this.lastname + ". I like " + hobby + ".")
}

const person = {
    firstname: 'Asilbek',
    lastname: 'Karomatov'
}

const introducePerson = introduce.bind(person, "Hello", "coding")
introducePerson()


