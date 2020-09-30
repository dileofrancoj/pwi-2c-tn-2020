// Quiero obtener un array de todos los sueldos de los empelados de mi sistema
const mostrarSueldo = (alumnos) => {
  const sueldos = [];
  alumnos.forEach((alumno) => {
    sueldos.push(alumno.sueldo);
  });
  console.log(sueldos);
};

const mostrarNombres = (empleados) => {
  empleados.forEach((empleado) => console.log(empleado.nombre));
};

const obtenerSueldos = (empleados) => {
  //const arraySueldos = empleados.map((empleado) => empleado.sueldo);
  //const total = arraySueldos.reduce((a = 0, b) => a + b);

  const total = empleados
    .map((empleado) => empleado.sueldo)
    .reduce((a = 0, b) => a + b);
  console.log("el total es ", total);
};

const filtrarGenero = (empleados, genero = "femenino") => {
  const e = empleados
    .filter((empleado) => empleado.genero === genero)
    .map((empleado) => empleado.sueldo)
    .reduce((a = 0, b) => a + b);
  console.log(e);
};

const filterObject = (personajes, species, gender) => {
  return personajes.filter(
    (personaje) =>
      personaje.species.toLowerCase() === species.toLowerCase() &&
      personaje.gender.toLowerCase() === gender.toLowerCase()
  );
};
// forEach -> recorrer y mostrar / listar -> for
// map -> cuando quiero obtener un array a partir de otro -> for & push
// reduce -> cuando quiero obtener un resultado unico a partir de un vector :D -> for + acumulador
// filter -> for & if
