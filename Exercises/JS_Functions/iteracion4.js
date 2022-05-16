//**Iteración #4: Calcular el promedio**

//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
const numbers2 = [10,21]
function average(param) {
  let promedio = 0;
  for (let i = 0; i < param.length; i++) {
      promedio = promedio + numbers[i]
  }
  promedio = promedio / (param.length);
  console.log(promedio);
}

average(numbers);