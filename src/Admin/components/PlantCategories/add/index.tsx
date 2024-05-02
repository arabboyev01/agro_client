import { Box, TextField } from "@mui/material"
import { Formik } from "formik"
import * as yup from "yup"
import useMediaQuery from "@mui/material/useMediaQuery"
import { CButton, CSpinner } from "@coreui/react"
import { ChangeEvent, useState } from "react"
import { ImageLabel } from "../../Products/style.products"
import { api } from "@/api"
import { toast } from "react-toastify"
import Router from "@/hooks/router"

const PlantCategoryAdd = () => {

    const { navigate } = Router()

    const isNonMobile = useMediaQuery("(min-width:600px)")
    const [image, setImage] = useState<string | any>("")
    const [loader, setLoader] = useState(false)

    const handleImage = (e: any) => setImage(e?.target?.files[0])

    const handleFormSubmit = (values: ChangeEvent<HTMLInputElement> | any) => {
        setLoader(true)
        const formData = new FormData()
        formData.append("name_uz", values.name_uz)
        formData.append("name_ru", values.name_ru)
        formData.append("name_en", values.name_en)
        formData.append("image", image)
        formData.append("plantType", values.plantType)

        api.postWithToken("plants-category", formData).then(data => {
            if (data.success) {
                toast.success("Plant Category Created", {
                    theme: "dark"
                })
                navigate("/admin/plants-category")
                setLoader(false)
            }
            else {
                toast.error(data.message, {
                    theme: "dark"
                })
                setLoader(false)
            }
        })
            .catch(() => setLoader(false))
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
                                label="Plant name uz"
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
                                label="Plant name ru"
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
                                label="Plant name en"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name_en}
                                name="name_en"
                                error={!!touched.name_en && !!errors.name_en}
                                helperText={touched.name_en && errors.name_en}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="What is Plant type name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.plantType}
                                name="plantType"
                                error={!!touched.plantType && !!errors.plantType}
                                helperText={touched.plantType && errors.plantType}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <ImageLabel htmlFor="image">
                                Choose an image
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="file"
                                    id="image"
                                    onBlur={handleBlur}
                                    name="image"
                                    sx={{ display: 'none' }}
                                    onChange={handleImage}
                                />
                            </ImageLabel>
                            <div>
                                <p>{typeof image === "object" && image.name}</p>
                            </div>
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <CButton color="primary" type="submit" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                Create new Product
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
    plantType: yup.string().required("required"),
})
const initialValues = {
    name_uz: "",
    name_ru: "",
    name_en: "",
    plantType: "",
}

export default PlantCategoryAdd
