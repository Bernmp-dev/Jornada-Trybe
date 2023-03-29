const fs = require('fs').promises;
const readline = require('readline-sync');
const { readSimpsData, overWrite, createFile } = require('./Utils/fsUtils');

const SIMP_DATA = '../../simpsons-data.json';
const FAM_DATA = '../../simpsonFamily.json';

const showSimps = async () => {
  const data = await readSimpsData(SIMP_DATA);
  data.forEach(({ id, name }) => {
    console.log(`${id} - ${name}`);
  });
};

const showSimpById = async (id) => {
  const data = await readSimpsData(SIMP_DATA);
  const selectedSimp = data.find((simp) => +simp.id === id);

  if (!selectedSimp) {
    throw new Error('id não encontrado');
  }
  console.log(selectedSimp);
};

const removeSimp = async () => {
  const data = await readSimpsData(SIMP_DATA);
  const rmSimp = data.filter((simp) => +simp.id !== 6 && +simp.id !== 10);
  overWrite(SIMP_DATA, rmSimp);
  console.log(data);
};

const createSimpFam = async () => {
  const data = await readSimpsData(SIMP_DATA);
  const filteredId = data.filter(({ id }) => +id <= 4);
  createFile('simpsonFamily.json', filteredId);
};

const addSimp = async () => {
  const famData = await readSimpsData(FAM_DATA);
  const allData = await readSimpsData(SIMP_DATA);

  const nelsonMuntz = allData.find(({ name }) => name.includes('Nelson'));

  overWrite(FAM_DATA, [...famData, nelsonMuntz]);
};

const replaceByName = async (addSim, rmSimp) => {
  const famData = await readSimpsData(FAM_DATA);
  const allData = await readSimpsData(SIMP_DATA);

  const newSimp = allData.find(({ name }) => name.includes(addSim));
  const newFam = famData.filter(({ name }) => !name.includes(rmSimp));

  overWrite(FAM_DATA, [...newFam, newSimp]);
};

async function main() {
  await replaceByName('Maggie', 'Nelson');
}

main();
