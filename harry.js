console.log("Harry");
// let obj = {
//     harry : 70,
//     afzal : 60,
//     shilpi : 90,
//     rashmi : 80
// }
//for in loop works for objects 
// for(let a in obj){
//     console.log(`Marks of ${a} are ${obj[a]}`);
// }
//for of loop works for string and arrays
// for(var b of "Afzal"){
//     console.log(b);
// }
// console.log(b);
// const sum = (x,y)=>{
//     return x+y;
// }
// console.log(sum(3,4));
// console.log(sum(5,6));

// let obj = {
//     harry : 70,
//     afzal : 60,
//     shilpi : 90,
//     rashmi : 80
// }
// console.log(Object.keys(obj));
// for(let i=0;i<Object.keys(obj).length;i++){
//     console.log("Marks of "+Object.keys(obj)[i]+" are "+obj[Object.keys(obj)[i]]);
// }

// let cn = 42;
// let i;
// while (i != cn){
//     i = prompt("Enter a number");
//     console.log("Try again");
// }
// console.log("You have entered a correct number");
// let name = "Harry";
// console.log(name.length);
// console.log(name[2]);
// let boy = "Afzal";
// let girl = "Shilpi";
// console.log(`${boy} is a friend of ${girl}`);
// console.log(boy.toUpperCase());
// for(let i=0; i<boy.length; i++){
//     console.log(boy[0]+boy[1]+boy[2]+boy[3]+boy[4]);
// }
// let str = "  Let's get started rs 1000.";
// console.log(str.toUpperCase());
// console.log(str.slice(6,11));
// console.log(str.slice(8));
// console.log(str.trim());
// console.log(str.charAt(8));
// console.log(str.padEnd(28, "ok"));
// console.log(str.substring(6,11));
// console.log(str.charCodeAt(3));
// console.log(str.slice("  Let's get started rs ".length));


//Arrays are collection of some items.
// let marks = [91, 83, 67, 89, false, 'absent'];
// marks[6] = 78;
// console.log(marks[4]);

// let n = prompt("Number of integers in array?");
// let arr = [];
// for(let i=0; i<n; i++){
//     arr[i] = prompt("enter element "+(i+1)+" :");
//     arr[i] = Number.parseInt(arr[i]);
// }
// console.log(arr);
// let sum = arr.reduce((r, c)=>{
//     return r+c;
// });
// console.log(sum);

//Array method 
// let num = [1, 5, 67, 63, 10, 224];
// let b = num.toString();
// console.log(b);
// console.log(b.charAt(1));
// let c = num.join("-");
// console.log(c);
// console.log(num.pop());
// console.log(num);
// console.log(num.push(57),num);
// console.log(num.shift(),num);
// delete num[0];
// console.log(num.length);
// console.log(num);
// num[0] = 6;
// console.log(num);
// let num = [1, 5, 67, 63, 10, 224];
let num_more = [78, 65, 3, 12, 9, 576, 66, 83, 1024]; 
//console.log(num.concat(num_more));
// console.log(num.sort());// sort the alphabetically and also modify it.
/*const compare = (a,b)=>{
    return b - a;
} wrote the same function down with conventional method. check it out.*/
/*function compare(a,b){
    return a - b;
}*/
// const compare = (a,b) =>{
//     return a-b;
// }
// console.log(num.sort(compare));
//console.log(num_more.sort());
// console.log(num_more.splice(3, 4, 1024, 1045, 1095));//this will give you just removed elements not the modified array result.Parameters(starting index, number of element to be removed, element to be add1, element to be add2, element to be add3)
// console.log(num_more);
// console.log(num_more.slice(3));//it slice a peice of array from intial array and doesn't modify it.
// console.log(num_more.slice(2,6));
// for(let i=0; i<num.length; i++){
// }
//The forEach() method calls a function for each element in an array.
//foreach syntax : arrayname.foreach(myFunction); and myFunction consist 3 parameters : myFunction(currentValue, index, arr)
// num.forEach((element)=>{
//     console.log(element*element);
// });

// num.forEach((i)=>{
//     console.log(i*i);
// })

//Array.from() used for creating an array from a string or any HTML collection.
// let name = "Afzal";
// console.log(Array.from(name));

//for of used to extract array elements.
for(let i of num_more){
    console.log(i); 
}

// for(let i in num_more){
//     console.log(i);
// }

//map : creates a new array by performing some operation on each element. Syntax : array.map(function(currentValue, index, arr), thisValue)
// console.log(num_more.map((value,index, array)=>{
//     // console.log(value,array);
//     return value+'x';
//     // return value+index;
// }));

//filter :filters an array with values that passes a test. creates a new array.
// let res = num_more.filter(checkAge);
// function checkAge(a){
//     return a<18;
// }

// console.log(res);

// console.log(num_more.filter((x)=>{
//     return x<18;
// }));
//  shortcut method by arrow fn down below:
// console.log(num_more.filter((value)=>{
//     return value<70;
// }));
//The reduce() method executes a reducer function for array element.
//The reduce() method returns a single value: the function's accumulated result.
let res = num_more.reduce(method);
function method(a,b){
    return b-a;
}
console.log(res);
//short cut of above function
/*console.log(num_more.reduce((a,b)=>{
    return a+b;
}));*/

//practice q1 :
// let arr = [];
// let len = prompt("enter length of array.");
// for(let i=0; i<len; i++){3
//     value = prompt("enter element "+(i+1)+" :");
//     arr.push(value);
// }
// console.log(arr);
//practice q2:
/*while(value != 0){
    value = prompt("enter element "+" :");
    arr.push(value);
}
arr.pop();
console.log(arr);*/
//practice q3:
// let res1 = arr.filter(divisibleByTen);
// function divisibleByTen(val){
//     return val%10==0;
// };
// console.log(res1);
/*console.log(arr.filter((val)=>{
    return val%10==0;
}));*/

// factorial by reduce:
// let n = 6;
// let n_arr = [];
// for(let i=n; i>0; i--){
//     n_arr.push(i);
// }
// console.log(n_arr);
// console.log(n_arr.reduce((a,b)=>{
//     return a*b;
// }));


//practice q4:
/*console.log(arr.map(square));
function square(value){
    return value*value;
};*/
/*console.log(arr.map((val)=>{
    return val*val;
}));*/
//practice q5:
/*for(let i=1; i<=len; i++){
    //value = prompt("enter element "+(i+1)+" :");
    arr.push(i);
}
console.log("factorial of given number is : "+arr.reduce((a,b)=>{
    return a*b;
}));*/
//console.assert(77>123);
//alert : used to invoke mini window with a msg in webpage.
// alert("Damn! It worked.");
//prompt: to take input from user as string. ex: inp = prompt("Hi","No"); No is a optional default value here.
/*let a = prompt("enter the number : ", 42);
a = Number.parseInt(a);
document.write("type of a : "+typeof a);*/
// confirm : shows a msg and waits until for the user to press OK or cancel. Return true for OK and false for cancel.
/*let write = confirm("Do you want to write it on the page./n");
if(write){
    document.write(a);
}
else{
    document.write("Please allow me to write.");
}*/
//Dom : represents the page content as JS object.
// document.body  Page body as Js object
// document.body.style.background = "green";
/*let age = prompt("Enter your age: ","Ex : 21");
if(age>18){
    alert("yup! you can drive.");
}
else{
    alert("Baccha h tu abhi... you can't drive kiddo.");
}*/
/*do{
    let age = prompt("Enter your age: ","Ex : 21");
    if(age<0){
        console.error("It's not a valid age.");
        break;
    }
if(age>18){
    alert("yup! you can drive.");
}
else{
    alert("Baccha h tu abhi... you can't drive kiddo.");
}
var askAgain = confirm("Do you want to enter the age again?");
}
while(askAgain);*/
/*if(number >4){
    location.href = "https://google.com"
};*/
/*do{
    let color  = prompt("Enter your color: ","Magenta");
    document.body.style.background = color;
    //var again = confirm("You want to change the color again?");
}while(again);*/
/*console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);*/


// let rows = 5;
// let k = 1;
// for(let i=1; i<=rows; i++){
//     for(let j=1; j<i;j++){
//         document.write(k," ");
//         k++;
//     }
//     document.write("<br>");
// }

// let rows = 7;
// let pattern = "";
// for(let i=1; i<=rows; i++){
//     for(let j=1; j<=2*rows-1; j++){
//         if(j>=rows-i+1&&j<=rows+i-1){
//             pattern += "*";
//         }
//         else{
//             pattern += " ";
//         }
//     }
//     pattern += "\n";
// }
// console.log(pattern);

// let rows = 3;
// let pattern = "";
// for(let i=1; i<=rows; i++){
//     for(let j=1; j<=2*rows-1; j++){
//     }
// }
let str = "127.0.0.1";
console.log(str.split("."));
let check = /[A-Z]/;