

//เเบบไม่ return ค่า
// const sayHello = () => {
//     console.log("Hello world")
// }

// sayHello()


//เเบบ return ค่าไปใช้
// const Test = (): number => {

//     return 1
// }

// console.log(Test())


//เเบบ return ค่า string ไปใช้
// const sayTxt = (txt: string, name: string = "None"): string => {
//     return "hi : " + txt + " name : " + name;
// }
// console.log(sayTxt("test",))

// console.log(sayTxt("test", "dew"))


//เเบบ ใช้ any
// const sayTxt = (txt: any, name: string = "None"): string => {
//     return "hi : " + txt + " name : " + name;
// }
// console.log(sayTxt(1))

//เเบบ reast parameter
// const sum = (a: number, b: number, ...rest: number[]): number => {
//     return a + b + rest.reduce((a, b) => a + b, 0)
// }
// console.log(sum(1,2,3,4,5))

//name parameter
const add = ({ x, y }: { x: number, y: number }): number => {
    return x + y
}

console.log(add({ y: 5, x: 100 }))
