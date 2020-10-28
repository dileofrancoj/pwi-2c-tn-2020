const { create: createPersona } = require("./../models/personas");
const { create: createUser } = require("./../models/usuarios");
const { send } = require("./../services/mail");
const sha1 = require("sha1");
const { v4: uid } = require("uuid");
const register = async ({
  nombre,
  apellido,
  mail,
  telefono,
  usuario,
  password,
} = {}) => {
  try {
    const { insertId: idPersona } = await createPersona({
      nombre,
      apellido,
      mail,
      telefono,
    });
    const { insertId: idUsuario } = await createUser({
      usuario,
      password: sha1(password),
      idPersona,
      confirmacionCorreo: uid(),
    });
    return idUsuario;
    /*
    const mailObject = {
        mail,
        message: `
          <h2>Gracias por registrarte ${nombre} ${apellido}</h2>
          <h3>No olvides verificar tu cuenta para seguir </h3>
          <a href="">Enlace mágico </a>
        `,
      };
      await send(mailObject);
     */
  } catch (e) {
    console.log(e);
  }
};

module.exports = { register };
