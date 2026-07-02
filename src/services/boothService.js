import api from "../api/axios";

export const getBooths = () =>
    api.get("/booths");

export const getBooth = (id) =>
    api.get(`/booths/${id}`);

export const createBooth = (data) =>
    api.post("/booths", data);

export const updateBooth = (id, data) =>
    api.put(`/booths/${id}`, data);

export const deleteBooth = (id) =>
    api.delete(`/booths/${id}`);

