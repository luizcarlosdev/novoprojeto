const corpo = document.querySelector("body");
const main = document.querySelector("main")
const p = document.querySelectorAll("p");
const h1 = document.querySelectorAll("h1");
const light = document.querySelector("#buttonl");
const dark = document.querySelector("#buttond");

function menu() {
    const menu = document.querySelector("aside#menu-lateral");
    menu.style.width = "250px";
    menu.style.transition = "0.5s ease-in-out";
    corpo.style.overflowY = "hidden";
}

function menuout(){
    const menu = document.querySelector("aside#menu-lateral");
    menu.style.width = "0px";
    corpo.style.overflowY = "scroll";
}

function lightmode(){
    buttonl.style.display = "none";
    buttond.style.display = "block"
    corpo.style.background = "#fff";
    main.style.background = "#fff";
    for(let s = 0; s <= p.length; s++){
        p[s].style.color = "#000"
    }
}

function darkmode() {
    buttonl.style.display = "block";
    buttond.style.display = "none"
    corpo.style.background = "#333";
    main.style.background = "#333";
    for(let s = 0; s <= p.length; s++){
        p[s].style.color = "#fff"
    }
}

dark.addEventListener("click",() => {
    for(let s = 1; s <= (h1.length - 1);s++){
        h1[s].style.color = "#fff"
    }
})

light.addEventListener("click",() => {
    for(let s = 1; s <= (h1.length - 1 ); s++){
        h1[s].style.color = "#000"
    }
})