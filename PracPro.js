// let date = new Date();
// console.log(date.toDateString().split(" ")[3]);

// let arr = [1, 2, 5, 7, 3, 2, 9, 6, 7];

// let dupl = arr.filter((x,y)=>{
//     let i = arr.indexOf(x);
//     return i!==y;
// });

// console.log(dupl);

/* ================================== */

// leap year: every 4th year is a leap year if it's not  century. Every 4th century is a leap year.

// let y = prompt("Enter the year: ");
// if(y%400==0){
//     console.log("it's a leap year");
// }
// else if(y%4==0 && y%100!=0){
//     console.log("it's a leap year.");
// }
// else{
//     console.log("it's not a leap year.");
// }

/* =========================================================== */

// for(let year = 2014; year <= 2050; year++){
// let d = new Date(year, 0, 1);
// if(d.getDay()==0){
//     console.log(`1st january of year ${year} is Sunday.`);
// }
// }

/* ======================================================= */

// let rand = Math.ceil(Math.random()*10);
// console.log(rand);
// let guess = prompt("guess the number");
// if (guess==rand){
//     console.log("Good Work");
// }
// else{
//     console.log("Not Matched");
// }

/* ========================================================= */

// let today = new Date();
// console.log(today.getDate());
// let chris = new Date(today.getFullYear(), 11, 25);
// console.log(today.getTime());
// console.log(Math.ceil((chris.getTime()-today.getTime())/(1000*60*60*24)));

/* ======================================================= */

// let n1 = document.getElementById("n1").value;
// console.log(n1);


// function check() {
//        document.getElementById("result").innerHTML = n1;
    // console.log(n1);
    // console.log(typeof n1);
// }
// document.getElementById("btn").addEventListener("click", check);

/* ==================================================================== */

// multiply = ()=>{
//     num1 = document.getElementById("n1").value;
//     num2 = document.getElementById("n2").value;
//     document.getElementById("result").innerHTML = num1*num2;
// }

// divide = ()=>{
//     num1 = document.getElementById("n1").value;
//     num2 = document.getElementById("n2").value;
//     document.getElementById("result").innerHTML = num1/num2;
// }

// document.getElementById("mul").addEventListener('cilck', multiply);

/* =================================================================================== */

// toFahrenheit = ()=>{
//     let c = document.getElementById("c").value;
//     let f = ((9*c+(32*5))/5).toFixed(2);
//     document.getElementById("result").innerHTML = `${c}\xB0C in fahrenheit is ${f}`;
// }

// toCelcius = ()=>{
//     let f = document.getElementById("f").value;
//     let c = ((5*(f-32))/9).toFixed(2);
//     document.getElementById("result").innerHTML = `${f}\xB0F in celcius is ${c}`;
// }

// document.getElementById("ctf").addEventListener("click", toFahrenheit);
// document.getElementById("ftc").addEventListener("click", toCelcius);

/* =========================================================================================== */

// alert(document.URL);
// alert(document.getElementById("w3s"));

/* ============================================================================================ */

// check = ()=>{
//     let fname = document.getElementById("fname").value;
//     let extens = fname.split(".").pop();
//     document.getElementById("exte").innerHTML = extens;
// }
// document.getElementById("ext").addEventListener("click", check);

/* =========================================================================================== */

// specialSum = (a,b)=>{
//     if (a!==b){
//         console.log(a+b);
//     }
//     else{
//         console.log(3*(a+b));
//     }
// }

// specialSum(3,3);

/* ==================================================================================== */

// checkNum = (a,b)=>{
//     if (a==50||b==50||(a+b)==50){
//         return true;
//     }
// }
// console.log(checkNum(50,80));

/* ========================================================================== */

// testHundred = (x)=>{
//     if (x>100){
//         if ((x-100)<20){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
//     if (x<100){
//         if ((100-x)<20){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
// }
// console.log(testHundred(119));

/* ===================================================== */

// pyString = (x)=>{
//     if (x.charAt(0)==='P' && x.charAt(1)==='y'){
//         return x;
//     }
//     else{
//         let new1 = x.replace(x.charAt(0), 'P');
//         let new2 = new1.replace(new1.charAt(1), 'y');
//         return new2;
//     }
// }

// console.log(pyString("sjcnja"));

/* ================================================================ */

// closeHundred = (a,b)=>{
//     let x = Math.abs(100-a);
//     let y = Math.abs(100-b);
//     if (x<y){
//         return a;
//     }
//     else{
//         return b;
//     }
// }

// console.log(closeHundred(99.8,99.9));

/* ========================================================== */

// reverseString = (strng)=>{
//     let arr = Array.from(strng);
//     let k = arr.length-1;
//     for (let i=0; i<=(arr.length/2); i++){
//         let x = arr[i];
//         arr[i] = arr[k];
//         arr[k] = x;
//         k--;
//     }
//     arr.toString();
//     return arr;
// }

// console.log(reverseString('Welcome').join(''));

/* ============================================================= */

// let play = document.getElementById("play");
// playMusic = ()=>{
//     // let audio = new Audio("2.mpeg");
//     if (audio.paused){
//         audio.play();
//     }
// }
// pauseMusic = ()=>{
//     // let audio = new Audio("2.mpeg");
//     audio.pause();
// }
// play.addEventListener('mouseover', pauseMusic);
// play.addEventListener('mouseout', playMusic);
// play.addEventListener('dblclick', pauseMusic);

let audio = new Audio("Spotify/songs/Papa.mp3");
// audio.play();
audio.volume = 1;

// audio.addEventListener('timeupdate', ()=>{
//     console.log('updating...');
//     // console.log(parseFloat(audio.currentTime/audio.duration)*100);
//     // console.log(audio.duration);
//     progress = parseInt((audio.currentTime/audio.duration)*100);
//     console.log(progress);

// })


// let e = document.getElementById('masterPlay');
// console.log(e.classList.contains('fa-circle-play'));



// masterPlay.addEventListener('click', ()=>{
//     if (e.classList.contains('fa-circle-play')){
//         // audio.play();
//         e.classList.remove('fa-circle-play');
//         e.classList.add('fa-circle-pause');
//     }
//     else{
//         // audio.pause();
//         e.classList.remove('fa-circle-pause');
//         e.classList.add('fa-circle-play');
//     }
// })

let i = 0;
let x = 8;
let arr = [5,4,7,8,9];
// while(arr[i] != x){
//     console.log(arr[i]);
//     i++;
// }

arr.forEach((v)=>{
    if(v != x){
        console.log(v);
    }
})