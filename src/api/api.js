/**
 * Как добавить новый поход
 * 1. отредактировать hikes-MM-DD.json в assets
 * 2. открыть gist.github.com/LadyVamp и перезаписать secret gist с заменой названия
 * 3. заменить Raw
 */
const axios = require('axios');

const hikes =
  'https://gist.githubusercontent.com/LadyVamp/e5cba715273c26799cb3fad5ec656ba6/raw/f5b91071933270e09bc0efcfda55e82db7e88113/hikes-2022-07-16.json';

export async function getAllHikes() {
  try {
    const response = await axios.get(hikes);
    return response;
  } catch (e) {
    console.error(e);
  }
}
