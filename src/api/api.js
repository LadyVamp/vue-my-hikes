/**
 * Как добавить новый поход
 * 1. отредактировать hikes-MM-DD.json в assets
 * 2. открыть gist.github.com/LadyVamp и перезаписать secret gist с заменой названия
 * 3. заменить Raw
 */
const axios = require('axios');

const hikes =
  'https://gist.githubusercontent.com/LadyVamp/e5cba715273c26799cb3fad5ec656ba6/raw/80bce84b2a5b596b001fe563c0bdfe84fbd218e3/hikes-2023-07-31.json';

export async function getAllHikes() {
  const response = await axios.get(hikes);
  return response;
}
