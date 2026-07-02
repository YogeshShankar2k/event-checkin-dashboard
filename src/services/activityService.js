import api from "../api/axios";

export const addActivity = (payload) =>
    api.post("/activities", payload);

export const getActivities = () =>
    api.get("/activities");