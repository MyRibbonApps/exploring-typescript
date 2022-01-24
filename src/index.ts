let id: number = 5;

console.log('ID:', id);

// Types

let developer: string = 'Anton Franzen';
let knowsTypescript: boolean = true;
let x: any = "Hello World";
let age: number = 20;

let ids: any[] = [1,2,3,4,5];
let arr: any[] = [1, true, 'hello'];

// Tuple
let person: [number, string, boolean] = [1, 'Anton', true];
//Tuple Array
let employee: [number, string][];
ids.push("1");
console.log(ids);

employee = [
    [1, 'Anton']
]
console.log(employee);

type user = {
    id: number,
    name: string,
    age: number
}
const userData: user = {
    id: Math.random(),
    name: 'Anton',
    age: 20
    }

    console.log(userData)

    // Assertion

    let state: any = false;
    let setState = <boolean>state // this takes whateverr state is and we can only set this to false/true

    console.log(setState);

    // Functions

    function testFunc(x: string): string {
        console.log("ibweih")
        return x;
    }
    function addNum(x: number, y: number): number {
        return x + y;
    }

    console.log(addNum(1,2))

    function other(message: string | number): void {
        console.log(message)
    }


    // Interfaces

    interface userInterface {
        readonly id: number, // Readonly, we cannot change the id.
        name: string,
        age?: number // Optional value.
    }

    const user1: userInterface = {
        id: 1,
        name: 'Anton',
        age: 20 // Optional we do not need to have the age here..
    }

    // user1.id = 10 does no work as its read only
    console.log(user1);

    interface TransformFile {
        (filename: string, callback?: Function): string
    }

    const transformFile: TransformFile = (filename: string): string => {
        return filename;
    }

    console.log(transformFile("The filename"));