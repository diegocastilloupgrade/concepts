//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.pop();

let lastPosition = rickAndMortyCharacters.length;
console.log(rickAndMortyCharacters[0]);
console.log(rickAndMortyCharacters[lastPosition-1]);