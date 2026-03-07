let totGatti = 34;

let filaGatti = 6;

let totFile = Math.floor(totGatti / filaGatti);
console.log(totFile);

let gattiFuori = totGatti % filaGatti
console.log(gattiFuori);

let gattiMancanti = filaGatti - gattiFuori;
console.log(gattiMancanti);

console.log(`Ci sono ${totFile} file di gatti e mancano ${gattiMancanti} per un altra fila con un avanzano di ${gattiFuori}`);



