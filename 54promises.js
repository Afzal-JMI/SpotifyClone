// A promise is a "promise of code execution". The code either executes or fails in both the cases the subscriber wiil be notified.
// syntax : let promise = new Promise(function(resolve, reject){});
// resolve and reject are callbacks provided by javascript itself. They are called like this :

let promise = new Promise(function(resolve, reject){
    alert("I am an alert box in promise .");
    resolve(56);
})





console.log("Hello one");
setTimeout(function(){
    console.log("hello in two seconds");
}, 3000);
console.log("hell 3");
console.log(promise);

/*The promise object returned by the Promise constructor has these properties:
1 state : Initially pending, then changes to either "fulfilled" when resolve is called
 or "rejected" when reject is called.
2 result : Initially undefined , then changes to value if resolved or error when rejected.
*/