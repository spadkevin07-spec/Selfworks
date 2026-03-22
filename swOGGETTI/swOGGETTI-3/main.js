// Crea un oggetto bowling con le seguenti caratteristiche:
// una proprietà che comprenda una lista di giocatori con un nome e i relativi punteggi
// diverse funzionalità tra cui:
// creare 10 punteggi casuali per ogni giocatore:
// Suggerimento: questo metodo dovra’ ciclare tutti i giocatori, presenti nell’oggetto bowling, e aggiungere ad ogni proprieta’ scores, dieci punteggi casuali ad ogni giocatore
// Per generare un punteggio casuale da 1 a 10 → Math.floor(Math.random() * (10 - 1 +1) + 1)
// trovare il punteggio finale per ogni giocatore:
// Suggerimento: ordinare l’array in ordine Decrescente (Attenzione! E’ un array di oggetti: Array.prototype.sort() - JavaScript | MDN )
// aggiungere un nuovo giocatore e creare 10 punti casuali anche per lui
// determinare il vincitore

// EXTRA:
// Crea un metodo per stilare la classifica finale dei giocatori







let bowling = {
    'players': [
        {'name': 'Livio', 'scores': []},
        {'name': 'Paola', 'scores': []},
        {'name': 'Filippo', 'scores': []},
        {'name': 'Giuseppe', 'scores': []}
    ],

    setScores: function(){
        this.players.forEach(giocatore => {
            for (let i = 1; i <= 10 ; i++) {
                giocatore.scores.push(Math.floor(Math.random()* (10 - 1 + 1) + 1));
            }

            console.log(giocatore.scores);
            
        })
    },
    
    addPlayer: function(nome){
        let nuovoGiocatore = {name: nome, scores:[]}
            for (let i = 1; i <= 10; i++){
                nuovoGiocatore.scores.push(Math.floor(Math.random()* (10 - 1 + 1) + 1))
            }
            
            this.players.push(nuovoGiocatore)
            console.log(nuovoGiocatore.scores);

    },
    
    finalScore: function(){
        this.players.forEach(giocatore => {
            
            let tot = giocatore.scores.reduce((acc, num) => acc + num)
            
            giocatore.totale = tot
            
        })
        this.players.sort((a, b)=> b.totale - a.totale)
    },

    getWinner: function(){
        
        let vincitore = this.players[0];
        console.log(`Il vincitore è ${vincitore.name} con ${vincitore.totale} punti!`);
    },
        


    risultatoTotale: function(){
        console.log('Classifica finale');
        this.players.forEach(giocatore => {
            console.log(`${giocatore.name} ${giocatore.totale}`);
        })
        
    }
}

bowling.setScores(); 

bowling.addPlayer('Roberto');

bowling.finalScore()

bowling.risultatoTotale(); 

bowling.getWinner(); 