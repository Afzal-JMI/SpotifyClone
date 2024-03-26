let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(()=>{
        console.log("I'm a promise and I'm resolved!");
        resolve(console.warn("it's a warning"));
        // reject(new Error("I am an error"));
    }, 5000)
})

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(()=>{
        console.log("I'm a promise and I'm rejected!");
        // resolve(true);
        reject(new Error("I am an error"));
    }, 5000)
})

// console.log(p2,p1);

// p1.then((value)=>{
//     console.log(value);
// })