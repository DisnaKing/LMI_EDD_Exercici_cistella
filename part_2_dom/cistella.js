document.addEventListener('DOMContentLoaded', function () {
    // Crear objecte cistella
    const cistella = new Cistella();

    // Afegir event listener al boto d'afegir
    let fila = document.getElementById("producte");
    let button=document.getElementById("afegir")
    button.addEventListener('click',function(){
        let nom = document.getElementById("desc").value;
        let preu = document.getElementById("preu").value;
        let quantitat = document.getElementById("quantitat").value;
        let producte = new Producte(nom,preu,quantitat);
        cistella.afegirProducte(producte);
        
        fila.innerHTML += producte.generarHTML();
        
        cistella.actualitzaTotal();
    })
});

class Producte {
    constructor(descripcio, preu, quantitat) { // Constructor de la classe Producte
        this.descripcio = descripcio;
        this.preu = preu;
        this.quantitat = quantitat;
    }
    calculaSubtotal(){ // calcula el subtotal d'un producte
        return this.preu*this.quantitat;
    }
    generarHTML(){ // Genera el html de la fila per a la taula
        return `<tr><td>${this.descripcio}</td><td>${this.preu}</td><td>${this.quantitat}</td><td>${this.calculaSubtotal()}</td></tr>`;
    }
}

class Cistella {
    constructor(){ // Constructor de la classe Cistella
        this.productes=[];
    }
    
    afegirProducte(producte) { // Metode per afegir un producte
        this.productes.push(producte);
    }
    actualitzaTotal(){ //TODO  Actualitza el total de la cistella
        let total=0;
        resultado = document.getElementById("total");
        resultado.innerHTML = ''; // elimina el html existent
        for (let producte of this.productes){
            total += producte.calculaSubtotal();
        }
        resultado.innerHTML+=total+"€";
    }
}