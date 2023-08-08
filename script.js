// const first = "hrithik";
// const sec = "bharti";
// const third = "Rishabh";

// if (first > sec && first > third) console.log("first won");
// else if (sec > first && sec > third) console.log("sec won");
// else console.log("third won");

// logical operator using tuthy and falsy values

// falsy values
// null
// undefined
// false
// 0
// " "

// const f = "hrithik";
// const s = "";

// console.log(s || undefined);

// || - first truthy value
// ans
// 3
// 2
// undefined
// null

// &&-first falsy value
// 1
// ""
// ""

// in case of nullish operator it takes only null and undefined as falsy values not 0 or empty string

//  ??-falsy values
//  null
//  undefined

// for (let i = 0; i < 5; i++) {
//   var arr = [];
//   for (let j = 0; j < i; j++) {
//     arr.push("*");
//   }
//   console.log(...arr);
// }

// const sym = "* ";
// for (let i = 5; i >= 0; i--) {
//   console.log(sym.repeat(i));
// }

// let str = "hello, i love GeeksforGeeks";
// if (
//   str.includes("a") ||
//   str.includes("e") ||
//   str.includes("i") ||
//   str.includes("o") ||
//   str.includes("u")
// )
//   console.log("vowels there");
// else console.log("not preseent");
// let no = 51;
// let flg = 0;
// while (flg == 0 && no >= 50) {
//   let req = require("readline-sync");
//   no = req.question("Enter the Number");
//   if (no < 50) {
//     flg = 1;
//     console.log("smaller than 50");
//     break;
//   }
// }
// regular function
// func();
// function func() {
//   console.log("regualr fiunction");
// }

// anonyms function

// IMP NOTE !!!!!!!
// Anonyms function can be called before intialization but regular function can be called before intialization
// anonymsfunc();

// var anonymsfunc = function () {
//   console.log("func called");
//   console.log(typeof anonymsfunc);
// };
// console.log(sum(12, 12));
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(12, 13));

// PURE FUNCTION
// Features of Pure Function
// 1-> function has some parameters
// 2->function should return some value
// 3->should not change the type and the value of the parameters

// ARROW FUNCTION
// // its a smaller version of anonyms function
// var sum = (a, b) => {
//   return a + b;
// };

// console.log(sum1(12, 112));

// ARROW FUNCTION    => FAT arrow operator
// var sum1 = (a, b) => (a > b ? a + b : a - b);

// Hoisting
// defination-> Hoisting is a process of accessing  the value of a variable or a function even before its intialization
// Reason of Hoisting is the execution context

// Hoisting ->var variable
// console.log(ans);
// var ans = 10;
// console.log(temp);
// // console.log(sum());
// var temp = function sum() {
//   console.log(10 + 5);
// };

// temp();
// console.log(temp());

// Hoisting ->let and const
// -> we cant acces let and const variable before intialization  IT WILL   reference error
// -> interviwer whether they are hoisted or not ?
// -> they are hoisted but in different scope (Script) not in GLobal scope . this is called as ->temporal dead zone
// -> if i log let variable before intialization error will come "cant access the variable before intializtion it means javascript knows that varibale is there "

// Temporal dead Zone -> is the time gap between when the variable is hoisted and the value is assigned to it
// let and const are not declared at Global memory space
// TDZ (temporal dead zone ends at intializtion of the variable )

// let ans = 10;
// console.log(ans);

// String methods
// let dis = "I am a mentor at GeeksforGeeksi";

// let arr = dis.split(" ").join("-");
// console.log(arr);
// for (let char of dis) {
//   console.log(char);
// }

// console.log(dis.charAt()); // takes index and print the char at the index
// console.log(dis.charCodeAt(10)); // gives ascii code
// console.log(dis.codePointAt(10)); //

//excersise

// let str = "      Hrithik is a full-stack Developer    ";

// for (let i = 0; i < str.length; i++) {
//   console.log(String.fromCharCode(str.charCodeAt(i) + 2));
// }

// console.log(str.indexOf(" eveloper") > 0 ? "found" : "Not found");

// console.log(str.includes("is", 2));

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// console.log(str.substring(0, 7));

// console.log(str.trim());

// Array;
// -> array coping with the refernce
// Example of Shallow copy
// let arr = [1, 2, 3];
// let arr2 = arr;
// arr2.push(4);
// console.log(arr);
// -> it arr2 point to the same address of the arr
// hence its a shallow copy

// -> to avoid shallow copy we will need Spread operator

// let arr = [1, 2, 3];
// let arr2 = [...arr];
// arr2.push(4);
// console.log(arr);
// console.log(arr2);

// let wr = 1;        | its ouput is 1 only shalow copy not working here
// let wr2 = wr;      |
// wr2 = 10;          |
// console.log(wr);   |

// var wr = 1;       | OUPUT -> 1
// var wr2 = wr;     |
// wr2 = 10;
// console.log(wr);

// let str = "hrithi";
// let temp = str;
// temp = "I love ";
// console.log(temp);
// console.log(str);

// !!! IMP !!!!-?_?_?>
// let arr = [1, 2, 3, 31, 41, 11];
// console.log(arr.sort());

// -> working of sort behind the scene of the array
// sort in js happens by subtracting the ascii code of the array elements
// example explanation->
// here every element will convert into string

// solution to above problem
//  !!!!!
// let solve = (a, b) => a - b;
// let arr = [1, 2, 3, 31, 41, 11];
// console.log(arr.sort(solve));

// destructing means upack one datatype to different variables
// rest operator
// let arr = [1, 2, 3, 4, 5, 5, 67];
// let [a, b, ...c] = arr;
// console.log(a, b, c);

//!!!!!!!!!! -----Object in JS---- !!!!!!!
// -> type of array is also object
// const Obj = {
//   name1: "hrithik",
//   ans: 1,
// };

// console.log(Obj["jon"]);
// console.log(Obj);

// IMPLICIT BINDING ---- EXPLICIT BINDING _------ BORrowing of a function

// const us1 = {
//   name1: "hrithik",
// };
// const us2 = {
//   name1: "Rishabh",
// };
// const us3 = {
//   name1: "Bharti",
// };

// function print() {
//   console.log(this.name1);
// }
// // us1.print();
// // us2.print();
// // us3.print();
// print.call(us1);
// print.call(us2);
// print.call(us3);

// !!!! new keyword and Constructor function
// ->if i need to create multiple objects with same property so should i need to write the every object again again
// we can define different objects with constructor function

// function User() {}
// const user1 = new User();
// console.log(user1);

// function User1() {}
// const user2 = new User1();
// console.log(user2);
// const user1=new User();

// CONSTRUCTOR FUNCTION

// function User(name, age = 25) {
//   (this.name = name), (this.age = age);
// }
// const user1 = new User("hrithik", 22);
// const user2 = new User("rishabh");
// console.log(user1);
// console.log(user2);

// PURE FUNCTION
// 1->it takes an argument
// 2-> its get an parameter
// 3-> it should return something
// 4->its shouldnot change the value or the type of the URLSearchParams
// 5->return value should not be influcened by some outer variable

// FIRST CLASS FUNCTION
// A Programming language is said to have a  fisrt class function if a function are to be treated like other variables .
// it means that function can be assigned to other variables and can be passed as an argument or can be returned as a function
// from another function

// ->function is assigned to a variable
// const var1 = function xyz() {
//   console.log("hello myself fullstack developer ");
// };
// var1();

// -> function passsed as a argument
// function xyz(inner, name) {
//   console.log(inner(), name);
// }
// function inner() {
//   return "welcome to fullstack developement ->";
// }
// xyz(inner, "hrithik");

// -> return a function
// function inner(name) {
//   function inner2() {
//     console.log(`hello ${name} developer `);
//   }
//   return inner2;
// }
// inner("hrithik")();

//---------- HIGH ORDER FUNCTION----------
// -> a function that acccepts another function as an parameter and return a function

//-------  MAP FILTER----REDUCE
// -> these are high order function property
// -> ie they can accepts function as an argument and can also return a function

// function getsquare(num) {
//   return num ** 2;
// }
// const arr = [1, 2, 3, 4, 5];
// const temp = arr.map(getsquare);
// console.log(temp);
//  |
//  |
//  |
//  Internal working of map below

// function sqr(arr, i) {
//   const temp = [];
//   for (let num of arr) {
//     temp.push(num ** 2);
//   }
//   return temp;
// }
// const res = sqr(arr);
// console.log(res);

// // --=---FILTER=====
// const arr = [1, 2, 3, 4, 5, 6, 6, 7];
// const temp = arr.filter((number) => number % 2 == 0);
// console.log(temp);

// ------REDUCE-----
// function callback(acc, curr) {
//   return acc + curr;
// }
// const arr = [1, 2, 3, 4, 5];
// const temp = arr.reduce(callback, 0);
// console.log(temp);
//  reduce mainly takes two arguments
//  first is acc ,and curr
//  0 is the

// Argument object in NON Arrow function
// -- arguement object is an array like object present locally inside a function
// // -- and it contains all the arguments passed to a function
// function func(a, b) {
//   for (let num of arguments) console.log(num);n

//   return a + b;
// }
// console.log(func(10, 12, 1, 2, 3, 5));

// ProtoType
// every object has a property called as prototype
// prototype inheritance-> when a object is inheriting a property from a prototype

// const obj1 = {
//   key: 12312,
//   name1: "hrithik",
// };
// console.log(obj1.toString());

// creating a prototype cutom
// const admin = {
//   isAdmin: true,
// };
// const obj1 = {
//   key: 12312,
//   name1: "hrithik",
//   __proto__: admin,
// };

// console.log(obj1);
// console.log(obj1.isAdmin);

// Call back function

// setTimeout(function xyx() {
//   console.log("hrithik");
// }, 5000);

// ASYNC JAVASCRIPT

// JS is a single threaded and synchronous languagae
// const is = true;
// let promise = new Promise((resolve, reject) => {
//   if (is) {
//     setTimeout(() => {
//       resolve("promise resolvec");
//     }, 3000);
//   } else {
//     const err = new Error("something wemt wromg ");
//     reject(err);
//   }
// });

// console.log(promise);

// const GITHUb = "https://api.github.com/users/akshaymarch7";
// const promise1 = fetch(GITHUb).then(function (data) {
//   console.log(data);
// });
// // .then(function (data) {
// //   console.log("resolve ", data);
// // })
// // .catch(function () {
// //   console.log("eroor");
// // });
// // promise1.then((data) => {
// //   console.log("response", data);
// // });
// console.log(promise1);

// const x = "198266";

// try {
//   if (x == "") {
//     throw "empty";
//   }

//   if (isNaN(x)) {
//     throw "not a number";
//   }

//   x = Number(x);

//   if (x < 5) {
//     throw "too low";
//   }

//   if (x > 10) {
//     throw "too high";
//   }
// } catch (err) {
//   console.log("Input is ", err);
// }

// let a1 = [1500, -50, -100, -20];
// a1.sort((a, b) => b - a);
// console.log(a1);

// Coding drills 2

// const str = "react is a library";

// TASK 1
// const temp = str.split(" ");
// temp.sort((a, b) => a.length - b.length);
// const temp2 = temp.join(" ");
// console.log(temp2);

// TASK 2
// console.log(
//   str
//     .split(" ")
//     .map((curr) => {
//       return curr.split("").reverse().join("");
//     })
//     .join(" ")
// );

// TASK 3
// const arr = [1, 2, 3, 4, 5, 7, 1, 2, 4];
// let mp = new Map();
// for (let ele of arr) {
//   let count = 1;
//   if (mp.has(ele)) {
//     count = mp.get(ele) + 1;

//     mp.delete(ele);
//   }

//   mp.set(ele, count);
// }
// let maxi = 0;
// let ans;
// for (let key of mp) {
//   if (maxi < key[1]) {
//     maxi = key[1];
//     ans = key[0];
//   } else if (maxi == key[1]) {
//     ans = Math.min(ans, key[0]);
//   }
//   console.log(key);
// }
// console.log(`maximum freq ${maxi} and the element is ${ans}`);
// console.log(mp);

// const st = document.querySelector("#btn1");
// const stp = document.querySelector("#btn2");
// const rs = document.querySelector("#btn3");

// const d = new Date();
// console.log(d.getTime());
// let flag = true;
// st.addEventListener("click", function () {
//   flag = true;
//   render();
// });
// stp.addEventListener("click", function () {
//   flag = false;
//   render();
// });
// rs.addEventListener("click", function () {
//   const timer = document.querySelector(".para");
//   timer.innerHTML = `00:00:00`;
// });

// function render() {
//   while (flag) {
//     const d = new Date();
//     console.log(d.getTime());
//   }
// }
// console.log(null == undefined);

const timer = document.querySelector(".para");
const btnParent = document.querySelector(".button");

let seconds = 0;
let min = 0;
let hrs = 0;
var id;
var id2;

function handlebtn(event) {
  //   console.log(event);
  console.log(event.target);
  const btn_id = event.target.id;
  if (btn_id == "btn3") {
    // const timer = document.querySelector(".para");
    clearInterval(id2);
    clearInterval(id);
    id = null;
    id2 = null;
    hrs = 0;
    min = 0;
    seconds = 0;
    timer.innerHTML = `00:00:00`;
  } else if (btn_id == "btn1") {
    clearInterval(id2);
    id2 = null;
    seconds++;
    if (!id) {
      id = setInterval(function func() {
        seconds++;
        if (seconds >= 60) {
          seconds = seconds % 60;
          min++;
        }
        if (min >= 60) {
          min = min % 60;
          hrs++;
        }
        timer.innerHTML = `${Math.floor(hrs / 10) > 0 ? hrs : "0" + hrs}:${
          Math.floor(min / 10) > 0 ? min : "0" + min
        }:${Math.floor(seconds / 10) > 0 ? seconds : "0" + seconds}`;
      }, 10);
    }
  } else if (btn_id == "btn2") {
    clearInterval(id);
    clearInterval(id2);
    id2 = null;
    id = null;
    timer.innerHTML = `${Math.floor(hrs / 10) > 0 ? hrs : "0" + hrs}:${
      Math.floor(min / 10) > 0 ? min : "0" + min
    }:${Math.floor(seconds / 10) > 0 ? seconds : "0" + seconds}`;
  } else if (btn_id == "btn4") {
    clearInterval(id);
    id = null;

    if (!id2) {
      id2 = setInterval(function func2() {
        if (hrs == 0 && min == 0 && seconds == 0) {
          clearInterval(id2);
        } else {
          if (seconds > 0 || min > 0 || hrs > 0) seconds--;
          if (seconds < 0 && (min > 0 || hrs > 0)) {
            seconds += 60;
            min--;
          }
          if (min < 0 && hrs > 0) {
            min += 60;
            hrs--;
          }
          if (hrs < 0) {
            hrs = 0;
          }
        }
        timer.innerHTML = `${Math.floor(hrs / 10) > 0 ? hrs : "0" + hrs}:${
          Math.floor(min / 10) > 0 ? min : "0" + min
        }:${Math.floor(seconds / 10) > 0 ? seconds : "0" + seconds}`;
      }, 10);
    }
  }
}

btnParent.addEventListener("click", handlebtn);
