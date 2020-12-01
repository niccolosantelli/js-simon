/*Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.*/




//Un alert espone 5 numeri casuali diversi.
var contenitore = [];

  for (var i = 0; i < 5; i++){
    var numeriCasuali = Math.floor(Math.random() * 5) ;
    contenitore.push(numeriCasuali)
  }
  var numeriPc = alert(contenitore);


setTimeout(function() {
   alert("ciao")
  for (var i = 0; i < 5; i++){
    var numeriUtente = Number(prompt("inserisci il numero"))
    risposte.push(numeriUtente)
  }
}, 2000);


var risposte = [];
console.log(risposte)
