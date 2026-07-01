import api from "../api/axios";

export const checkInCustomer = (id, data) =>
    api.patch(`/customers/${id}`, data);

export const checkOutCustomer = (id, data) =>
    api.patch(`/customers/${id}`, data);

export const assignBooth = (id, data) =>
    api.patch(`/customers/${id}`, data);