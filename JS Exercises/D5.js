/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

console.log("ESERCIZIO 1");

const pets = ["dog", "cat", "hamster", "redfish"];

const printArray = function (array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
  }
};

printArray(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log("ESERCIZIO 2");

const alphabeticalOrder = function (array) {
  array.sort();
  console.log(array);
};

alphabeticalOrder(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("ESERCIZIO 3");

const reversedOrder = function (array) {
  const reversedArray = array.reverse();
  console.log(reversedArray);
};

reversedOrder(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log("ESERCIZIO 4");

const switchFirstWithLast = function (array) {
  const lastElement = array.pop();
  const firstElement = array.shift();
  array.unshift(lastElement);
  array.push(firstElement);
  console.log(array);
};

switchFirstWithLast(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

console.log("ESERCIZIO 5");

const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

const addsLicensePlate = function (array) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "Z",
  ];
  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    const firstLicensePlate =
      alphabet[Math.floor(Math.random() * alphabet.length)] +
      alphabet[Math.floor(Math.random() * alphabet.length)];
    const middleLicensePlate =
      Math.floor(Math.random() * 9).toString() +
      Math.floor(Math.random() * 9).toString() +
      Math.floor(Math.random() * 9).toString();
    const lastLicensePlate =
      alphabet[Math.floor(Math.random() * alphabet.length)] +
      alphabet[Math.floor(Math.random() * alphabet.length)];
    const randomLicensePlate =
      firstLicensePlate + middleLicensePlate + lastLicensePlate;
    currentElement.licensePlate = randomLicensePlate;
  }
  console.log(array);
};

addsLicensePlate(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log("ESERCIZIO 6");

cars.push({
  brand: "Fiat",
  model: "500",
  color: "red",
  trims: ["lounge", "sport", "dolcevita"],
});

console.log(cars);
addsLicensePlate(cars);

const removeLastTrim = function (array) {
  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    currentElement.trims.pop();
  }
};

removeLastTrim(cars);
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

console.log("ESERCIZIO 7");

const justTrims = [];

const saveFirstTrims = function (array) {
  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    const firstTrim = currentElement.trims[0];
    justTrims.push(firstTrim);
  }
};

saveFirstTrims(cars);
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
