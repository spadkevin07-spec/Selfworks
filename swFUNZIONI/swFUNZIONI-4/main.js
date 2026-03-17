let str = 'otto';
    

function palindroma(frase){
    
    let splitted = frase.replace(/\W/g, "").split('').reverse().join('');

    let fraseOriginale = splitted.split('').reverse().join('');

    console.log(splitted);
    
    
    if(fraseOriginale == splitted){
        console.log(`La frase e' palindroma.`);
        
    }else{
        console.log(`La frase non e' palindroma.`);
        
    }
    
}

palindroma(str)






