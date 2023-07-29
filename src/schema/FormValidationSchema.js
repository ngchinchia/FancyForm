import * as Yup from "yup";

const ethRegex = /^0x[a-fA-F0-9]{40}$/gm;

export const FormSchema = Yup.object().shape({
  ethAddress: Yup.string()
    .min(40, "Eth address must be at least 40 characters in length!")
    .max(42, "Address shall not exceed 42 characters in length!")
    .matches(ethRegex, "Invalid address!")
    .required("Required"),
  inputAmount: Yup.number()
    .positive("Amount must not be negative!")
    .required("Required"),
  otpAuthentication: Yup.string()
    .matches(/^\d{6}$/, "OTP must be 6 digits!")
    .required("Required"),
});
