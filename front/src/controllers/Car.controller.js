/* aquí van las funciones que deben ejecutarse parse
 conectarse al backend( servidor con puerto elegido) */

import httpClient from "./httpClients"; // importar biblioteca que genera un cliente para conectarse al servidor por el puerto elegido(3000 en este caso)

const END_POINT = "/api/cars";   // ruta de petición al servidor

const getAllCars = () => httpClient.get(END_POINT); // petición GET al servidor con la ruta elegida.

export {
    getAllCars
}
