class Databaze {
    constructor() {
      let zaznamyStorage = localStorage.getItem("zaznamy");
      this.zaznamy = zaznamyStorage ? JSON.parse(zaznamyStorage) : [];
      
      // Přeconvertovat data na instance třídy Osoba
      this.zaznamy = this.zaznamy.map(data => new Osoba(data.jmeno, data.prijmeni, data.vek));
      this.ZiskejZaznamy();
    }
  
    ZiskejZaznamy() {
      let text = "";
      for (var i = 0; i < this.zaznamy.length; i++) {
        text += this.zaznamy[i].Popis();
      }
      return text;
    }
  
    UlozZaznam(zaznam) {
      this.zaznamy.push(zaznam);
      localStorage.removeItem("zaznamy");
      let zaznamyJSON = JSON.stringify(this.zaznamy);
      localStorage.setItem("zaznamy", zaznamyJSON);
    }

    SmazVse() {
     this.zaznamy = [];
     localStorage.removeItem("zaznamy");
     return "";
    }

    Najdi(prijmeni){
      let nalezeno = this.zaznamy.find(x => x.prijmeni.toLowerCase() == prijmeni.toLowerCase());

      return nalezeno == undefined || null ?
      "<span style=`color:red;`>Hledaný neexistuje</span>":
      ("Nalezeno:<b>"+nalezeno.Popis()+"<b>");
    }
  }