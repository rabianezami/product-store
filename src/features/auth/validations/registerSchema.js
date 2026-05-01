import * as yup from "yup" 

export const registerSchema = yup.object({
    fullName: yup
     .string()
     .trim()
     .required("Full name is required")
     .min(3, "Name must be at least 3 charachters"),

    email: yup
     .string()
     .trim()
     .required("Email is required")
     .email("Please enter a valid email."),

    password: yup
     .string()
     .trim()
     .required()
     .min(8, "Password must be at least 8 charachters.")
     .matches(/\d/, "Password must include at least one number" ),

    confirmPassword: yup
     .string()
     .trim()
     .required("Confirm password is required.")
     .oneOf([yup.ref("password")], "Password don not match."),
    
    terms: yup
     .boolean()
     .oneOf([true], "You must accept the terms and conditions"),

})

