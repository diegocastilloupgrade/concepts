//**Iteración #4: Métodos findArrayIndex**

//Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

// Ej Array:
const bichos = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

// Sugerencia de función:
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (text === array[i]) {
      console.log('La cadena ', text, 'está en la posición', i);
    }
  }
}
findArrayIndex(bichos, 'Ajolote');
