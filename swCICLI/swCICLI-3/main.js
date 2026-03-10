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