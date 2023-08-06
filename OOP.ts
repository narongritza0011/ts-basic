// class Point {
//     x: number = 0;
//     y: number = 0;

//     constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }
// }

// const point = new Point(10, 20);


// console.log(`${point.x} - : - ${point.y}`);



// class Point {
//     x: number = 0;
//     y: number = 0;
//     //fix ค่าไม่ให้เปลี่ยนเเปลง
//     readonly version: string = "1.0.1"
//     constructor(x: number = 0, y: number = 0) {
//         this.x = x;
//         this.y = y;
//         console.log("hello world")
//     }
// }

// const point = new Point();
// point.x = 100;



// console.log(`${point.x} - : - ${point.y}`);

// class Point {
//     x: number = 0;
//     y: number = 0;
// }

// const point = new Point();
// point.x = 10;
// point.y = 20;

// console.log(`${point.x} ${point.y}`);




// class Point {
//     _x: number = 0

//     //get ข้อมูลออกมา
//     get x(): number {
//         this._x = this._x + 1;
//         return this._x;
//     }

//     //set ข้อมูล
//     set x(value: number) {
//         this._x = value
//     }
// }


// const p = new Point();
// console.log(p.x)



1
class Person {
    name: string = "";
    constructor(name: string) {
        this.name = name;
    }
    sayHi() {
        console.log(`Hi , Im ${this.name}`)
    }
}


// การใช้งาน คุณสมบัติของ class หลัก

class Employee extends Person {
    salary: number = 0;
    constructor(name: string, salary: number) {
        super(name);
        this.salary = salary
    }
    sayHi() {
        super.sayHi();
        console.log(`Salary , ${this.salary}`)
    }
}


const person = new Employee("dew", 15000)
person.sayHi()






// example 
// Abstract Character class
// abstract class Character {
//     name: string;
//     health: number;
//     damage: number;

//     constructor(name: string, health: number, damage: number) {
//         this.name = name;
//         this.health = health;
//         this.damage = damage;
//     }

//     abstract attack(target: Character): void;

//     takeDamage(damage: number) {
//         this.health -= damage;
//         if (this.health <= 0) {
//             console.log(`${this.name} has been defeated.`);
//         } else {
//             console.log(`${this.name} took ${damage} damage. Health: ${this.health}`);
//         }
//     }
// }

// // Goblin class
// class Goblin extends Character {
//     constructor(name: string) {
//         super(name, 50, 10); // Call the constructor of the parent class
//     }

//     attack(target: Character) {
//         console.log(`${this.name} attacks ${target.name} for ${this.damage} damage.`);
//         target.takeDamage(this.damage);
//     }
// }

// // Example usage:
// const hero = new Goblin("Hero"); // Now, we create an instance of the Goblin class, not the Character class.

// const goblin1 = new Goblin("Goblin1");
// const goblin2 = new Goblin("Goblin2");

// hero.attack(goblin1); // The hero (Goblin) can attack other goblins
// hero.attack(goblin2);

// goblin1.attack(hero); // Goblins can attack the hero
// goblin2.attack(hero);