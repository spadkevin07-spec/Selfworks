function gioco(tiri){
    let giocatore1 = 0;
    let giocatore2 = 0;

    for(let i = 0; i < tiri; i++){
        let random1 = Math.floor(Math.random() * 6) + 1;
        let random2 = Math.floor(Math.random() * 6) + 1;

        giocatore1 += random1
        giocatore2 += random2
    }

    if(giocatore1 > giocatore2){
        return `giocatore 1 ha vinto con un punteggio pari a ${giocatore1}`
    }else if(giocatore2 > giocatore1){
        return `giocatore 2 ha vinto con un punteggio pari a ${giocatore2}`
    }else{
        return `pareggio con un punteggio di ${giocatore1}`
    }
}

let tiri = Number(prompt (`Quanti tiri devono effettuare i giocatori?`));

let risultato = gioco(tiri);

console.log(risultato);
