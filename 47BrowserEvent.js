// Event is a singnal that something has happened. All the DOM nodes generates some signals.
//  Mouse events :
// Keyboaord events :
// form element events: submit, focus etc
// Document events: DOMcontent Loaded;
// Adding a handler in JS overwrite the handler in Html.
let a = document.getElementsByClassName("container")[0];
a.onclick = ()=>{
    let b = document.getElementsByClassName("container")[0];
    b.innerHTML = "Hello stupid";
    console.log(b);
}