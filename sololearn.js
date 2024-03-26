function setText() {
    var a = document.getElementById("demo");
     var arr = a.childNodes;
     console.log(arr);
     var arra = ['whoa', 'jsckja'];
     for(var x=0;x<arr.length;x++) {
       arr[x].innerHTML = arra[x];
       console.log(arr[x]);
     }
}

//calling the function with setTimeout to make sure the HTML is loaded
// setTimeout(setText, 2000);
//creating a new paragraph
var p = document.createElement("p");
var node = document.createTextNode("Some new text");
//adding the text to the paragraph
p.appendChild(node);

var div = document.getElementById("demon");
//adding the paragraph to the div
div.appendChild(p);