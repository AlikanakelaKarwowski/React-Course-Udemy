
class Person {
    constructor(name = 'Anon', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        //return 'Hi' + this.name;
        return `Hi I am ${this.name}`
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`
    }
}

const me = new Person('Alex Karwowski');
const other = new Person();

console.log(me)
console.log(me.getGreeting())