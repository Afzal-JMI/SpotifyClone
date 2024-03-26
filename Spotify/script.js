console.log("Welcome to Spotify");
// initializing the variables
let songIndex = 0;
let audioElement = new Audio("songs/Ed.mp3");
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
// audioElement.setAttribute("src", )
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById("myProgressBar");

let songs = [
    {songName: 'Kudi nu nachne de', filePath: "2.mpeg", coverPath: "covers/2.jpg"},
    {songName: 'samjhawa', filePath: "songs", coverPath: "covers/papa.jpg"},
    {songName: 'Tu hai kahan', filePath: "Tu hai kahan.mpeg", coverPath: "covers/1.jpg"},
    // {songName: 'Kun-faya-kun', filePath: "", coverPath: "cover4"},
    // {songName: 'Kun-faya-kun', filePath: "", coverPath: "cover5"},
    // {songName: 'Kun-faya-kun', filePath: "", coverPath: "cover6"},
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
})



// audioElement.play();
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        audioElement.volume = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

stopAtCompletion = ()=>{
    if(myProgressBar.value == 100){
        // console.log('stopped');
        // audioElement.pause();
        gif.style.opacity = 0;
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
}

// Lisen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    // Update Seekbar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        console.log(element);
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

const makeOthersPlay = (x)=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((v)=>{
        if (v != x){
            v.classList.remove('fa-circle-pause');
            v.classList.add('fa-circle-play');
        }
    })
}


Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target == document.getElementsByClassName('songItemPlay')[0]);
        // let i = 0;
        // while(document.getElementsByClassName('songItemPlay')[i] != e.target && i<=3){
        //     document.getElementsByClassName('songItemPlay')[i].classList.remove('fa-circle-pause');
        //     document.getElementsByClassName('songItemPlay')[i].classList.add('fa-circle-play');
        //     i++;
        // }
        makeOthersPlay(e.target);
        // console.log(document.getElementsByClassName('songItemPlay')[0]);
        // console.log(e.target.classList.contains('fa-circle-play'));
        // makeAllPlays();
        songIndex = parseInt(e.target.id);
        // audioElement.src = '3.mpeg';
        switch(songIndex){
            case 0: {
                audioElement.src = 'songs/2.mpeg';
                masterSongName.innerText = songs[songIndex].songName /* +" -Shivangi" */;
                break;
            }
            case 1: {
                audioElement.src = 'songs/1.mpeg';
                masterSongName.innerText = songs[songIndex].songName /* +" -Shivangi" */;
                break;
            }
            case 2: {
                audioElement.src = 'songs/Tu hai kahan.mpeg';
                masterSongName.innerText = songs[songIndex].songName /* +" -Shilpi" */;
                break;
            }
        }
        // masterSongName.innerText = songs[songIndex].songName +"shivangi";
        
        if (e.target.classList.contains('fa-circle-play')){
            audioElement.play();
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
        }
        else{
            audioElement.pause();
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
        }
        // if (e.target.classList.contains('fa-circle-pause')){
        //     e.target.classList.remove('fa-circle-pause');
        //     e.target.classList.add('fa-circle-play');
        // }
        audioElement.currentTime = 0;
        // audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
});

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=2){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    switch(songIndex){
        case 0: {
            audioElement.src = 'songs/2.mpeg';
            break;
        }
        case 1: {
            audioElement.src = 'songs/Papa.mp3';
            break;
        }
        case 2: {
            audioElement.src = 'songs/Tu hai kahan.mpeg';
            break;
        }
    }
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    switch(songIndex){
        case 0: {
            audioElement.src = 'songs/2.mpeg';
            break;
        }
        case 1: {
            audioElement.src = 'songs/Papa.mp3';
            break;
        }
        case 2: {
            audioElement.src = 'songs/Tu hai kahan.mpeg';
            break;
        }
    }
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})




setInterval(()=>{
    stopAtCompletion();
}, 1000);




/* ================================================= */
// let audio = new Audio("2.mpeg");
// audio.play();

// pauseMusic = ()=>{
//     // let audio = new Audio("2.mpeg");
//     audio.pause();
// }

// masterPlay.addEventListener('click', ()=>{
//     audio.pause();
//     masterPlay.classList.remove('fa-circle-play');
//     masterPlay.classList.add('fa-circle-pause');
// })


// audioElement.addEventListener('timeupdate', ()=>{
//     console.log(audioElement.currentTime);
//     console.log(myProgressBar.value);
// })
 
// setInterval(()=>{
//     console.log(myProgressBar.value);
// }, 1000);


/* =================================================== */