import { Box, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material"
import { Formik } from "formik"
import * as yup from "yup"
import useMediaQuery from "@mui/material/useMediaQuery"
import { CButton, CSpinner } from "@coreui/react"
import { ImageLabel } from "../../Products/style.products"
import { ChangeEvent, useState } from "react"
import { useCallback, useEffect } from "react"
import { api } from "@/api"
import { toast } from "react-toastify"
import Router from "@/hooks/router"

const PlantsAdd = () => {

    const { navigate } = Router()

    const isNonMobile = useMediaQuery("(min-width:600px)")
    const [image, setImage] = useState<any | object>("")
    const [loader, setLoader] = useState(false)

    const [categories, setCategories] = useState([])
    const [types, setTypes] = useState([])
    const [categoryId, setCategory] = useState('')
    const [typeId, setTypeId] = useState('')

    const handleImage = (e: any) => setImage(e?.target?.files[0])
    const handleSelector = (e: SelectChangeEvent<string>) => setCategory(e.target.value)
    const handleType = (e: SelectChangeEvent<string>) => setTypeId(e.target.value)

    const getPlantCategories = useCallback(() => {
        api.getData("plants-category").then((data) => setCategories(data.data))
            .catch(err => console.log(err))
    }, [])
    const getPlantType = useCallback(() => {
        api.getData("plants-types").then((data) => setTypes(data.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        getPlantType()
        getPlantCategories()
    }, [getPlantType, getPlantCategories])

    const handleFormSubmit = (values: any) => {
        setLoader(true)
        const formData = new FormData()

        formData.append("name", values.name)
        formData.append("image", image)
        formData.append("plantsCategoryId", categoryId)
        formData.append("plantTypeId", typeId)
        formData.append("waterPeriod", values.waterPeriod)
        formData.append("yieldDuration", values.yieldDuration)
        formData.append("temperature", values.temperature)
        formData.append("lightRequirement", values.lightRequirement)
        formData.append("cultivationMethod", values.cultivationMethod)

        api.postWithToken("plant", formData).then((data) => {
            if (data.success) {
                toast.success("Plant Type Created", {
                    theme: "dark"
                })
                navigate("/admin/plants")
                setLoader(false)
            }else {
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
                                label="Plant name"
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
                            <FormControl 
                            fullWidth
                            sx={{ gridColumn: "span 2" }}
                            >
                                <InputLabel id="demo-simple-select-label">Plant Categories</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={categoryId}
                                    label="Plant Categories"
                                    onChange={handleSelector}
                                >
                                    {categories.map(({ id, name }) =>
                                        <MenuItem value={id} key={id}>{name}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                            <FormControl fullWidth
                                sx={{ gridColumn: "span 2" }}
                            >
                                <InputLabel id="demo-simple-select-label">Plant Types</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={typeId}
                                    label="Plant Types"
                                    onChange={handleType}
                                >
                                    {types.map(({ id, name }) =>
                                        <MenuItem value={id} key={id}>{name}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
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
                            <div><p>{image.name}</p></div>
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <CButton color="primary" type="submit" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                Create new Plant
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
    name: yup.string().required("required"),
    waterPeriod: yup.string().required("required"),
    yieldDuration: yup.string().required("required"),
    temperature: yup.string().required("required"),
    lightRequirement: yup.string().required("required"),
    cultivationMethod: yup.string().required("required"),
})

const initialValues = {
    name: "",
    waterPeriod: "",
    yieldDuration: "",
    temperature: "",
    lightRequirement: "",
    cultivationMethod: "",
}

export default PlantsAdd