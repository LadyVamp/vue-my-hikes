/**
 * Как добавить новый поход
 * 1. отредактировать hikes-MM-DD.json в assets
 * 2. открыть gist.github.com/LadyVamp и перезаписать secret gist с заменой названия
 * 3. заменить Raw
 */
import axios from 'axios';

const hikes =
  'https://gist.githubusercontent.com/LadyVamp/e5cba715273c26799cb3fad5ec656ba6/raw/ac44928fed0fc3a13fc8cca99081db3fe7b741a2/hikes-2023-09-25.json';

export async function getAllHikes() {
  const response = await axios.get(hikes);
  return response;
}
