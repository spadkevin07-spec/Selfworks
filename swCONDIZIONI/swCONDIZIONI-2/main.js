// let temp = Number(prompt(`Inserisci la temperatura`));

// if(temp < -10){
//     console.log('Copriti... ancora ti raffreddi');
    
// }else if(temp <= 0){
//     console.log(`Non e' tanto il freddo quanto l'umidita'`);
    
// }else if(temp < 20){
//     console.log('Non ci sono piu le mezze stagioni');
    
// }else if(temp < 30){
//     console.log('Mi dia una Peroni sudata');
    
// }else{
//     console.log('Lu sule, lu mare, lu ientu');
    
// }


let temp = Number(prompt(`Inserisci la temperatura`));

let descrizione;

switch (true) {
    case temp <= -10:
        descrizione = 'Copriti fa molto freddo'
        break;

    case temp <= 0:
        descrizione = `Non e' tanto il freddo quanto l'umidita'`
        break;

    case temp < 20:
        descrizione = 'Non ci sono piu le mezze stagioni'
        break;

    case temp < 30:
        descrizione = 'Mi dia una Peroni sudata'
        break;

    default:
        descrizione = 'Lu sule, lu mare, lu ientu';
}

console.log(descrizione);
