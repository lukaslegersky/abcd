class Osoba{

    constructor(jmeno, prijmeni, vek){
        this.jmeno = jmeno;
        this.prijmeni = prijmeni;
        this.vek = vek;
    }

    Popis(){
        return `${this.jmeno} ${this.prijmeni}, ${this.vek} <br>`;
    }
}