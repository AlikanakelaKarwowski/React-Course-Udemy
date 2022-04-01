
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
class Student extends Person {
    constructor(name, age, major = 'Undecieded'){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
        let description = super.getDescription()
        
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }
        return description
    }
}


class Traveler extends Person {
    constructor(name, age, home = 'Ohio') {
        super(name, age)
        this.home = home
    }
    hasHome(){
        return !!this.home
    }
    getGreeting(){
        let description = super.getDescription()

        if (this.hasHome()){
            description += ` I am visiting from ${this.home}`
        }
        return description
    }
}

const me = new Student('Alex Karwowski', 25, 'CS');
const other = new Traveler('Alex Karwowski', 22, 'Pootown');
console.log(other.getGreeting())

console.log(me)
console.log(me.getGreeting())
console.log(me.getDescription())
console.log(me.hasMajor())