/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */


function CalcoloCostoBiglietto(){

    let NomeCognome = document.getElementById(`NomeCognome1`).value
    let Chilometri = parseFloat(document.getElementById(`Chilometri`).value) ;
    let EtaPasseggero = parseInt(document.getElementById(`EtaPasseggero`).value);
    
    if (EtaPasseggero < 18){
        CostoBiglietto = ( (0.21 * Chilometri) * 0.8).toFixed(2)
        // console.log(`Il costo del biglietto é: ${CostoBiglietto}€`);

    } else if (EtaPasseggero > 65){
        CostoBiglietto = ((0.21 * Chilometri) * 0.6).toFixed(2)
        // console.log(`Il costo del biglietto é: ${CostoBiglietto}€`);

    } else{
        CostoBiglietto = (0.21 * Chilometri).toFixed(2)
        // console.log(`Il costo del biglietto é: ${CostoBiglietto}€`);
    }

document.querySelector(`#ticket`).classList.toggle(`d-none`)

document.getElementById(`biglietto`).innerHTML = (`${CostoBiglietto}€`);

document.getElementById(`nomeCognome`).innerHTML = (`${NomeCognome}`);

document.querySelector(`#carrozza`).innerHTML += `<span>${numeroRandomico(0,10)}</span>`;

document.querySelector(`#codice`).innerHTML += `<span>${numeroRandomico(0,100000)}</span>`;

function numeroRandomico(min, max){
    return Math.floor(Math.random() * max) +min;
}

}



