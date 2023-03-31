const fs = require('fs').promises;
const path = require('path');

const MOVIES_PATH = path.resolve(__dirname, '../movies.json');

async function readData() {
  try {
    const data = await fs.readFile(MOVIES_PATH);
    const response = JSON.parse(data);
    return response;
  } catch (err) {
    throw new Error(`Erro na leitura: ${err}`);
  }
}

module.exports = {
  readData,
};
