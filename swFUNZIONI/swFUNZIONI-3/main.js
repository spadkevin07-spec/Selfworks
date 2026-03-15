function conta(n){
        
        if(n < 10){
            return `Questo numero ha una cifra.`;
            
        }else if(n < 100){
            return `Questo numero ha due cifre.`;

            
        }else if(n < 1000){
            return `Questo numero ha tre cifre.`;
            
        }else if(n < 10000){
            return `Questo numero ha quattro cifre.`;
            
        }
        else{
            return `Numero troppo grande.`;
            
        }
            
    }

console.log(conta (9));

        

