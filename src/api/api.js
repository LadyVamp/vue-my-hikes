/**
 * Как добавить новый поход
 * 1. отредактировать hikes-MM-DD.json в assets
 * 2. открыть gist.github.com/LadyVamp и перезаписать secret gist с заменой названия
 * 3. заменить Raw
 */
import axios from 'axios';

const hikes =
  'https://gist.githubusercontent.com/LadyVamp/e5cba715273c26799cb3fad5ec656ba6/raw/13fb8e8d3b3ca881d970e9dd86929a6feaa863c3/hikes-2025-01-22.json';

export async function getAllHikes() {
  const response = await axios.get(hikes);
  return response;
}
