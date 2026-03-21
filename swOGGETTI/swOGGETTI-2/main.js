// Aiutandomi col video selfwork a eseguire alcuni passaggi che non ricordavo bene, mi sono accorto che il compito si basa su argomenti che nell'ultima video lezione non c'erano. Magari mi sbaglio ma per esempio usare lo switch o richiamare nelle variabili name e number per dare altri valori da attribuire per le funzionalita' non li avevo ancora visti e da solo non avrei mai pensato di poter prendere questo tipo di iniziativa. Provando il codice funziona tutto, se c'e' da farlo come nel video swlfwork va bene ma in tal caso non ci avro' capito nulla. In caso contrario mi assumo la responsabilita' di aver detto una cosa fuorviata.

let agenda = {
    rubrica: [
        {nome: 'Nicola', telefono: 3333111},
        {nome: 'Paola', telefono: 3333222},
        {nome: 'Francesca', telefono: 3333333},
        {nome: 'Serena', telefono: 3333444},
    ],

    mostraRubrica: function(){
        this.rubrica.forEach(contatto => {
            console.log(`${contatto.nome}: ${contatto.telefono}`);
            
        })
    },

    mostraContatto: function(name){
        
        let contatto = this.rubrica.find(contatto => contatto.nome == name);

        if(contatto){
            console.log(`${contatto.nome} ${contatto.telefono}`);
            
        }else{
            console.log(`Contatto non presente`);
            
        }
    },

    eliminaContatto: function(nome, telefono){

        let contatto = this.rubrica.find(contatto => contatto.nome == nome);

        let index = this.rubrica.indexOf(contatto)

        if(index >= 0){
            
            this.rubrica.splice(index, 1);
            
            console.log(`Contatto eliminato`);
            
        }else{
            console.log(`Contatto non presente`);
            
        }
    },

    aggiungiContatto: function(nome, telefono){

        this.rubrica.push({nome: nome, telefono: telefono});
    },

    modificaContatto: function(nome, nuovoTelefono){
        
        let contatto = this.rubrica.find(contatto => contatto.nome == nome)
        
        if(contatto){
            console.log(`Contatto modificato`);
            contatto.telefono = nuovoTelefono
            
        }else{
            console.log(`Contatto non presente`);
            
        }
    }
}
    



// agenda.mostraRubrica()

// agenda.mostraContatto()

// agenda.aggiungiContatto('Roberto', 23432)

// agenda.eliminaContatto('Serena')

// agenda.modificaContatto('Paola', 5893798)

// agenda.mostraRubrica()
