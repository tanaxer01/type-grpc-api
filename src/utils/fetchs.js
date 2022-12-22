
import axios from 'axios';

export const getUF = async () => {
    const url = 'https://mindicador.cl/api/uf';
    const resa = await axios.get(url)
    return resa
}
export const getDolar = () => {
    const url = 'https://mindicador.cl/api/dolar';
    const resa = axios.get(url)
    console.log(resa)
    return resa
}