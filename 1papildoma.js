"use strict";

// 1.Parduotuvėje pardavėja graža g pirkejui nori atiduoti 100,50,20,10,5 euru banknotais ir 2 ir 1 eurais monetomis.
// Apskaičiuoti, kiek ir kokio nominalo banknotų ir monetų pardavėja turės atiduoti pirkėjui.


function skaiciuokBanknotus() {
    let g;
    g = parseInt(document.querySelector("#graza").value);

    //simtasKiek, penkiasdesimtKiek, dvidesimtKiek, desimtKiek, penkiKiek, duKiek, vienasKiek

    //135
    //simtasKiek=1    x 100
    //dvidesimtKiek=  1  x 20
    //desimtKiek =1 x 10
    //penkiKiek =1 x 5


    // 429
    // 429/100 = 4.29 ~ 4
    let simtasKiek = parseInt(g/100); //kiek bus 100eur banknotu
    g = g % 100;// 429 % 100 = 29
    let penkiasdesimtKiek = parseInt(g/50); // 29/50 = 0.6 ~ 0
    g = g % 50; // 29 % 50 = 29
    let dvidesimtKiek = parseInt(g/20); //29/20 = 1,4 ~ 1
    g = g % 20;// 29 % 20 = 9
    let desimtKiek = parseInt(g/10); // 9/10 = 0
    g = g % 10;// 9 % 10 = 9
    let penkiKiek = parseInt(g/5); // 9/5 = 1. ~ 1
    g = g % 5; // 9 % 5 = 4
    let duKiek = parseInt(g/2)// 4/2 = 2;
    let vienasKiek= g % 2; //2%2 = 0

    let masyvas = [simtasKiek, penkiasdesimtKiek, dvidesimtKiek, desimtKiek, penkiKiek,duKiek, vienasKiek];
    console.log(masyvas); 
}

document.querySelector("#skaiciuoti").addEventListener("click", skaiciuokBanknotus);


//19.23


//10 5 2 2

// 1 2 5 10 20 50
//23 20 2 1

// 19.23 * 100 = 1923
//19.23 ~ 19
// 1923 % (19 *100) = 23