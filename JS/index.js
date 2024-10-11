console.log("Welcome to JS Basics");
/* its popular one we used in older js , but in the es6 we have some other options like Const and let. */
// var - datatype (storing a value purpose) we can store all the data like integer, float, string

var course = "Javascript";
console.log("Am learning " + course);

var myName;
console.log(myName); // will receive undefined here

let petName;
console.log(petName); // will receive undefined here
// let myName = '' // we cant declare same name for multiple data types

// DIFERENCE BETWEEN LET & CONST
let sentence = "This is the sample sentence";
console.log(sentence);

sentence = "we changed the LET value";
console.log(sentence); // here we can able to chnaged the sentence value by using let

const word = "Hello";
console.log(word);

// word = "hai"; //Uncaught TypeError: Assignment to constant variable
console.log(word); // here we cant assign value again.

// DIFERENCE BETWEEN VAR & LET

// Let is the block scope
// Var is the function scope
// Note - var is related to the window object , in console window.lorry means will see the value, let is not related
var lorry = "ashok leyland";
let auto = "bajaj"; // Not get it by window object
(function scope() {
  let car = "Honda"; // global declaration
  console.log(car);
  if (true) {
    console.log(car); // its prints because of its inside the function block
    var bike = "hero";
    let bus = "Benz";
    console.log(bus); // its prints
  }
  // console.log(bus); // error in console - bus is not defined its not print
  console.log(bike); // its print
  console.log(car); //  its prints because of its inside the function block
  console.log(lorry) // its print
})();

console.log(lorry) // its print

// this keyword 
console.log(this) // this return all the window objects like - Window {window: Window, self: Window, document: document, name: ''

const thisObj = {
  company_name: 'Thinkpalm',
  location: 'Chennai',
  experiance: 'Good',
  openings: ['Node', 'Mern', 'Mean'],
  test() {
    var offers = [];
    console.log(this) // its return thisObj only like - {company_name: 'Thinkpalm', location: 'Chennai', experi..
    let Msg = `${this.company_name} is the ${this.experiance} company! located in ${this.location}. openings are`
    this.openings.forEach(a => {
      console.log(a)
      offers.push(a.toUpperCase());
    })
    return Msg + " " + offers;
  }
}

let testingFun = thisObj.test(); // here call the function inside the obj
console.log(testingFun) // Thinkpalm is the Good company! located in Chennai. openings are NODE,MERN,MEAN


// object
let person = {
  name: "xyz",
  age: 25,
  gender: "male",
  address: "chennai",
  info: {
    isGood: "yes",
    isTaxpayer: false,
  },
};
console.log(person);
// dot notation
console.log(person.name);
// bracket notation
console.log(person["name"]);

// deleting object item

delete person.gender;
delete person.name;
console.log(person);

// convert obj to a array
let convertObj = Object.keys(person);
console.log(convertObj);

// Object Entries
let objEntries = Object.entries(person);
console.log(objEntries);

// check key is in the obj or not

"name" in person ? console.log("YES") : console.log("NO");
"age" in person ? console.log("YES") : console.log("NO");

// clone a object
let cloneObj = {
  state: "Tamilnadu",
};

cloneObj = person;
console.log(cloneObj); // here just assign object to another variable

cloneObj = { ...person };
console.log(cloneObj);

// array

let colors = ["red", "green", "blue", "yellow"];
console.log(colors);
console.log(colors[3]);
console.log(typeof colors);

// adding element to array

//push
colors.push("white", "pink");
console.log(colors); // its pushing elements to end of existing array
//unshift
colors.unshift("orange", "purple"); // its add elements to start of the existing array
console.log(colors);
//splice
colors.splice(2, 0, "peech", "grey"); //(2) start — The zero-based location in the array from which to start removing elements. (0) - param deleteCount — The number of elements to remove.
console.log(colors);

// Finding elements in array
console.log(colors.includes("red")); // true - its return simply array contains the item or not
console.log(colors.includes("brown")); // false

// Find elements in non primitive data types

let sampleArray = [
  { id: 1, product: "TV" },
  { id: 2, product: "AC" },
  { id: 3, product: "Fridge" },
  { id: 4, product: "Washer" },
];
console.log(sampleArray);
// find()
let find = sampleArray.find(function (product) {
  console.log(product); // its gives seprate object because its looping
  return product.product == "Washer"; // its return the whole object if existing, {id: 4, product: 'Washer'}
});

console.log(find);
// findIndex()
let findIndx = sampleArray.findIndex(function (product) {
  return product.product == "Washer"; // its return the index position only, if existing, (output - 3)
});

console.log(findIndx);

// Remove elements in array

let removeArray = ["Tamil", "english", "malayalam", "telugu"];
// pop
removeArray.pop();
console.log(removeArray); //  ['Tamil', 'english', 'malayalam'] - removes last element
//shift
removeArray.shift();
console.log(removeArray); // ['english', 'malayalam'] - removes first element
//splice
removeArray.splice(0, 1);
console.log(removeArray); // ['malayalam'] - in the parameter 0 is array start value 1 is number element we want to remove so 0 postion is english remove that so 1

// empty a array
removeArray = [];
console.log(removeArray); // []

// combine 2 arrays

let firstArray = [{ item: "Fruit" }, { item: "Vegetables" }, { item: "Food" }];

let secondArray = [{ item: "Hot drinks" }, { item: "Liquer" }];

let combinedArray = firstArray.concat(secondArray);
console.log(combinedArray);

// get some objects from array
let extractedArray = combinedArray.slice(1, 3); // 1 is the start value , 3 is the end value before 3 its ended
console.log(extractedArray);

// spread operator
combinedArray = [...firstArray, ...secondArray];
console.log(combinedArray);

// array iteration

firstArray.forEach((item, index) => {
  console.log(index, item); //index means array position,  item means user defined one
});

// array join
let hashTags = ["freedom", "india", "social", "trend"];
hashTags.unshift("");
let joinHashTag = hashTags.join(" #"); // its works based on the space giving here we give space on start so its not consider 0 th position , so added empty one by using unshift
console.log(joinHashTag);

// array split

let splitArr = "This sentence with space!";
let result = splitArr.split(" ");
console.log(result); // its spliting the sentence by space
console.log(result.join("_")); // its joing the sentence with _

// sort array
let studentsArray = [
  { id: 8, name: "kamal" },
  { id: 4, name: "Sao" },
  { id: 21, name: "Raj" },
  { id: 10, name: "Lol" },
  { id: 6, name: "burge" },
  { id: 1, name: "John" },
  { id: 13, name: "Owel" },
];
let sortArr = [7, 8, 0, 3, 1, 98, 32, 65, 9, 5, 12, 34];
console.log(sortArr.sort()); //  [0, 1, 12, 3, 32, 34, 5, 65, 7, 8, 9, 98] , its sorting small to big for this data type
console.log(studentsArray.sort()); // its not working for reference data type

studentsArray.sort((a, b) => {
  // here we change the case for ascii convertion
  // we sort by name alphabetical order based on ascii its working
  name1 = a.name.toUpperCase();
  name2 = b.name.toUpperCase();
  // NOTE - any one will work commnent and uncomment
  // here we sort by id
  name1 = a.id;
  name2 = b.id;
  if (name1 < name2) return -1;
  if (name1 > name2) return 1;
  return 0;
});

console.log(studentsArray);

// array every & some

let everyArray = [
  { id: 2, name: "table", isOk: true },
  { id: 3, name: "chair", isOk: true },
  { id: 6, name: "door", isOk: true },
  { id: 4, name: "window", isOk: false },
  { id: 9, name: "steel", isOk: true },
];

let every = everyArray.every(function (value, index, array) {
  // value,index,array - are default provision of every
  // Note - check with primitive data
  console.log(`value ${value.id}`);
  console.log(`index ${index}`);
  console.log(`array ${array}`);
});

let allOk = everyArray.every(function (value) {
  // every means check every its all true means its return true
  return value.isOk == true;
});

console.log(allOk);

let allNotOk = everyArray.some(function (value) {
  // some means check some values are true means its return true
  return value.isOk == true;
});

console.log(allNotOk);

// Array filter
let adultsArray = [30, 89, 12, 34, 29, 17, 56, 27, 22, 24, 13, 15, 18, 27];
let adult = adultsArray.filter((value) => {
  return value >= 18;
});
console.log("Adult", adult); // [30, 89, 34, 29, 56, 27, 22, 24, 18, 27]

// Odd or Even Numbers

let numberArray = [1, 2, 4, 5, 13, 12, 10, 9, 8, 22, 23, 90, 45, 38, 3, 7];
let evenNumbrs = numberArray.filter((value) => {
  return value % 2 == 0;
});

let oddNumbers = numberArray.filter((value) => {
  return value % 2 == 1;
});

console.log("Even Numbers", evenNumbrs);
console.log("Odd Numbers", oddNumbers);

// reference type array

let dataArray = [
  { id: 1, name: "Mobile", price: 5200 },
  { id: 2, name: "Tab", price: 6800 },
  { id: 4, name: "Headset", price: 2000 },
  { id: 3, name: "Bluetooth", price: 3000 },
  { id: 5, name: "Laptop", price: 6000 },
  { id: 9, name: "Battery", price: 4100 },
];

let budgetPrducts = dataArray.filter((value) => {
  return value.price < 5000;
});

console.log("Budget Products", budgetPrducts);

// array find

let arrayFind = dataArray.find((value) => {
  return value.price < 5000;
});

console.log("FIND", arrayFind); // its return one value with the satisfied first data only returned.

// array findIndex
let arrayFindIndx = dataArray.findIndex((value) => {
  return value.price < 5000;
});

console.log("FIND-Index", arrayFindIndx); // its return position with the satisfied first position only returned.

// Array map

let employeeData = [
  { id: 2, firstName: "Raj", lastName: "Kumar" },
  { id: 3, firstName: "Rajesh", lastName: "kanna" },
  { id: 5, firstName: "Hari", lastName: "Prathi" },
  { id: 6, firstName: "Vasu", lastName: "deva" },
];

let fullName = employeeData.map((value) => {
  let fName = value.firstName + value.lastName; // join the name here
  let obj = { id: value.id, Name: fName }; // construct correct object with full name
  return obj;
});

console.log("Full Name", fullName);

// Array Multiple process

let productsArray = [
  { id: 9, name: "Battery", price: 4100 },
  { id: 1, name: "Mobile", price: 5200 },
  { id: 2, name: "Tab", price: 6800 },
  { id: 4, name: "Headset", price: 2000 },
  { id: 5, name: "Laptop", price: 6000 },
  { id: 3, name: "Bluetooth", price: 3000 },
  { id: 7, name: "Alexa", price: 5000 },
];

// sort the array with lowest price

let sortByPrice = productsArray.sort((a, b) => {
  return a.price - b.price; // low to high
});

console.log(sortByPrice);

// sort by title
let sortByTitle = sortByPrice.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});

console.log(sortByTitle);

// filter product

let filterBudgetPrducts = sortByTitle.filter((value) => {
  return value.price >= 5000;
});

console.log(filterBudgetPrducts);

// map the response structure

let final = filterBudgetPrducts.map((value) => {
  return `Product - ${value.name}, Price ₹${value.price}`;
});
console.log(final);

// multiple
let chainArray = productsArray
  .sort((a, b) => {
    return a.price - b.price; // low to high
  })
  .sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  })
  .filter((value) => {
    return value.price <= 5000;
  })
  .map((value) => {
    return `Product - ${value.name}, Price ₹${value.price}`;
  });

console.log(chainArray);

// Array Reduce

let reduceArray = [
  { id: 1, name: "milk", amount: 30 },
  { id: 3, name: "tea", amount: 20 },
  { id: 6, name: "coffee", amount: 25 },
  { id: 9, name: "lemon tea", amount: 15 },
];

// reduce have 4 params but this example we use 2 like (previous value and current value)
let totalAmount = reduceArray.reduce((previousVal, currentVal) => {
  console.log(previousVal.amount);
  console.log(currentVal.amount);
  return previousVal + currentVal.amount;
}, 0); // here we 0 for intial value will be that zero, if add 10 means 10 is initial value
console.log(totalAmount); //30+20+25+15 =  90

// Difference between Sort , Find , Filter , Map , Reduce
// sort
let resultlog;
const diffArray = [12, 2, 56, 89, 45, 8, 45, 26, 17];
resultlog = diffArray.sort();
console.log(resultlog); //  [12, 17, 2, 26, 45, 45, 56, 8, 89] here we didn't see the actual sort // because its working based on the ascii value  and charCodeAt

// find
resultlog = diffArray.find((value) => {
  return value > 50;
});
console.log(resultlog); // 56 its giving one value moreover we have other values there greater than 50 but its give first result only

// filter

resultlog = diffArray.filter((value) => {
  return value > 50;
});
console.log(resultlog); //[56, 89] its give all data which is mached

// map

resultlog = diffArray.map((value) => {
  return "*" + value; // we construct means we do by map
  return value < 50; //   [true, true, true, true, true, true, false, true, false] its return true false
});
console.log(resultlog);

//Reduce

resultlog = diffArray.reduce((preVal, curVal) => {
  return preVal + curVal;
}, 0);
console.log(resultlog); // 300

// map and reduce diff

resultlog = diffArray.map((preVal, curVal) => {
  return preVal + curVal;
});
console.log(resultlog); // [12, 18, 4, 29, 49, 50, 62, 15, 97] // if do map instead of reduce its set value itself in the array , not give the  sum value

// function

function displyUser() {
  let name = "Am Raja";
  let age = " my age is " + 56;
  let msg = name + age;
  console.log(msg);
}
displyUser();

// funtion with parameter
function displyUserwithParams(name, age) {
  let Name = name;
  let Age = " my age is " + age;
  let Msg = Name + Age;
  console.log(Msg);
}

displyUserwithParams("Am kesav", 26); // Its argument

// simple add funtionality with html inputs with document.getElementById.

function add() {
  var fisrtVal = document.getElementById("first").value;
  var secondVal = document.getElementById("second").value;
  if (fisrtVal && secondVal) {
    console.log(parseInt(fisrtVal) + parseInt(secondVal)); // without parseInt it will concate not sum
  } else {
    alert('Please fill the fields!')
  }
}

// fuction declaration

let val1 = 20;
let val2 = 25;
function addNumbrs() {
  console.log("Function Declaration", val1 + val2);
}

addNumbrs();

// Function expression or Named function

const addNo = function addNumbrs() {
  console.log("Function Expression", val1 + val2);
};

addNo();

// anonymous function or arrow function

const sumNos = () => {
  console.log("Anonymous Function or Arrow Function", val1 + val2);
};

sumNos();

// function hoisting

// function declaration
sampleFunction(); // call the same fun. anywhere

function sampleFunction() {
  console.log("Sample Function Declaration!"); // display 2 times because called 2 times
}

sampleFunction(); // call the same fun. anywhere

// function expression

//sampleFunctionExpress(); // Cannot access 'sampleFunctionExpress' before initialization

const sampleFunctionExpress = function () {
  console.log("Sample Function Expression!");
};
sampleFunctionExpress();

// IIFE
function functionName() {
  console.log("Normal Function!");
}
functionName(); // we need call like this

(function nameOfFun(n1, n2) {
  console.log("IIFE Function");
  console.log(n1 + n2);
})(12, 11); // () after the function add bracket here passing aruguments

// Function Arguments

function addExpenses() {
  console.log(arguments); // here we see the arguments whether we passed or not
  let total = 0;
  for (let val of arguments) {
    total += val;
  }
  return total; // return the total here
}

let totalExp = addExpenses(12, 8, 30, 10, 20, 25); // function retuen the total so we save it to one variable
console.log(`TOTAL - ₹${totalExp}`);

// rest operator
// in function this is the rest operator (...)
function nameOfFunction(...arguments) {
  console.log("Args ", arguments);
  let sumOf = arguments.reduce((preVal, curVal) => preVal + curVal);
  return sumOf;
}

let answer = nameOfFunction(78, 12, 45);
console.log("TOTAL ARGS VALUE", answer);

// Default paremeter

// calculate gst
let taxAmount;
function calculateGst(cost, tax = 18) {
  // here configured tax 18% as default if not give in arguments its take this or we specify tax in argument its take that

  taxAmount = cost * (tax / 100);
  let total = cost + taxAmount;
  return taxAmount, total;
}

let rateOfItem = calculateGst(4500); // here i pass 1 argument
console.log("Tax -₹" + taxAmount + " Total - " + rateOfItem + "/-");
// oprators

let x = 5;
console.log(x); // 5
console.log(++x); // 6 if using prefix ++ it will instanly change the value
console.log(x++); //6 if using suffix ++ it will change after the line
console.log(x); //7

// comparison operators - Relational
let y = 1;
console.log(y < 0); // false
console.log(y > 0); // true
console.log(y <= 0); // false
console.log(y >= 0); // true

// operators - Equality
let z = 1;
console.log(z == 1); // true
console.log(z !== 1); // fasle
console.log(z === 1); // true

// strict equality operators
console.log(1 === 1); // true
console.log("1" === 1); // false
// lose equality opreators
console.log(1 == 1); // true
console.log("1" == 1); //true
//  operators - String
let a = "aaa";
console.log(a == "aa"); // false
console.log(a == "aaa"); // true

// Type comaprison operators

let b = true;
console.log(b);
console.log(true == b); // true
console.log(b == false); //false
console.log("5" == 5); //true

// Ternary Oprators
let age = 20;
let admit = age > 18 ? "Admit granted" : "No Admission";
console.log(admit);

// logical operators
// AND Operators
console.log(true && true); // true
console.log(false && false); // false
console.log(true && false); // false
// OR Operators
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
//NOT Operators
console.log(!true); // false
console.log(!false); // true

// Precedence
let c = 5 + 5 * 2;
console.log(c); // output is 15

let d = (5 + 5) * 2;
console.log(d); // output is 20

// conditional statements
// If and Switch or conditional statements
let condition = true;
if (condition) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}
// if else
var hour = new Date().getHours();
console.log(hour);
// 0 - 13 - morning
// 13 - 17 - afternoon
//5 - 12 - eve
if (hour >= 0 && hour <= 13) {
  console.log("Good Morning");
} else if (hour >= 13 && hour <= 17) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}
// Switch case

let amountIs = 10000;
console.log(amountIs);
switch (true) {
  case amountIs < 10000:
    console.log("Buy Android Phone");
    break; // if not use break all the cases will work once satisfy condition just break it.
  case amountIs > 10000:
    console.log("Buy Keypad Phone");
    break;
  default:
    console.log("No Phone");
}

// Loop
// // for(initialExpression; Condition ; Increment/Decrement){

// }

// x++ - means +1 will increse till loop
for (let x = 1; x <= 10; x++) {
  console.log(x); // start with 1 to end with 10 because x = 1
}

// (i--) - means -1 will decrease till loop
for (let i = 10; i >= 1; i--) {
  console.log(i); // start with 10 to end with i because i = 10
}

// while loop

let k = 10;
while (k <= 20) {
  console.log(k);
  k++; // we give increment / decrement here , without this it will loop infinite browser will hang
}

// do while loop

let j = 1;

do {
  // code
  console.log(j);
  j++;
} while (j <= 10);

// for in loop

let obj = {
  name: "raja",
  age: 60,
  sex: "male",
  city: "chennai",
};

// we can itrate obj or array with this
// Key is the left hand side value

for (let key in obj) {
  // key is the user defined one
  console.log(key); // prints left hand side value
  console.log(obj[key]); // prints right hand side value
  console.log(key + ":" + obj[key]); //prints both side values
}

// for of loop

let array = [
  {
    name: "kavi",
    age: 25,
    city: "chennai",
  },
  {
    name: "Ravi",
    age: 76,
    city: "Trichy",
  },
];

// It will give right hand side value from obj
// No Key and value sepration

for (l of array) {
  console.log(l); // gives the same object one by one
  console.log(l.name); // gives object right hand side value
}

// Literals (Letters)

// Literals means its javascript actual convertion for which datatype we provide
// here below example is the our writing code
let sample = "sample";
let number = 12;
let boolean = false;
let sampleObj = {
  sample: "sample",
};

console.log(sample, number, boolean, sampleObj);

// here javascript converts to understand our code

let smple = new String("sample");
let nmbr = new Number(12);
let bool = new Boolean(false);
let smpleObj = new Object({
  sample: "sample",
});

console.log(smple, nmbr, bool, smpleObj);

// String Objects

let sampleString = "sample";
console.log(sampleString.length); // 6 - length of string start with 0
console.log(sampleString.charAt(1)); // a - because start with 0
console.log(sampleString.concat(" ", "concate string")); // sample concate string
console.log(sampleString.includes("sam")); // true - its return boolean find the string combination, but its a case sensitive
console.log(sampleString.indexOf("s")); // 0 // return the position of the string
console.log(sampleString.repeat(2)); // samplesample // its repeat the string based on the given value
console.log(sampleString.replace(sampleString, "demo")); // demo // replace sample to demo
console.log(sampleString.slice(1)); //ample // its start with one cut the position letter

let exampleString = "Demo text";
console.log(exampleString.split(" ", 2)); // ['Demo', 'text'] - its spliting by space
console.log(exampleString.substring(3)); // o text - its also split by index value
console.log(exampleString.toLowerCase()); // demo text
console.log(exampleString.toUpperCase()); // DEMO TEXT
console.log(exampleString.trim()); // removes unwanted space

// template literals
let skill = "JavaScript";
let sampleSentence = `"This is the sample sentence" , \n Kindly learn ${skill};`;
console.log(sampleSentence);

// callbacks
function logging() { // one function its called from the another one function(settimeout) arugument its a call back
  console.log('Callback - Logging Function - Prints after 1secs');
}

setTimeout(() => {
  logging();
}, 1000)

// example 2

setTimeout(() => {
  console.log('1 - prints in 1 sec')
  setTimeout(() => {
    console.log('2 - prints in 2 sec')
    setTimeout(() => {
      console.log('3 - prints in 3 sec')
      setTimeout(() => {
        console.log('4 - prints in 4 sec')
      }, 4000)
    }, 3000)
  }, 2000)
}, 1000)

// promise
var PromiseValue; // declare common variable 
const myPromise = new Promise((resolve, reject) => {   // resolve, reject are default properties we can change those
  let x = 10;
  let randomNum = Math.floor(Math.random() * 98) // here we generate random number
  console.log('Random Number =====>', randomNum);
  if (randomNum % 2 == 0) {  // based on the random value if odd means resolve even means reject 
    resolve();
    PromiseValue = "Even Random Number"
  } else {
    reject();
    PromiseValue = "Odd Random Number"
  }

});

myPromise.then(() => console.log(PromiseValue)).catch(() => console.log(PromiseValue));

// here we use then for get the result and catch for get the error

// example 2 
// here also nested promise we can use so its a drawback of promise its called promise hell.
const promiseHell = new Promise((resolve, reject) => {
  let hell = true;
  if (hell) {
    resolve(console.log('OK'));
    const Hello = new Promise((resolve, reject) => {
      let hell1 = true;
      if (hell1) {
        resolve(console.log('OK 2'))
      } else {
        reject(console.log('ERROR 2'));
      }
    });
    Hello.then(() => console.log('****')).catch(() => console.log('####'))
  } else {
    reject(console.log('ERROR'));
  }
}).catch((err) => { console.log(err) });

promiseHell.then(() => console.log('FINAL OK')).catch(() => console.log('FINAL ERROR'));

// async / await 

function getData() {

  console.log('1 - Not wait for settimeout'); // this will print when the function is called

  setTimeout(async () => {
    let resp = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // with out using this await its going to be pending state like undefined refer promise properties
    console.log(resp);    // this will print after the time interval
    console.log('Wait for settimeout 5 secs');
  }, 5000)

  console.log('2 - Not wait for settimeout'); // this will print when the function is called

  setTimeout(async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    console.log(res);     // this will print after the time interval
    console.log('Wait for settimeout 6 secs');
  }, 6000)
}

getData();

// string reverse 
var string = 'javascript'; // here the string value 

let reverseStr = string.split('') // first we split charectors by space
console.log(string) // javascript
reverseStr.reverse();   // after the split only can reverse the string 

let reveStr = reverseStr.join('')  // then join the string
console.log(reveStr)  // tpircsavaj - here the output 

// sorting array        

var namesArray = [
  {
    "name": 'Raja',
    "age": 4
  }, {
    "name": 'Abi',
    "age": 10
  }, {
    "name": 'Josh',
    "age": 23
  }, {
    "name": 'wegan',
    "age": 50
  }, {
    "name": 'Sree',
    "age": 43
  }
]

const sortByName = namesArray.sort((a,b)=>{
  b.name.length - a.name.length
})

console.log(sortByName)

const sortByAge = namesArray.sort((a,b)=>{
  b.age - a.age
})

console.log(sortByAge)

// closure

var initialValue = 5;  // declared value outside of function

const firstFunction = (arg) =>{

  var secVal = 6; // declare in the first func

  console.log('First Function');

  const secondFunction = () =>{

    var thirdVal = 10; // declare in the third func

    console.log('Second Function');

    console.log(initialValue);  // this second fun can understand the variable which located outside of the function 
    console.log(arg)  /// here also this second function access the first function arg this is called closure
  
    var closureTotal = initialValue + secVal + thirdVal // sum all the values
    console.log(closureTotal)
    return closureTotal;
  }

  return secondFunction();  // here we return second funtion 
 }

 firstFunction('Argument Passing to first function but we return second funtion still the second funtion knowing the first funtion argument');  // first function arg pass

 // arrow functions
  // functions are 4 types 1. Anonymous Functions 2. Named Functions 3. Immeadiate invoked functions 4 . Arrow functions

  //1. Anonymous Functions

  var anonymousFunc = function () {
    console.log('This is Anonymous Function')
  }

  anonymousFunc();  // calling the func

  // 2. Named Functions

  function namedFunction () {
    console.log('This is Named Function')
  }

  namedFunction(); // calling the func

  // 3. Immeadiate Invoked Functions

  (function immediateInvokedFunction () {
    console.log('This is Immediate Invoked Function')
  })();  // calling like this because its IIF

  // 4 . Arrow functions

  arrowFunc = () => { 
    console.log('This is Arrow Function')
  }

  arrowFunc() // calling the func

  // arrow function possibilities

  // here we add some static like sum value plus 3 is added
  const plusThree = (sum) =>{
    total = sum + 3
    console.log(total)
  }

  plusThree(3);

// here we sum two values
const sumTwoNumbers = (a,b)=> {
  sumTot = a + b 
  return sumTot;
} 

console.log(sumTwoNumbers(9838,67))

// we filter ages above 18 years
var agesArray = [34,77,63,12,45,98,34,20,3,4,9,15,65,55,43,35]

const voteEligible = agesArray.filter(x => x > 18 )
console.log(voteEligible)

// here we add plus 2 in all numbers in the array 
const agePlusTwo = agesArray.map(x => x + 2)
console.log(agePlusTwo)

// bind , call , apply 

// Bind 

let employeeOne = {
  name :'Kesavaraj',
  id:65738,
  getEmpName : function(){
    console.log('Employee Name is ' + this.name) // access this block with use of THIS keyword
    // Employee Name is Kesavaraj
  }
}

let employeeTwo = {
  name :'Ravi',
  id:65738
}

employeeOne.getEmpName();

var bindValue = employeeOne.getEmpName.bind(employeeTwo);
bindValue(); // bind is return function only, here its binding another object property

// Employee Name is Ravi

// Call 

employeeOne.getEmpName.call(employeeTwo); // here we get output without covert as function this is call ()

// Employee Name is Ravi

// Passing arguments with Bind
 
let employeeThree = {
  name :'Kesavaraj',
  id:65738,
  getEmpName : function(techName){
    console.log('Employee Name is ' + this.name + techName) // access this block with use of THIS keyword
    // Employee Name is Kesavaraj
  }
}

let employeeFour = {
  name :'Ravi',
  id:65738
}

var bindValueWithArgs = employeeThree.getEmpName.bind(employeeFour, ' MEAN Stack');
bindValueWithArgs();

// Passing arguments with call 

employeeThree.getEmpName.call(employeeFour , ' MERN STACK');

// Apply 

employeeThree.getEmpName.apply(employeeFour , [' LAMP STACK']); // Here we give an array for agrs this is called Apply

// Shallow copy and Deep copy 

// scanario here like one array is there , then create another array , then copy the data from first arr to second 
// array and change the second array data but it wont reflect in the first array this is the condition so using spread 
// operator its deeply copy but json not like that 
  var firtArray = [{"name":'raj', "age":55},
  {"name":'Rani', "age":55},{"name":'Josh', "age":55}];

  // cmt below any one will see difference

   var secArr = JSON.parse(JSON.stringify(firtArray)) //  SHALLOW COPY

   var secArr = [...firtArray] // DEEP COPY 

  var secArr = secArr.map(e =>{
      if(e.name =='Rani'){
          e.name = 'Raja'
      }
      return e;
      });
    
  console.log(firtArray)
  console.log(secArr)

  // second method

  // Primitive data we always do a deep copy but non primitive data we cant do 

  let copyString = 'COPY STRING';

  let copyStringTwo = copyString;
  console.log(copyStringTwo)

  copyStringTwo = 'DEEP COPY'
  console.log(copyStringTwo)

  // sync and async functions

  // Synchronous code
function addSync(a, b) {
  console.log('Function called in sync') // display in the sequential order - this is  print first 1
  console.log('Second console in sync')  // - this is print second 2
  return a + b;
}

console.log('RESULT OF Sync' ,addSync(1, 2)); // 3    // - this is print third 3


// Asynchronous code
function addAsync(a, b, callback) {  // display in the non - sequential order 
  console.log('Function called in async')   // - this is print FIRST 1
  setTimeout(function() {
    console.log('Function called inside Async timeout') // - this is print THIRD 3
    callback(a + b);
  }, 1000);

  console.log('END of ASYNC')  // - this is print SECOND 2
}

addAsync(1, 2, function(result) {
  console.log('RESULT OF ASync',result); // 3  - this is print FOURTH 4
});

// event bubbling
