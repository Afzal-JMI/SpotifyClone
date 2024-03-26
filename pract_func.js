// let a = parseInt(prompt("enter the value a : "));
// let b = parseInt(prompt("enter the value b : "));
// let c = parseInt(prompt("enter the value c : "));

// let x = 0;
// let discriminant = (b^2 - (4*a*c));
// if (discriminant<0){
//     document.write("there are no real number solution.");
// }
// else if(discriminant==0){
//     document.write("the single solution for the equation is: x=",(-b/(2*a)));
// }
// else {
//     document.write("the solutions for the given equation are: x1=",(-b+discriminant)/2*a," and x2 = ",(-b-discriminant)/2*a);
// }

// Collatz conjecture :
// let num = parseInt(prompt("Enter the number :"));
// let count = 0;
// while(num != 1){
//     if(num%2 == 0){
//         num /= 2;
//     }
//     else{
//         num *= 3;
//         num +=1;
//     }
//     count++;
//     document.write("number is now "+ num+"<br>");

// }
// console.log(count);

// Rolling the Double Dice :
// let nTrials = 0;
// let totalRolls = 0;

// while(nTrials < 100){
//     let number_of_rolls = 0;
//     let finished = false;
//     while(!finished){
//         let dice1 = Math.floor(Math.random()*6 + 1);
//         let dice2 = Math.floor(Math.random()*6 + 1);
//         number_of_rolls = number_of_rolls+1;
//         console.log("Roll#"+number_of_rolls+ " : "+dice1+" and "+dice2);
//         if(dice1==dice2){
//             finished = true;
//         }
//     }
//     console.log("Number of rolls: "+number_of_rolls);
//     nTrials += 1;
//     totalRolls = totalRolls + number_of_rolls;
//     console.log("Number of trial: "+nTrials);
// }
// let average = totalRolls/100;
// console.log("Average of total number of rolls is" + average);

// Break-even point of a loan:

// let principal = parseInt(prompt("Enter your principal amount: "));
// let APR = parseInt(prompt("Enter your Annual principal rate:"));
// let NoY = parseInt(prompt("Enter number of years: "));

// let months = NoY*12;
// let rate = APR/1200;
// let denom = (1-Math.pow(1+rate,-months));
// let nomi = rate*principal;

// let payment = nomi/denom;
// console.log("monthly payment is $"+payment.toFixed(2));;

// let monthNumber = 0;
// let interestPart = 0;
// let principalPart = 0;
// do{
//     interestPart = rate*principal;
//     principalPart = payment - interestPart;
//     principal = principal - principalPart;
//     monthNumber++;
//     console.log("Month "+monthNumber+" Interest: $"+interestPart.toFixed(2)+" Principal: $"+principalPart.toFixed(2));
// }while(interestPart > principalPart);

// Simulate the express lane checkout:

// let subtotal = 0.0;
// let NoI = 0;
// let price = 0.0;
// do{
//     price = parseFloat(prompt("Enter the price of the item"+(NoI+1)+":(enter 0 if you are finished):  "));
//     if(price>0){
//         NoI++;
//         subtotal += price;
//     }
//     else if(price<0){
//         console.log("Invalid Price!");
//     }
//     else{
//         console.log("what the hell is that");
//     }

// }while(NoI<=4 && price != 0.0);

// console.log("Item Purchased: "+NoI);
// console.log("Your subtotal is: $"+subtotal.toFixed(2));
// let tax = subtotal*.05;
// console.log("Sales Tax: $"+tax.toFixed(2));
// console.log("Total payble amount: $"+(subtotal+tax));

// function containsAll(arr){
//     for(i=1; i< arguments.length; i++){
//         let num = arguments[i];
//         if (arr.indexOf(num) === -1){
//             return false;
//         }
//     }
//     return true;
// }

// function containsAll(arr, ...nums){
//     for (let num of nums){
//         if (arr.indexOf(num) === -1){
//             return false;
//         }
//     }
//     return true;
// }
// let x = [2, 4, 56, 7];
// console.log(containsAll(x, 2, 4, 7));
// console.log(containsAll(x, 2, 4, 6));

// Converting binary to decimal:

// let bin = prompt("Enter the number in binary: ");
// let dec = 0;
// let arr = [];
// for (let i=0; i<bin.length; i++){
//     arr[i] = bin.charAt(i);
// }
// for (let i = arr.length-1; i>=0; i--){
//     dec = dec + (arr[i]*(2**(arr.length-1-i)));
// }
// console.log(dec);

// inverted trangle: 

// for (let i=0; i<5; i++){
//     for (let j=0; j<7; j++){
        
//     }
// }
// *******
//  *****
//   ***
//    *

// let n = 5;
// let string = '';
// for (let i =1; i <= n; i++){
//     for (let j = 0; j < i; j++){
//         string += "*";
//     }
//     string += "\n";
// }
// for (let i=1; i <= n-1; i++){
//     for (let j=0; j<n-1; j++ ){
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);

// let x = 3;
// let y = "4";
// console.log((y-x));

// console.log(isNaN(3))

// var obj = {name: "vivek", surname: "bisht"};
// var obj2 = obj;

// obj2.name = 'Afzal';
// console.log(obj);

// THIS KEYWORD refers to the object that the function is a property of.
// the value of the 'this' keyword will always depend on the object that is invoking the function.
// function doSomething(){
//     console.log(this);
// }
// doSomething();

// var obj = {
//     name : "Afzal",
//     getName(){
//         console.log(this.name);
//     }
// }
// obj.getName();

// var obj = {
//     name : "Afzal",
//     getName(){
//         return this.name;
//     }
// }

// var getName = obj.getName();
// console.log(get);
// obj.getName();

// var obj2 = {
//     name : "shivangi",
//     getName
// }
// obj2.getName();
// The silly way to understand this keyword is, whenever the function is invoked, check the object before the dot. The value of this.keyword will always be the object before the dot.
// var obj1 = {
//     address : "mumbai.india",
//     getAddress : function(){
//         console.log(this.address);
//     }
// }

// var getAddress = obj1.getAddress;
// var obj2 = {name : "rashmi"};
// obj2.getAddress();

// function sayHello(){
//     return "hello "+this.name;
// }

// var obj = {name: "Shivangi"};

// console.log(sayHello.call(obj));

// var person = {
//     age:23,
//     getAge: function(){
//         return this.age;
//     }
// }
// var person2 = {
//     age: 54
// };
// console.log(person.getAge.call(person2));

// Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.
// function add(a){
//     return function(b){
//         return a+b;
//     }
// }
// console.log(add(3)(4));

// var globalVariable = "Hello world";
// function send

// document.getElementsByClassName("Shilpi")[0].className = "Afzal";
// document.getElementById("hey").id = "adj";

// let obj = {
//     name : "shilpi"
// }

// console.log(obj["your name"]);
// console.log(obj.your na);
// obj.name = 12;
// obj.name1 = "Afzal";
// console.log(obj.name1);

// const obj = {
//     name: "deeecode",
//     age: 80,
//     language: "javascript",
// }

// const myKey = "age";
// const area = "LA";
// obj[myKey] = 100;
// obj[area] = "hollywood";
// obj.state = "california";

// console.log(obj);


// class student{
//     constructor(name,rollNumber, grade, section){
//         n = name;
//         rn = rollNumber;
//         g = grade;
//         s = section;
//     }

//     getDetails(){
//         return 'Name: ${this.n}';
//     }
// }

// let student1 = new student("Afzal", 69, "A", "E");
// student1.getDetails();

// var d = new Date();

// let rows = 5; //parseInt(prompt("enter number of rows: "));
// let columns = 6; //parseInt(prompt("enter number of columns: "));

// for(let i=0; i<rows; i++){
//     for(let j=0; j<columns; j++){
//         document.write("* &nbsp;&nbsp;");
//     }
//     document.write("<br><br>");
// }

// let rows = 4;
// // let vari = 1;
// let pattern = " ";
// // outer loop
// for(let i=1; i<=rows; i++){
//     // inner loop1 for spaces
//     for(let j=1; j<=rows-i; j++){
//         pattern += " ";
//         document.write("&nbsp;&nbsp;");
//     }

//     // inner loop2 for numbers
//     for(let k=1; k<=2*i-1; k++){
//         pattern += i;
//         document.write(i);
//     }
//     pattern += "\n";
//     document.write("<br>");
// }
// console.log(pattern);

// for(let i=0; i<5; i++){
//     for(let j=0; j<5; j++){
//         if(i==0 || i==4 || j==0 || j==4){
//             document.write("x");
//         }
//         else{
//             document.write(" ");
//         }
//     }
//     document.write("<br>");
// }

// function divideByHalf(x){
//     console.log(Math.floor(x/2));
// }

// function multiplyByTwo(y){
//     console.log(y*2);
// }

// function operationOnSum(a,b,operation){
//     let sum = a+b;
//     operation(sum);
// }

// operationOnSum(5,8, divideByHalf);
// operationOnSum(2,3, multiplyByTwo);

