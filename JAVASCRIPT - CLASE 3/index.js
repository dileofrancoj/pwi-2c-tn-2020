function saludar() {
  document.write("holis");
}

function pedirDatos() {
  const nombre = prompt("Decime tu nombre");
  console.log(nombre);
}

// Arrow functions
// Si nombre es undefined setear ""
const saludarAlumno = (nombre = "") => {
  // instrucciones
  console.log(nombre);
  document.write(`Bienvenido/a ${nombre}`);
};

const sumar = (a = 0, b = 0) => {
  // scope -> todas las variables que definimos dentro de una función son PRIVADAS
  const resultado = parseInt(a) + parseInt(b);
  console.log(`El resultado de la suma es : ${resultado}`);
  return resultado;
};
// SUMAR,RESTAR,DIVIDIR, MULTIPLICAR, CALCULAR FACTORIAL, POTENCIA

const restar = (a, b) => {
  const resultado = parseInt(a) - parseInt(b);
  console.log(`El resultado de la suma es : ${resultado}`);
  return resultado;
};
const dividir = (a, b) => {
  // no se puede dividir por 0
  // verificar que el segundo parametro no sea 0 -> clau no mata
  if (parseInt(b) === 0) {
    console.log("No se puede dividir por 0");
  } else {
    const resultado = a / b;
    console.log(`El resultado de la suma es : ${resultado}`);
    return resultado;
  }
};
const multiplicar = (a, b) => {
  console.log(`El resultado de la suma es : ${a ** b}`);
};

// funcion encargada de cargar notas de alumnos --> OK
// funcion que hace el promedio
// una funcion que saca la nota máxima

//
const pedirNombre = () => {
  return prompt("Ingresa el nombre de la victima");
};

const cargarAlumnos = (cantNotas = 1) => {
  const notas = [];
  let nota = 0;
  for (let i = 0; i < cantNotas; i++) {
    nota = parseFloat(prompt("Ingresa la nota"));
    notas.push(nota);
  }
  console.log(`El nombre del alumno/a es ${nombre} y sus notas son ${notas}`);
  return notas;
};

const promedio = (notas) => {
  // [6,8,10]
  let total = 0;
  for (let i = 0; i < notas.length; i++) {
    total = total + notas[i];
    // total += notas[i]
  }
  const resultado = total / notas.length;
  return resultado;
};

// oneliner
const estaAprobado = (promedio) => (promedio >= 7 ? "aprobado" : "desaprobado");

/*
const estaAprobado = (promedio) => {
    (promedio >= 7 ? "aprobado" : "desaprobado");
}
*/
