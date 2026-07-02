import * as yup from "yup";

export const customerSchema = yup.object({
    name: yup
        .string()
        .required("Name is required")
        .min(3, "Minimum 3 characters"),

    email: yup
        .string()
        .email("Invalid email")
        .required("Email is required"),

    phone: yup
        .string()
        .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
        .required("Phone is required"),

    company: yup
        .string()
        .required("Company is required"),

    ticketType: yup
        .string()
        .required("Select Ticket Type"),

    status: yup
        .string()
        .required("Select Status")
});

export const boothSchema = yup.object({

    name: yup
        .string()
        .required("Booth Name is required"),

    capacity: yup
        .number()
        .typeError("Capacity must be a number")
        .required("Capacity is required")
        .positive()

});