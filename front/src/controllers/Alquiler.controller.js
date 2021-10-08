import httpClient from "./httpClients";

const END_POINT = "/api/alquiler";

const sendForm = (dataForm) => httpClient.post(END_POINT, dataForm);

module.exports = sendForm;
