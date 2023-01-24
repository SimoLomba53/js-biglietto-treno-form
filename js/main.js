
//BOTTONE GENERA
const buttongenera = document.getElementById("genera");
console.log('Bottone genera', buttongenera);

buttongenera.addEventListener(
    'click',
    function(click){
    const kmnumber = document.getElementById("km").value;
    console.log('Totale Kilometri:', kmnumber);
    //ETA'
    const eta = document.getElementById("eta").value;
    console.log('Anni:', eta);
    //PREZZO NOSALE   
    let pricenosale = (kmnumber * 0.21);
    console.log('Prezzo senza sconto:', pricenosale)
    //SCONTI
    let price = pricenosale;

    if (eta < 18) {
        price = (price - (pricenosale / 100 * 20));
        console.log(price);
    }

    if (eta > 65) {
        price = (price - (pricenosale / 100 * 40));
        console.log(price);
    }


    //IMPORT PRICE IN HTML
    const prezzofinale = `Il tuo prezzo sarà: ${price.toFixed(2)} €`;
    console.log(prezzofinale);
    const prezzofinito = document.getElementById('finalprice');
    prezzofinito.innerHTML = prezzofinale;
    }
);
