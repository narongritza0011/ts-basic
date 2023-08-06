class Humans {

    name: string = ''
    lastname: string = ''
    age: number = 0
    sayHello() {
        return "Hello I'm " + this.name + " and " + this.age + " years old."
    }
}

const user1: any = new Humans()
user1.name = "dew"
user1.age = 23
console.log(user1.sayHello())