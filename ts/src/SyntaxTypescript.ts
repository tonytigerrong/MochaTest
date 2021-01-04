import { kMaxLength } from "buffer";

/**
 * Variable
 */
const greeting: string = 'David Done';
const numbers: number[] = [1,2,3];
let isBeginner: boolean = true;
let total: number = 100000000000000000;
let myName: string = "tony";
let myDescription: string = `my name is ${myName}, have ${total} money`;
console.log(myDescription);
let n: null = null;
let u: undefined = undefined;
let isNew: boolean = null;
let list1: number[] = [1,2,3];
let list2: Array<number> = [2,3,4];
//Tuple
let person1: [string, number] = ['first name', 13];
//Enum (numeric enum by default)
enum Color {Red =5, Yellow, Blue};
let c: Color = Color.Red;
console.log("color is",c);
//string enum
enum Direction {
    Up= 'Up',
    Down= 'Down',
    Right= 'Right',
    Left= 'Left'
}
//Unknown
let anUnknown: unknown = 4;
anUnknown = false;
//let aNumber: number = anUnknown; unknown variable can't assgine to any typed variable
//Any
//declare function getValue(key: string): any;
function getValue(key: string): any{
    return "helloworld";
}
const str: string = getValue("key"); // assign any type value to a string, complie ok
let looselyTyped: any = {};
//let d = looselyTyped.a.b.c.d; // since looselyTyped is any, complie ok
let a: any = (value)=>{
    return value;
};
console.log("function a(5) = ", a(5));
a = 5;
console.log("variable = ", a);
let b: number|string = 6;
console.log("b = ", b);
b="6";
console.log("b = ", b);
//Never
function error(message: string): never{
    throw new Error();
}
//type assertion
let someValue: unknown = "this is an unknown value";
let lenght: number = (someValue as string).length; //or (<string> someValue).length ;
console.log("somee unknown value's lenght",lenght);
//indexable types
interface StringArray{
    [index: number]: string;
}
let names: StringArray = ["David","Tony","Tom"];
console.log("names[0-2]:", names[0],names[1],names[2]);
/**
 * function
 */
function fullName(person: {firstName: string, lastName: string}){
    console.log(`${person.firstName} - ${person.lastName}`);
}
let p = {
    firstName: "tony",
    lastName: "tiger"
};
fullName(p);
function multipleParams(greeting: string, ...restOfParams: string[]){
    return greeting + " " + restOfParams.join("|");
}
console.log(multipleParams("hello","david","tom","jerry"));

let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: any): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  // Otherwise just let them pick the card
  else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [
  { suit: "diamonds", card: 2 },
  { suit: "spades", card: 10 },
  { suit: "hearts", card: 4 },
];

let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);

//literal types
type TransactionType = "deposit" | "withdraw";
type ChildrenAge = 5 | 6 | 7 | 8 | 9 | 10;
let myType: TransactionType = "deposit"; // ok
//myType = "custom"; // not ok, since value 'custom' is out of declare type enum 
//let aKidAge: ChildrenAge = 51; // not ok

//union and intersection types
//union type
type ResponseType = {
    status: number,
    payload: string
};
type ResponseErr = {
    status: number,
    errorMsg: string
};
type MyResponse = ResponseType | ResponseErr;
//let myRes: MyResponse = {
let myRes: ResponseType | ResponseErr = {
    status: 200,
    payload: "create successfully"
};
myRes = {
    status: 404,
    errorMsg: "request invalid"
};
//intersection type
interface CommonResponse{
    success: boolean,
    error?: {
        message: string
    }
};
interface ArtistsData{
    artist: {
        name: string
    }
}
interface ArtworkData{
    artwork: {
        name: string
    }
}
type MyResponse2 = CommonResponse & ArtistsData;
type MyResponse3 = CommonResponse & ArtworkData;
let myResponse2: MyResponse2 = {
    success: true,
    artist:{
        name: 'tone'
    }
}
let myResponse3: MyResponse3 = {
    success: true,
    artwork:{
        name: 'david'
    }
}


/**
 * interface
 */
enum Gender { Male , Female};
interface Person{
    firstName: string;
    lastName: string;
    gender?: Gender;
    readonly age?: number;
}
class Man implements Person{
    firstName: string;
    lastName: string;
    constructor(fName: string, lName: string){
        this.firstName = fName;
        this.lastName = lName;
    }
}
let p1: Person = {
    firstName: "david",
    lastName: "tiger",
    age: 10
};
//p1.age = 11; //age is readonly, so complie error here
let aMan = new Man("smith","John");
console.log("aMan: ",aMan.lastName);
function fullName2(p: Person){
    console.log(`${p.firstName} - ${p.lastName}`);
}

fullName(p1);

/**
 * class
 * private : access within class
 * protect : access by derived class
 * public  : access by any class
 */
class Employee{
    public name: string;
    constructor(name: string){
        this.name = name;
    }
    public greeting(){
        console.log(`Hello ${this.name}`);
    }
}

let em = new Employee("tony");
em.greeting();
class Manager extends Employee{
    constructor(name: string){
        super(name);
    }
    public planing(){
        console.log(`${this.name} is planing project`);
    }
}
let m1 = new Manager("David");
m1.greeting();
m1.planing();
/**
 * Generic
 */
interface Animal{
    name: string;
}
class Dog implements Animal{
    name: string = "golden retriver";
    constructor(){}
}
class Fish implements Animal{
    name: string = "Fish";
    constructor(){}
}
function identity<T extends Animal>(arg: T){
    return arg;
}
let output1 = identity<Dog>(new Dog());
let output2 = identity<Fish>(new Fish());
console.log(output1,output2);