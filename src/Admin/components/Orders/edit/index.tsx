import { Box, TextField } from "@mui/material"
import { Formik } from "formik"
import * as yup from "yup"
import useMediaQuery from "@mui/material/useMediaQuery"
import { CButton } from "@coreui/react"
import { ChangeEvent, useState } from "react"
import { ImageLabel } from "../../Products/style.products"

const OrderEdit = () => {

    const isNonMobile = useMediaQuery("(min-width:600px)")
    const [image, setImage] = useState<any>("")

    const handleFormSubmit = (values: any) => {
        console.log(values);
    }

    const handleImage = (e: any) => setImage(e?.target?.files[0])

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
                                label="Product name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name}
                                name="name"
                                error={!!touched.name && !!errors.name}
                                helperText={touched.name && errors.name}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="What is period of water"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.waterPeriod}
                                name="waterPeriod"
                                error={!!touched.waterPeriod && !!errors.waterPeriod}
                                helperText={touched.waterPeriod && errors.waterPeriod}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Enter yield duration"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.yieldDuration}
                                name="yieldDuration"
                                error={!!touched.yieldDuration && !!errors.yieldDuration}
                                helperText={touched.yieldDuration && errors.yieldDuration}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Enter temperature"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.temperature}
                                name="temperature"
                                error={!!touched.temperature && !!errors.temperature}
                                helperText={touched.temperature && errors.temperature}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Light Requirements"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lightRequirement}
                                name="lightRequirement"
                                error={!!touched.lightRequirement && !!errors.lightRequirement}
                                helperText={touched.lightRequirement && errors.lightRequirement}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Cultivation method"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.cultivationMethod}
                                name="cultivationMethod"
                                error={!!touched.cultivationMethod && !!errors.cultivationMethod}
                                helperText={touched.cultivationMethod && errors.cultivationMethod}
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
                                    value={values.cultivationMethod}
                                    name="image"
                                    sx={{ display: 'none' }}
                                    onChange={handleImage}
                                />
                            </ImageLabel>
                            <div>
                            <p>{image.name}</p>
                            </div>
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <CButton color="primary">Create new Product</CButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};

const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
    name: yup.string().required("required"),
    waterPeriod: yup.string().required("required"),
    yieldDuration: yup.string().required("required"),
    temperature: yup
        .string()
        // .matches(phoneRegExp, "Phone number is not valid")
        .required("required"),
    lightRequirement: yup.string().required("required"),
    cultivationMethod: yup.string().required("required"),
});
const initialValues = {
    name: "",
    waterPeriod: "",
    yieldDuration: "",
    temperature: "",
    lightRequirement: "",
    cultivationMethod: "",
};

export default OrderEdit;
