function getCheese(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const cheese = "🧀";
            
            resolve(cheese);
        }, 5000)
    }) 
}
console.log(getCheese());

function makeDough(cheese){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dough = cheese+"🍩";
            
            // resolve(dough);
            reject("spoiled cheese");
        }, 5000)
    })
}
console.log(makeDough());

function bakePizza(dough){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const pizza = dough+"🍕"
            
            resolve(pizza);
        }, 2000);
    })
}

// getCheese()
// .then((cheese) => {
//     console.log('Here is your cheese', cheese);
//     return makeDough(cheese);
// })
// .then((dough) =>{
//     console.log('Here is your dough', dough);
//     return bakePizza(dough);
// })
// .then((pizza) =>{
//     console.log("here is the pizza", pizza);
// }).catch((data) =>{
//     console.log("error occured")
// })
// .finally(() =>{
//     console.log("process ended");
// })

async function orderPizza(){

    try{
    const cheese = await getCheese();
    console.log('Here is your cheese', cheese);
    const dough = await makeDough(cheese);
    console.log('Here is your dough', dough);
    const pizza = await bakePizza(dough);
    console.log("here is the pizza", pizza);
    }catch(err){
        console.log("error occured, err");
    }
}

orderPizza();