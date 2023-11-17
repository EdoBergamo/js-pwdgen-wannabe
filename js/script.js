// Dichiarazioni variabili
let nome;
let cognome;
let colore_preferito;
let password;

// Chiedere all'utente di inserire il proprio nome
nome = prompt("Inserisci il tuo nome");

// Chiedere all'utente di inserire il proprio cognome
cognome = prompt("Inserisci il tuo cognome");

// Chiedere all'utente di inserire il proprio colore preferito
colore_preferito = prompt("Inserisci il tuo colore preferito");

/* Concatena le risposte dell'utente (nome, cognome, colore_preferito) e aggiungo 23 in modo static
 * 
 * Primo Metodo
 * risultato = nome + cognome + colore_preferito + '23';
 * 
 * Secondo Metodo
*/
risultato = `${nome}${cognome}${colore_preferito}23`;

// Mostra il risultato ottenuto dalla concatenazione delle risposte dell'utente
document.getElementById('password_generata').innerHTML = `Password Generata: <strong>${risultato}</strong>`