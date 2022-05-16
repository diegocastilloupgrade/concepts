//**Iteración #6: Valores únicos**

//Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda',
];
function removeDuplicates(listaCliente) {
  for (let i = 0; i < listaCliente.length; i++) {
    for (let j = 1; j < listaCliente.length; j++) {
      if (listaCliente[i] === listaCliente[j] && i !== j) {
        listaCliente.splice(j, 1);
        j--;
      }
    }
  }
  console.log(listaCliente);
}

removeDuplicates(duplicates);
