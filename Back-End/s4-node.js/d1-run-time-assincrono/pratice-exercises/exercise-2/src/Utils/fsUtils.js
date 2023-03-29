const fs = require('fs').promises;
const path = require('path');

async function readSimpsData(pathName) {
  try {
    const data = await fs.readFile(path
      .resolve(__dirname, pathName));
    const simps = JSON.parse(data);

    return simps;
  } catch (err) {
    return console.log(`Erro na leitura: ${err}`);
  }
}

async function overWrite(pathname, value) {
  await fs.writeFile(path
    .resolve(__dirname, pathname), JSON.stringify(value));
}

async function createFile(pathName, value) {
  await fs.writeFile(pathName, JSON.stringify(value));
}

module.exports = {
  readSimpsData,
  overWrite,
  createFile,
};
