// let scegli_bevanda = prompt('Scegli una bevanda = 1- Acqua 2- Coca Cola 3- Peroni')

// if(scegli_bevanda == 1){
    
    
//     console.log('Ecco la tua acqua!');
    
// }else if(scegli_bevanda == 2){
//     console.log('Ecco la tua Coca Cola');
    
// }else if(scegli_bevanda == 3){
//     console.log('Ecco la tua birra');
// }else{
//     console.log('Scegli una bevanda = 1- Acqua 2- Coca Cola 3- Peroni');
    
// }



let scelta;

do{
    scelta = Number(prompt('Scegli una bevanda: 1- Acqua 2- Coca Cola 3- Peroni'));

    switch (scelta) {
        case 1:
            console.log('Ecco la tua acqua');
            
            break;

        case 2:
            console.log('Ecco la tua Coca Cola');
            
            break;

        case 3:
            console.log('Ecco la tua Peroni');
            
            break;
    
        default:
            console.log('La scelta inserita non e valida');
            
    }


}while(scelta < 1 || scelta > 3);