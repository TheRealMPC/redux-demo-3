import axios from 'axios'
const BASE_URL = 'http://swapi.co/api/people/2'
export function getCharacter() {
   return axios.get(BASE_URL)
}