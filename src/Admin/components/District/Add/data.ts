import * as yup from "yup"
export type regionType = {
    name_uz: string
    name_ru: string
    name_en: string
    id: number
}

export const checkoutSchema = yup.object().shape({
    name_uz: yup.string().required("required"),
    name_ru: yup.string().required("required"),
    name_en: yup.string().required("required"),
})
export const initialValues = {
    name_uz: "",
    name_ru: "",
    name_en: "",
}