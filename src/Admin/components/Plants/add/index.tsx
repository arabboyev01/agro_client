import { Box, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material"
import { Formik, Field } from "formik"
import * as yup from "yup"
import useMediaQuery from "@mui/material/useMediaQuery"
import { CButton, CSpinner } from "@coreui/react"
import { ImageLabel } from "../../Products/style.products"
import { useState } from "react"
import { useCallback, useEffect } from "react"
import { api } from "@/api"
import { toast } from "react-toastify"
import Router from "@/hooks/router"
import { Language } from "@/hooks/language"

type PlantsType = {
    id: number
    name_uz: string
    name_ru: string
    name_en: string
    describtion_uz: string
    describtion_ru: string
    describtion_en: string
}
const PlantsAdd = () => {

    const { navigate } = Router()
    const { l } = Language()

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

        formData.append("name_uz", values.name_uz)
        formData.append("name_ru", values.name_ru)
        formData.append("name_en", values.name_en)
        formData.append("describtion_uz", values.descibtion_uz)
        formData.append("describtion_ru", values.descibtion_ru)
        formData.append("describtion_en", values.descibtion_en)
        formData.append("image", image)
        formData.append("plantsCategoryId", categoryId)
        formData.append("plantTypeId", typeId)

        api.postWithToken("plant", formData).then((data) => {
            if (data.success) {
                toast.success("Plant Type Created", {
                    theme: "dark"
                })
                navigate("/admin/plants")
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
                                sx={{ gridColumn: "span 1" }}
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
                                sx={{ gridColumn: "span 1" }}
                            />

                            <Field
                                fullWidth
                                multiline
                                rows={5}
                                name="descibtion_ru"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.descibtion_ru}
                                error={touched.descibtion_ru && !!errors.descibtion_ru}
                                helperText={touched.descibtion_ru && errors.descibtion_ru}
                                sx={{ gridColumn: "span 2" }}
                            >
                                {({ field }: any) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        multiline
                                        rows={4}
                                        variant="filled"
                                        label="Description ru"
                                        sx={{ width: '100%' }}
                                    />
                                )}
                            </Field>
                            <Field
                                fullWidth
                                multiline
                                rows={5}
                                name="descibtion_en"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.descibtion_en}
                                error={touched.descibtion_en && !!errors.descibtion_en}
                                helperText={touched.descibtion_en && errors.descibtion_en}
                                sx={{ gridColumn: "span 2" }}
                            >
                                {({ field }: any) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        multiline
                                        rows={4}
                                        variant="filled"
                                        label="Description en"
                                        sx={{ width: '100%' }}
                                    />
                                )}
                            </Field>
                            <Field
                                fullWidth
                                multiline
                                rows={5}
                                name="descibtion_uz"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.descibtion_uz}
                                error={touched.descibtion_uz && !!errors.descibtion_uz}
                                helperText={touched.descibtion_uz && errors.descibtion_uz}
                                sx={{ gridColumn: "span 2" }}
                            >
                                {({ field }: any) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        multiline
                                        rows={4}
                                        variant="filled"
                                        label="Description uz"
                                        sx={{ width: '100%' }}
                                    />
                                )}
                            </Field>
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
                                    {categories.map((item: PlantsType) => {
                                        const name: string = item[`name_${l}` as keyof PlantsType] as string
                                        return <MenuItem value={item.id} key={item.id}>{name}</MenuItem>
                                    })}
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
                                    {types.map((item: PlantsType) => {
                                        const name: string = item[`name_${l}` as keyof PlantsType] as string
                                        return <MenuItem value={item.id} key={item.id}>{name}</MenuItem>
                                    })}
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
    name_uz: yup.string().required("required"),
    name_ru: yup.string().required("required"),
    name_en: yup.string().required("required"),
    descibtion_uz: yup.string().required("required"),
    descibtion_ru: yup.string().required("required"),
    descibtion_en: yup.string().required("required"),
})

const initialValues = {
    name_uz: "",
    name_ru: "",
    name_en: "",
    descibtion_uz: "",
    descibtion_ru: "",
    descibtion_en: ""
}

export default PlantsAdd