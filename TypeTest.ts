const app_name = "my app"
const app_version = "1.0.0"
const myArray: number[] = [1, 2, 3];
let myArray2: any[] = [1, 2, 3, "test", false];

const sayHello = () => {

    if (true) {
        let myName: string = "dew";

        console.log(myName)

    }

}

// status ด้วย enum เอาไว้ใช้ได้
enum WorkStatus{
    Task = 1,
    Working,
    Done
}

console.log(WorkStatus.Working)

//การเก็บ array
// let employee: [number, string, boolean][] =[ [1, "test", true], [2, "b", false]]

// console.log(employee)

// employee.push( [3, "c", true])
// console.log(employee)


