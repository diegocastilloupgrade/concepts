// **Iteración #4: Probando For...in**

// Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg',
};
// Solucion 1
for (const caracteristica in alien) {
  console.log(alien[caracteristica]);
}

// Solucion 2
for (const bicho in alien) {
  console.log(bicho + alien[bicho]);
}
