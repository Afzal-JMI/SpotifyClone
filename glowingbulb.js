let a = document.getElementById("bulb");
a.style.height = "100px";
a.style.width = "100px";
a.style.background = "yellow";



let x = ()=>{
    document.getElementById("img").src = "\light-bulb-2-1427493.jpg";
}
btn1.addEventListener('click', x);

let y = ()=>{
    document.getElementById("img").src = "\light-bulb-1-1427502.jpg";
}

let z = ()=>{
    let count = 0;
    if(count == 0){
        document.getElementById("img").src = "\light-bulb-2-1427493.jpg";
        count++;
    }
    else{
        document.getElementById("img").src = "\light-bulb-1-1427502.jpg";
        count--;
    }
}


btn2.addEventListener('click', y);
btn3.addEventListener('click', z);

setInterval(function(){
    document.getElementById("img1").src = "\light-bulb-2-1427493.jpg";
}, 250);

setInterval(function(){
    document.getElementById("img1").src = "\light-bulb-1-1427502.jpg";
}, 500);
setInterval(function(){
    document.getElementById("img2").src = "\light-bulb-2-1427493.jpg";
}, 250);

setInterval(function(){
    document.getElementById("img2").src = "\light-bulb-1-1427502.jpg";
}, 500);
setInterval(function(){
    document.getElementById("img3").src = "\light-bulb-2-1427493.jpg";
}, 250);

setInterval(function(){
    document.getElementById("img3").src = "\light-bulb-1-1427502.jpg";
}, 500);
setInterval(function(){
    document.getElementById("img4").src = "\light-bulb-2-1427493.jpg";
}, 250);

setInterval(function(){
    document.getElementById("img4").src = "\light-bulb-1-1427502.jpg";
}, 500);
setInterval(function(){
    document.getElementById("img5").src = "\light-bulb-2-1427493.jpg";
}, 250);

setInterval(function(){
    document.getElementById("img5").src = "\light-bulb-1-1427502.jpg";
}, 500);
setInterval(function(){
    document.getElementById("img6").src = "\light-bulb-2-1427493.jpg";
}, 250);

setInterval(function(){
    document.getElementById("img6").src = "\light-bulb-1-1427502.jpg";
}, 500);
setInterval(function(){
    document.getElementById("img7").src = "\light-bulb-2-1427493.jpg";
}, 250);

setInterval(function(){
    document.getElementById("img7").src = "\light-bulb-1-1427502.jpg";
}, 500);
setInterval(function(){
    document.getElementById("img8").src = "\light-bulb-2-1427493.jpg";
}, 250);

setInterval(function(){
    document.getElementById("img8").src = "\light-bulb-1-1427502.jpg";
}, 500);
setInterval(function(){
    document.getElementById("img9").src = "\light-bulb-2-1427493.jpg";
}, 250);

setInterval(function(){
    document.getElementById("img9").src = "\light-bulb-1-1427502.jpg";
}, 500);
