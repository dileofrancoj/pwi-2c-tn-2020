const fs = require("fs"); // Propio de nodejs
const { v4: uuid } = require("uuid");
const allowExtension = ["png", "jpeg"];
// mimetype

const deleteTemp = (file) => fs.unlink(file, (e) => console.log(e));
// mimetype
const saveFile = (
  { mimetype, size, path },
  allowE,
  destFolder = `./public/images`
) => {
  try {
    // mimetype="video/mp4"
    const [type, extension] = mimetype.split("/");
    if (!allowE.includes(extension)) throw "Formato incorrecto";
    const uid = uuid(); // creando un id unico :D
    const fileName = `${uid}.${extension}`;
    const fileNameOut = `${destFolder}/${uid}.${extension}`;

    fs.createReadStream(path).pipe(fs.createWriteStream(fileNameOut));
    deleteTemp(path);
    return fileName;
  } catch (e) {
    deleteTemp(path);
    console.error(e);
  }
};

const imgFile = (file) => saveFile(file, allowExtension);

module.exports = { imgFile };
