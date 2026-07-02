import api from "../api/axios";

export const updateCustomerStatus = (id, payload) =>
    api.patch(`/customers/${id}`, payload);

export const assignCustomerBooth = (id, boothId) =>
    api.patch(`/customers/${id}`, {
        boothId,
    });

export const addActivity = (activity) =>
    api.post("/activities", activity);