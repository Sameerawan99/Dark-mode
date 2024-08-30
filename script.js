

let button = document.querySelector('button');
let text = document.querySelector('p');
let heading = document.querySelector('h1');
let body = document.body; 
let cont = document.querySelector(".container")

cont.style.backgroundColor = "skyblue"
text.style.color = "black";
heading.style.color = "black";
let mode = 'light'; 

function changeColors(){ 
    if(mode === 'light'){
        text.style.color = "white";
        heading.style.color = "white";
        body.style.backgroundColor = "black";
        cont.style.backgroundColor = "#f8c230"

    } else {
        text.style.color = "black";
        heading.style.color = "black";
        body.style.backgroundColor = "white"; 
         cont.style.backgroundColor = "skyblue"

    }
    mode = mode === 'light' ? 'dark' : 'light'; 
}

button.addEventListener('click', changeColors); 