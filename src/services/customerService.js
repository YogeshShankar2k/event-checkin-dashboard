import api from "../api/axios";

export const getCustomers = () => api.get("/customers");

export const getCustomer = (id) => api.get(`/customers/${id}`);

export const createCustomer = (data) => api.post("/customers", data);

export const updateCustomer = (id, data) =>
    api.put(`/customers/${id}`, data);

export const deleteCustomer = (id) =>
    api.delete(`/customers/${id}`);

export const updateCustomerStatus = (id, payload) =>
    api.patch(`/customers/${id}`, payload);

export const assignBooth = (id, boothId) =>
    api.patch(`/customers/${id}`, {
        boothId,
    });