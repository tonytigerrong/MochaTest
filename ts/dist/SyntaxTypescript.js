"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/**
 * Variable
 */
var greeting = 'David Done';
var numbers = [1, 2, 3];
var isBeginner = true;
var total = 100000000000000000;
var myName = "tony";
var myDescription = "my name is " + myName + ", have " + total + " money";
console.log(myDescription);
var n = null;
var u = undefined;
var isNew = null;
var list1 = [1, 2, 3];
var list2 = [2, 3, 4];
//Tuple
var person1 = ['first name', 13];
//Enum (numeric enum by default)
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Yellow"] = 6] = "Yellow";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Red;
console.log("color is", c);
//string enum
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Right"] = "Right";
    Direction["Left"] = "Left";
})(Direction || (Direction = {}));
//Unknown
var anUnknown = 4;
anUnknown = false;
//let aNumber: number = anUnknown; unknown variable can't assgine to any typed variable
//Any
//declare function getValue(key: string): any;
function getValue(key) {
    return "helloworld";
}
var str = getValue("key"); // assign any type value to a string, complie ok
var looselyTyped = {};
//let d = looselyTyped.a.b.c.d; // since looselyTyped is any, complie ok
var a = function (value) {
    return value;
};
console.log("function a(5) = ", a(5));
a = 5;
console.log("variable = ", a);
var b = 6;
console.log("b = ", b);
b = "6";
console.log("b = ", b);
//Never
function error(message) {
    throw new Error();
}
//type assertion
var someValue = "this is an unknown value";
var lenght = someValue.length; //or (<string> someValue).length ;
console.log("somee unknown value's lenght", lenght);
var names = ["David", "Tony", "Tom"];
console.log("names[0-2]:", names[0], names[1], names[2]);
/**
 * function
 */
function fullName(person) {
    console.log(person.firstName + " - " + person.lastName);
}
var p = {
    firstName: "tony",
    lastName: "tiger"
};
fullName(p);
function multipleParams(greeting) {
    var restOfParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfParams[_i - 1] = arguments[_i];
    }
    return greeting + " " + restOfParams.join("|");
}
console.log(multipleParams("hello", "david", "tom", "jerry"));
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [
    { suit: "diamonds", card: 2 },
    { suit: "spades", card: 10 },
    { suit: "hearts", card: 4 },
];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
var myType = "deposit"; // ok
//let myRes: MyResponse = {
var myRes = {
    status: 200,
    payload: "create successfully"
};
myRes = {
    status: 404,
    errorMsg: "request invalid"
};
;
var myResponse2 = {
    success: true,
    artist: {
        name: 'tone'
    }
};
var myResponse3 = {
    success: true,
    artwork: {
        name: 'david'
    }
};
/**
 * interface
 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
;
var Man = /** @class */ (function () {
    function Man(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    return Man;
}());
var p1 = {
    firstName: "david",
    lastName: "tiger",
    age: 10
};
//p1.age = 11; //age is readonly, so complie error here
var aMan = new Man("smith", "John");
console.log("aMan: ", aMan.lastName);
function fullName2(p) {
    console.log(p.firstName + " - " + p.lastName);
}
fullName(p1);
/**
 * class
 * private : access within class
 * protect : access by derived class
 * public  : access by any class
 */
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.greeting = function () {
        console.log("Hello " + this.name);
    };
    return Employee;
}());
var em = new Employee("tony");
em.greeting();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name) {
        return _super.call(this, name) || this;
    }
    Manager.prototype.planing = function () {
        console.log(this.name + " is planing project");
    };
    return Manager;
}(Employee));
var m1 = new Manager("David");
m1.greeting();
m1.planing();
var Dog = /** @class */ (function () {
    function Dog() {
        this.name = "golden retriver";
    }
    return Dog;
}());
var Fish = /** @class */ (function () {
    function Fish() {
        this.name = "Fish";
    }
    return Fish;
}());
function identity(arg) {
    return arg;
}
var output1 = identity(new Dog());
var output2 = identity(new Fish());
console.log(output1, output2);
