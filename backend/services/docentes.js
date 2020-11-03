// insertar en la tabla docentes
// subir imagen del docente
// insertar en la tabla docentes_imagenes
const { create, createImages } = require("./../models/docentes");
const { imgFile } = require("./../utils/fileHandler");

const createDocente = async (body, file) => {
  try {
    const { insertId: idDocente } = await create(body); // retorna el insertId
    const uid = imgFile(file); // retorna el name de la imagen
    const obj = { idDocente, uid };
    const { insertId: idFile } = await createImages(obj);
    return idFile;
  } catch (e) {
    console.error(e);
  }
};

module.exports = { createDocente };
