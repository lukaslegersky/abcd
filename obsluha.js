const db = new Databaze();

let Tlacitko = document.getElementById("BTN");
let Jmeno = document.getElementById("Jmeno")
let Prijmeni = document.getElementById("Prijmeni");
let Vek = document.getElementById("Vek");
let Vypis = document.getElementById("vypis");
let Knoflicek = document.getElementById("BTN2");
let Puntik = document.getElementById("BTN3");

Tlacitko.onclick = function(){
    const clovicek = new Osoba(Jmeno.value,Prijmeni.value,parseInt(Vek.value));
    db.UlozZaznam(clovicek);
    Vypis.innerHTML = db.ZiskejZaznamy();

    Jmeno.value = Prijmeni.value = Vek.value = ""; //vyprázdní hodnoty
}

Knoflicek.onclick = function(){ 
   Vypis.innerHTML = db.SmazVse();
 
}

Puntik.onclick = function(){
    Vypis.innerHTML = db.Najdi();
}

window.onload = function(){
    Vypis.innerHTML = db.ZiskejZaznamy();
}