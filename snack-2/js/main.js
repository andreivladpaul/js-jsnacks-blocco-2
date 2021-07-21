/* Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. */

/* var num = [];

var sum = 0;

for (var i = 0; i < 5; i++) {
    num[i] = parseInt(prompt("Inserisci il numero"));
}

console.log('i numeri inseriti sono: ')

var i = 0
while (i < num.length) {
    console.log(num[i]);

    sum += num[i];
    i++;
}
console.log("la somma è " + sum);
 */

//---------------------------------------------------------------------------------------------------------
/* Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array */

/* var num = []; */
/* for (var i = 0; i < 6; i++ ) {
    var nuovoNumero = parseInt(prompt("inserisci un numero")); */

   /*  if (nuovoNumero % 2 != 0) {
        num.push(nuovoNumero);
    } */

/* 
var i = 0
while (i < 6) {
    var nuovoNumero = parseInt(prompt("inserisci un numero"));
    if (nuovoNumero % 2 != 0) {
        num.push(nuovoNumero);

    }
    i++;
}

console.log(num);
 */

//---------------------------------------------------------------------------------------------------------
//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

/* var numero = parseInt(prompt("Inserisci numero"));

if (numero % 2 == 0) {
    console.log(numero);
} else {
    console.log(numero++);
} */

//-----------------------------------------------------------------------------------------------------------
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

/* var names = ["Valerio", "Marco", "Flavia", "Ilaria", "Giacomo"];
var surnames = ["Rossi", "Esposito", "Dino", "Rosa", "Foro"]

var randomName; 
var randomSurname;

for (i = 0; i < 5; i++) {
    randomName = names[Math.floor(Math.random()*names.length)];
    randomSurname = surnames[Math.floor(Math.random()*surnames.length)];
    console.log(randomName + " " + randomSurname );
} */

//--------------------------------------------------------------------------------------------------------
//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

var myArray = [4, 17, 89, 10, 4, 14, 6, 73, 84, 90];
sum = 0;

for (let i = 0; i < myArray.length; i++) {
	const element = myArray[i];

	if (element % 2 != 0) {
		sum += element;
	}
}
console.log("La somma dei numeri dispari e': " + sum);
 


//--------------------------------------------------------------------------------------------------------
// Esercitazione pomeriggio
//Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

/* var arrayFirst = ["fiore", "palla", "libro", "tazza", "computer", "tastiera"];
var First_length = arrayFirst.length;

var arraySecond = ["rosso" , "nero"];
var Second_length = arraySecond.length;


var newItem = prompt("Popola array")

while (Second_length < First_length) {
    arraySecond.push(prompt("Popola l'array"))
    Second_length++;
}

console.log(arraySecond); */