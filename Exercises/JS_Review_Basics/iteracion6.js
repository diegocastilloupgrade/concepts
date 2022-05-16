//**Iteración #6: Función swap**

//Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

//Sugerencia de array:
const futbolers = [
  'Mesirve',
  'Cristiano Romualdo',
  'Fernando Muralla',
  'Ronalguiño',
];

function swap(userArray, firstIndex, secondIndex) {
  const firstElement = userArray[firstIndex];
  const secondElement = userArray[secondIndex];
  userArray.splice(firstIndex, 1, secondElement);
  userArray.splice(secondIndex, 1, firstElement);
  console.log(userArray);
}
swap(futbolers, 0, 3);
