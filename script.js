//JavaScript
console.log("Hello JavaScript");
console.log(10 + 20);

console.log("Hello");

//variables-Varc,Let,Const
var a = 10;
let b = 20;
const c = 30;
console.log(a);
console.log(b);
console.log(c);

//Reassignment
let x=10;
x=20;
console.log(x);
let y=10;
y=20; //Error

//Scope
//Global Scope
let College = "United University";
function show() {
    console.log(College);
}
show();

function test() {
    let x=10;
    console.log(x);
}

test();
console.log(x); //Error

//Block Scope
if(true) {
    let x=10;
    const y=20;
    console.log(x);
    console.log(y);
}
console.log(x); //Error

//Var Vs let
if(true){
    var a=10;
    let b=20;
}
console.log(a); //10
console.log(b); //Error

//Scope chain
let college="United University";
function teacher() {
    let subject="JavaScript";
    function lecture() {
        let topic="Scope";
        console.log(college);
        console.log(subject);
        console.log(topic);
    }
    lecture();
}
teacher();

//Data types
let name="Rahul"; //String
let age=20; //number
let passed=true; //boolean
let X; //undefined
let Y=null; //Null
console.log(typeof name);
console.log(typeof age);
console.log(typeof passed);
console.log(typeof X);
console.log(typeof Y);
let big=1233456789012334567890n; //BigInt
let id=Symbol("id"); //Symbol

//Primitive vs Reference data types
//Primitive
let num1 = 10;
let B= num1;
B = 20;
console.log(num1); // 10
console.log(B); // 20

//Reference
let student1 = {
    name: "Rahul"
};
let student2 = student1;
student2.name = "Amit";
console.log(student1.name);

//Type Conversion
let E = "10";
console.log(typeof E);
let Z = Number(E);
console.log(Z);
console.log(typeof Z);
//Other conversions:
String(100);
Number("100");
Boolean(1);
Boolean(0);

// OPERATORS
//ARITHMETIC
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//INCREMENT / DECREMENT
let U=10;
U++;
console.log(U);
U--;
console.log(U);

// ASSIGNMENT OPERATORS
let V= 10;
x += 5;
console.log(V);
V-= 2;
console.log(V);
V *= 2;
console.log(V);
V /= 2;
console.log(V);

//. COMPARISON OPERATORS
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 == "10");
console.log(10 === "10");
//Important concept:
//==   → loose equality
//===  → strict equality
Show:
console.log(10 == "10");   // true
console.log(10 === "10");  // false

//. LOGICAL OPERATORS
/*let Age = 20;
let student = true;
console.log(Age >= 18 && student);
console.log(Age >= 18 || student);
console.log(!student);*/

//. IF
/*let marks = 75;
if (marks >= 40) {
    console.log("Pass");
}

//IF...ELSE
/*let Marks = 35;
if (Marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}*/


//ELSE IF
let marks = 78;
if (marks >= 90) {
    console.log("A+");
} else if (marks >= 75) {
    console.log("A");
} else if (marks >= 60) {
    console.log("B");
} else if (marks >= 40) {
    console.log("C");
} else {
    console.log("Fail");
}

//TERNARY OPERATOR
//First:
/*let Age = 20;
if (Age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}*/
//Then simplify:
let Age = 20;
let result = Age >= 18 ? "Adult" : "Minor";
console.log(result);

//. SWITCH
let day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

//. FOR LOOP
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
Then:
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//. WHILE
/*let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}*/

// DO...WHILE
/*let r = 1;
do {
    console.log(r);
    r++;
} while (r <= 5);
//Then show the difference:
let R = 10;
while (R < 5) {
    console.log(R);
}
//Nothing happens.
//But:
let s = 10;
do {
        console.log(s);
} while (r < 5);*/

//BREAK
/*for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}*/

//. CONTINUE
/*for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}*/

// FUNCTIONS
/*function greet() {
    console.log("Hello Students");
}
greet();*/

// FUNCTION PARAMETERS
/*function greet(name) {
    console.log("Hello " + name);
}
greet("Rahul");
greet("Amit");*/

// RETURN
/*function add(a, b) {
    return a + b;
}
let Result= add(10, 20);
console.log(Result);*/
//parameter → input
//return    → output

//FUNCTION EXPRESSION
/*const Add = function(a, b) {
    return a + b;
};
console.log(Add(10, 20));*/

// ARROW FUNCTION
/*const Add = (a, b) => {
    return a + b;
};
console.log(Add(10, 20));
//Short form:
const add = (a, b) => a + b;
console.log(add(10, 20));*/

//ARRAYS
/*let students = ["Rahul", "Amit", "Neha"];
console.log(students);
console.log(students[0]);
console.log(students[1]);*/

//. MODIFY ARRAY
/*let students = ["Rahul", "Amit", "Neha"];
students[1] = "Priya";
console.log(students);*/

// ARRAY METHODS
/*let students = ["Rahul", "Amit"];
students.push("Neha");
console.log(students);
students.pop();
students.shift();
students.unshift("Priya");*/

//ARRAY LENGTH
/*let numbers = [10, 20, 30, 40];
console.log(numbers.length);*/

//. LOOP THROUGH ARRAY
/*let students = ["Rahul", "Amit", "Neha"];
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}*/

//. FOR...OF
/*let students = ["Rahul", "Amit", "Neha"];
for (let student of students) {
    console.log(student);
}*/

//FOREACH()
/*let numbers = [10, 20, 30];
numbers.forEach(function(number) {
    console.log(number);
});
//Arrow version:
numbers.forEach(number => console.log(number));*/

//MAP()
/*let numbers = [1, 2, 3, 4];
let squares = numbers.map(function(number) {
    return number * number;
});
console.log(squares);*/

//. FILTER()
/*let Marks = [35, 67, 89, 42, 25];
let Passed = Marks.filter(function(Mark) {
    return Mark >= 40;
});
console.log(Passed);*/

//. FIND()
/*let Marks = [35, 67, 89, 42];
let Result = Marks.find(Mark => Mark > 80);
console.log(Result);*/

// REDUCE()
/*let numbers = [10, 20, 30, 40];
let total = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);
console.log(total);*/

//STRINGS
/*let Name = "JavaScript";
console.log(Name.length);
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());
console.log(Name.charAt(0));*/

//STRING METHODS
/*let text = "Hello JavaScript";
console.log(text.includes("Java"));
console.log(text.startsWith("Hello"));
console.log(text.endsWith("Script"));
console.log(text.indexOf("Java"));*/y

//TEMPLATE LITERALS
//Old method:
/*let Name = "Rahul";
let year = 20;
console.log("My Name is " + Name + " and my year is " + year);
//Modern:
console.log(`My Name is ${Name} and my year is ${year}`);*/

// OBJECTS
/*let student = {
   name: "Rahul",
    age: 20,
    course: "BCA"
};
console.log(student.name);
console.log(student.age);
console.log(student.course);*/

//. OBJECT METHOD
/*let student = {
    name: "Rahul",
    greet: function() {
        console.log("Hello " + this.name);
    }
};
student.greet();*/

//. ADD/DELETE OBJECT PROPERTY
/*let student = {
    name: "Rahul",
    age: 20
};
student.city = "Prayagraj";
delete student.age;
console.log(student);*/

//NESTED OBJECTS
/*let student = {
    name: "Rahul",
    address: {
        city: "Prayagraj",
        state: "UP"
    }
};
console.log(student.address.city);*/

//DESTRUCTURING
/*let student = {
    Name: "Rahul",
    year: 20
};
let { Name, year } = student;
console.log(Name);
console.log(year);*/

//SPREAD OPERATOR
/*let A = [1, 2, 3];
let D = [...A, 4, 5];
console.log(D);
//Object:
let student = {
    name: "Rahul",
    age: 20
};
let updatedStudent = {
    ...student,
    age: 21
};
console.log(updatedStudent);*/

//. REST PARAMETER
/*function add(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}
console.log(add(10, 20, 30, 40));*/

// HOISTING
//var
/*console.log(F);
var F= 10;
//let
let G = 10;
console.log(G);*/

//FUNCTION HOISTING
/*Greet();
function Greet() {
    console.log("Hello");
}
//This works.
//Then compare:
const Greet2 = () => {
    console.log("Hello");
};
Greet2();*/

//CLOSURES
//Start with:
/*function outer() {
    let count = 0;
    function inner() {
        count++;
       console.log(count);
    }
    return inner;
}
let counter = outer();
counter();
counter();
counter();*/

//THIS
/*let student = {
    name: "Rahul",
    showName: function() {
        console.log(this.name);
    }
};
student.showName();*/

//OPTIONAL CHAINING
/*let student = {
    name: "Rahul"
};
console.log(student.address?.city);*/

//. NULLISH COALESCING
/*let Name = null;
let Result = Name ?? "Unknown";
console.log(Result);
//Then compare:
let C = 0;
console.log(C || 100);
console.log(C ?? 100);*/

//. ERROR HANDLING
try {
    let result = x + 10;
} catch (error) {
    console.log("Something went wrong");
}
//Then:
try {
    console.log("Program running");
} catch (error) {
    console.log(error);
} finally {
    console.log("This always runs");
}

































 














































