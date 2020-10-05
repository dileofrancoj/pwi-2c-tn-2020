function handlderInput(nombre) {
  console.log(nombre);
  const element = document.getElementById(nombre);
  element.value == ""
    ? (element.style.border = `1px solid red`)
    : (element.style.border = `1px solid green`);
}

const getKeysStorage = () => Object.keys(localStorage);

const send = () => {
  const obj = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    email: document.getElementById("email").value,
  };
  // sessionLocal , string
  localstorage.setItem(obj.email, JSON.stringify(obj));
  const keys = getKeysStorage();
  keys.map((usuario) => {
    document.getElementById("users-list").innerHTML = `${localStorage.getItem(
      usuario
    )}`;
  });

  //const string2Object = JSON.parse(obj);
};

const start = () => {
  console.log("start");
  document
    .getElementById("nombre")
    .addEventListener("input", handlderInput("nombre"));
  document
    .getElementById("apellido")
    .addEventListener("input", handlderInput("apellido"));
  document
    .getElementById("email")
    .addEventListener("input", handlderInput("email"));
  document.getElementById("enviar").addEventListener("click", send);
};
window.onload = start;
