"use strict";



//1. Mygtuko paspaudimu pakeisti kvadetelio spalva.
// Paspaudus ant elemento, pakeisti jo spalva i atsitiktine spalva.

document.querySelector(".kvadratelis").addEventListener("click", function(){
    //pasirinkti elementa kvadratelis
    //jam priskirti kita spalva/arba kita klase

// 1.
// document.querySelector(".kvadratelis").style.background = "red";

//2.
    //
    // raudonos zalios melynas
    // 0-255 0-255 0-255



    let colors;
    // colors = ["red", "yellow", "green", "blue"];

    let atsitiktinis1 = Math.floor(Math.random() * 255); // 0 iki 3
    let atsitiktinis2 = Math.floor(Math.random() * 255); // 0 iki 3
    let atsitiktinis3 = Math.floor(Math.random() * 255); // 0 iki 3

    // 0 - red
    // 1 - yellow
    // 2 - green
    // 3 - blue
    
    this.style.background = "rgb("+atsitiktinis1+","+atsitiktinis2+","+atsitiktinis3+")";
    
    // this.classList.toggle('geltona');

});

// click ivykis

//resize - kai pasikeicia ekrano dydis
//mouseenter - pelytes uzvedimas
//load - puslapiui uzsikrovus
//keydown - klaviaturos paspaudimas(kuriant nesunkius zaidimus)



window.addEventListener("resize", function(){
    console.log("Pasikeite ekrano dydis");
    let atsitiktinis1 = Math.floor(Math.random() * 255); // 0 iki 3
    let atsitiktinis2 = Math.floor(Math.random() * 255); // 0 iki 3
    let atsitiktinis3 = Math.floor(Math.random() * 255); // 0 iki 3

    // 0 - red
    // 1 - yellow
    // 2 - green
    // 3 - blue
    
     document.body.style.background = "rgb("+atsitiktinis1+","+atsitiktinis2+","+atsitiktinis3+")";
})


document.querySelector(".kvadratelis").addEventListener("mouseenter", function(){
   
    console.log("ant manes uzvede pelyte");
});

window.addEventListener("load", function() {
    console.log("puslapis uzsikrove specifiniame load ivykyje");
})

console.log("puslapis uzsikrove");


window.addEventListener("keydown", function(e) {


    if(e.keyCode == '38') {
        console.log('Paspausta virsutine rodykle');
        this.document.querySelector(".kvadratelis").style.top ="0" + "px" ;


    } else if(e.keyCode== '40') {
        console.log('Paspausta apatine rodykle');
        this.document.querySelector(".kvadratelis").style.top ="100" + "px" ;

    } else if(e.keyCode== '37') {
        console.log('Paspausta kairine rodykle');
        
    } else if(e.keyCode== '39') {
        this.document.querySelector(".kvadratelis").style.left ="100" + "px" ;
        console.log('Paspausta desinine rodykle');
    }
});