// In Js , a promise is a good way to handle asynchronous operations. 
// It is used to find out if the asynchronous operation is successfully completed or not
// A promise can have three states:
// pending
// fulfilled
// rejected
// To create a promise object we create a promise constructor.

const ticket = new Promise(function(resolve, reject){
    const isBoarded = false;
    if(isBoarded){
        resolve('You are not in the flight yet');
    }
    else{
        reject('Your ticket is not valid');
    }
})

// console.log(ticket);
// then: then mehod is used with the callback when the promise is successfully fulfilled or resolved.
ticket
.then((data)=>{
    console.log('yups', data);
})
.catch((data)=>{
    console.log('oops', data);
})
.finally(()=>{
    console.log('I will always be executed.');
})




// catch: catch methojd is used with the callback when the promise is rejected or if an error occurs.
