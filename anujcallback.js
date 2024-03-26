// A callback is function passed as an argument to another function.

// function
function greet(name, callback){
    console.log('Hi'+" "+name);
    callback();
}

// callback function
function callMe(){
    console.log('I am a callback function');
}

// passing callback function as an argument
greet('Afzal', callMe);

// ----------

const calculate = (a,b, operation) =>{
    return operation(a, b);
}

console.log(calculate(3, 4, (num1, num2)=> num1+num2));

const subtraction = (a,b)=>{
    return a-b;
}

const multiply = (a,b) =>{
    return a*b;
}

console.log(calculate(4,5, multiply));
console.log(calculate(10,5, subtraction));


const a = [4, 1, 6, -2, -5, 3, 2, -8, 6, 7];

const firstNeg = (num) =>{
    return num<0;
}

const result = a.find(firstNeg);
console.log(result);

a.forEach((num, i)=>{
    console.log("array  num", num, i);
})

setTimeout(() => {
    console.log('after 2 seconds🕝🍰');
}, 2000);

function getCheese(callBack){
    setTimeout(()=>{
        const cheese = "🧀";
        console.log("here is your cheese",cheese);
        callBack(cheese);
    }, 2000);
}

function takeCheese(i){
    console.log("here is the cheese",i);
}

getCheese(takeCheese);