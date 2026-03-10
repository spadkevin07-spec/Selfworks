let num = 0;

let num1 = 0;

for(let i = 1; i <= 20; i ++){
    if(i % 2 == 0){
        console.log(i);
    }else{
        num = num + i
        num1 ++
    }
}

console.log(`num = ${num}`);
console.log(`num1 = ${num1}`);
console.log(`La media e' = ${num / num1}`);

