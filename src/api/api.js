/**
 * Как добавить новый поход
 * 1. отредактировать hikes.json в assets
 * 2. открыть gist.github.com/LadyVamp и перезаписать secret gist с заменой названия
 * 3. заменить Raw
 */
import axios from 'axios';

const hikes =
  'https://gist.githubusercontent.com/LadyVamp/e5cba715273c26799cb3fad5ec656ba6/raw/755c2d8c4592e245167c6317829859b9216e2fb0/hikes-2026-06-29.json';

export async function getAllHikes() {
  const response = await axios.get(hikes);
  return response;
}
