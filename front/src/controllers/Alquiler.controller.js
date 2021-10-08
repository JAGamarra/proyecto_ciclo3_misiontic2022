import httpClient from "./httpClient";

const END_POINT = "/api/alquiler";

const sendForm = (dataForm) => httpClient.post(END_POINT, dataForm);
