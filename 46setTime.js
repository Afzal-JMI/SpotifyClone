document.write("hello World");

// const sum = (a,b)=>{
//     console.log("running"+(a+b));
// }
//  let timerId = setTimeout(function, <delay>, <arg1>, <arg2>)
// let a = setTimeout(function(){
//     alert("i'm inside setTimeout");
// }, 3000);

// let b = prompt("Do you want to run the setTimeout");
// if(b == "n"){
// clearTimeout(a);
// }
// console.log(a);
 
// setTimeout(sum, 3000, 3, 4);

// syntax: clearTmeout(timerID);

// setInterval(function(){
//     alert("frequent timer");
// }, 5000);

setTimeout(function(){
    let b = prompt("Do you want to run the setTimeout");
}, 5000);
