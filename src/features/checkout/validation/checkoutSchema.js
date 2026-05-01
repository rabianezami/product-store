
import * as yup from "yup"

export const checkoutSchema = yup.object({
    firstName: yup
      .string()
      .required("First name is required")
      .min(2, "Name is too short"),
    lastName: yup
      .string()
      .required("Last name is required"),
    address: yup
      .string()
      .required("Address is required")
      .min(10, "Please enter a more detailed address"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Phone must contain only digits")
      .min(10, "Phone number is invalid"),
}).required()