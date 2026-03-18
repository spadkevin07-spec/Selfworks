let persona = {
    'nome' : 'Kevin',
    'cognome' : 'Spadaro',
    'eta' : '27 anni',
    
    presentazione: function() {
        
        console.log(`Ciao mi chiamo ${this.nome} ${this.cognome} e ho ${this.eta}.`)
        
    }
}

persona.presentazione();