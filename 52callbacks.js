// Asynchronous action are thse actions thqt we initiate now but they finish later. ex setTimeout.
// Synchronous action are those that initiate and finish one-by-one.

// Callbacks

function loadScript(src, callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload = setTimeout(function(){
        console.log("Loaded script with src: "+src);
        callback(src);
    },5000);

    script.onerror = function(){
        console.log("Error loading script with src: "+src);
        callback(new Error("There is some error"));
    }
    document.body.appendChild(script);
}

function hello(x){
    alert("hello"+ x);
}

function gm(){
    alert("good morning");
}



// let timeOut=setTimeout(loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", gm), 10000);
loadScript("https://cdn.jsadelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", hello);