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

const ConsultantAdd = () => {

    const { navigate } = Router()

    const isNonMobile = useMediaQuery("(min-width:600px)")
    const [image, setImage] = useState<string | { name: string } | any>("")
    const [loader, setLoader] = useState(false)

    const handleFormSubmit = (values: any) => {
        setLoader(true)
        const formData = new FormData()
        formData.append('fullName', values.fullName)
        formData.append('dagree', values.dagree)
        formData.append('phone_number', values.phone_number)
        formData.append('image', image)
        formData.append('telegram_user', values.telegram_user)

        api.postWithToken("consultant", formData).then(data => {
            console.log(data)
            if (data.success) {
                toast.success("Consultant Created", {
                    theme: "dark"
                })
                navigate("/admin/consulation")
                setLoader(false)
            }
            else {
                toast.error(data.message, {
                    theme: "dark"
                })
                setLoader(false)
            }
        }).catch(() => setLoader(false))
    }

    const handleImage = (e: ChangeEvent<any>) => setImage(e?.target?.files[0])

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
                                label="Consultant Full Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.fullName}
                                name="fullName"
                                error={!!touched.fullName && !!errors.fullName}
                                helperText={touched.fullName && errors.fullName}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Enter consultant dagree"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.dagree}
                                name="dagree"
                                error={!!touched.dagree && !!errors.dagree}
                                helperText={touched.dagree && errors.dagree}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="number"
                                label="Enter consultant phone number"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.phone_number}
                                name="phone_number"
                                error={!!touched.phone_number && !!errors.phone_number}
                                helperText={touched.phone_number && errors.phone_number}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Enter consultant telegram username"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.telegram_user}
                                name="telegram_user"
                                error={!!touched.telegram_user && !!errors.telegram_user}
                                helperText={touched.telegram_user && errors.telegram_user}
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
                            <CButton color="primary" type="submit">
                                Create new Consultant
                                {loader && <CSpinner color="light" style={{ width: '15px', height: "15px" }} />}
                            </CButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
}

const checkoutSchema = yup.object().shape({
    fullName: yup.string().required("required"),
    dagree: yup.string().required("required"),
    phone_number: yup.string().required("required"),
    telegram_user: yup.string().required("required"),
})

const initialValues = {
    fullName: "",
    dagree: "",
    phone_number: "",
    telegram_user: ""
}
export default ConsultantAdd
