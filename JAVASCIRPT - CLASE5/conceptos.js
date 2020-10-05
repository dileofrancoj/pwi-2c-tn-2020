const start = () => {
  console.log("Inicio");
  // Destructuración :D
};
const alumno = {
  nombre: "Claudia",
  apellido: "Montezin",
  bebidas: "Fernet",
  mascotas: ["Apolo"],
};

const data = (p1 = "default") => {
  const { nombre: nombreAlumno, apellido: apellidoAlumno, ...etc } = alumno;
  console.log(etc);
  console.log(`${nombreAlumno} ${apellidoAlumno} `);
};

const comidas = () => {
  const infoComidas = [
    "Empandas",
    "Entraña a la plancheta c/ papas rusticas..",
    "Chocotorta",
    "Rabas",
    "Asado",
    "Vigilante",
    "datos de prueba",
  ];
  const [entrada, platoPrin, postre, ...etc] = infoComidas;
  const [entrada2, platoPinr2, postre2, ...etc2] = etc;
  console.log(etc);
  console.log(
    `Entrada : ${entrada} plato principal : ${platoPrin} postre : ${postre}`
  );
};

const merge = () => {
  const obj1 = {
    nombre: "franco",
  };
  const obj2 = {
    apellido: "di leo",
    nombre: "franquito",
  };

  const obj3 = {
    mascotas: ["amazonas"],
  };

  const arr1 = ["a", "b", "c"];
  const arr2 = ["d", "f", "g"];
  const arrayResultante = {
    ...arr1,
    ...arr2,
  };
  console.log(arrayResultante);
  const r = [...arr1, ...arr2];
  console.log(r);
};

const get = (url = "https://rickandmortyapi.com/api/character/") => {
  // ES6 -> then, catch
  fetch(url)
    .then((response) => response.json())
    .then((d) => console.log(d))
    .catch((e) => console.log(e));
};

const getAsync = async (url = "https://rickandmortyapi.com/api/character/") => {
  // async await
  try {
    const response = await fetch(url);
    const d = await response.json();
    console.log("info async await", d);
  } catch (e) {
    console.error(e);
  }
};

data();
comidas();
merge();
get();
getAsync();
// Ciclo de vida -> onInit
//window.onload = start;
