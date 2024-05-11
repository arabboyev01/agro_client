import { Box, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material"
import { Formik } from "formik"
import * as yup from "yup"
import useMediaQuery from "@mui/material/useMediaQuery"
import { CButton, CSpinner } from "@coreui/react"
import { ImageLabel } from "../Products/style.products"
import { ChangeEvent, useState, useCallback, useEffect } from "react"
import { api } from "@/api"
import Router from "@/hooks/router"
import { toast } from "react-toastify"
import { Language } from "@/hooks/language"

type PlantType = {
    id: number
    name_uz: string
    name_ru: string
    name_en: string
}

const RegionsAddComponent = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)")
    const [loader, setLoader] = useState(false)

    const { navigate } = Router()

    const handleFormSubmit = (values: any) => {
        setLoader(true)
        const formData = new FormData()
        formData.append("name_uz", values.name_uz)
        formData.append("name_ru", values.name_ru)
        formData.append("name_en", values.name_uz)

        api.authPost('regions', formData).then((data) => {
            if (data.success) {
                toast.success("Region Created", {
                    theme: "dark"
                })
                navigate("/admin/products")
                setLoader(false)
            } else {
                toast.error(data.message, {
                    theme: "dark"
                })
                setLoader(false)
            }
        }).catch((err: any) => {
            toast.error(err.message, {
                theme: "dark"
            })
            setLoader(false)
        })
    }

    return (
        <Box m="20px">
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Region name uz"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name_uz}
                                name="name_uz"
                                error={!!touched.name_uz && !!errors.name_uz}
                                helperText={touched.name_uz && errors.name_uz}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Region name ru"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name_ru}
                                name="name_ru"
                                error={!!touched.name_ru && !!errors.name_ru}
                                helperText={touched.name_ru && errors.name_ru}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Region name en"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name_en}
                                name="name_en"
                                error={!!touched.name_en && !!errors.name_en}
                                helperText={touched.name_en && errors.name_en}
                                sx={{ gridColumn: "span 2" }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <CButton color="primary" type="submit">
                                Add Region
                                {loader && <CSpinner color="light" style={{ width: '15px', height: "15px" }} />}
                            </CButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

const checkoutSchema = yup.object().shape({
    name_uz: yup.string().required("required"),
    name_ru: yup.string().required("required"),
    name_en: yup.string().required("required"),
})
const initialValues = {
    name_uz: "",
    name_ru: "",
    name_en: "",
}

export default RegionsAddComponent
