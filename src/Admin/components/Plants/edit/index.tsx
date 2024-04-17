import { Box, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import * as yup from "yup"
import { CButton } from "@coreui/react"
import { ChangeEvent, useCallback, useEffect, useState } from "react"
import { ImageLabel } from "../../Products/style.products"
import { api } from "@/api"
import { toast } from "react-toastify"
import Router from "@/hooks/router"
import { Form, Field } from "react-final-form"

const PlantEdit = () => {

    const { navigate, paramId } = Router()
    const [categories, setCategories] = useState([])
    const [types, setTypes] = useState([])
    const [categoryId, setCategory] = useState('')
    const [typeId, setTypeId] = useState('')

    const [image, setImage] = useState<string | any>("")
    const [initialValues, setInitialValues] = useState(
        {
            name: "",
            waterPeriod: "",
            yieldDuration: "",
            temperature: "",
            lightRequirement: "",
            cultivationMethod: "",
        }
    );

    const handleImage = (e: any) => setImage(e?.target?.files[0])
    const handleSelector = (e: any) => setCategory(e.target.value)
    const handleType = (e: any) => setTypeId(e.target.value)

    const getPlantCategory = useCallback(() => {
        api.getData("plants-category").then((data) => setCategories(data.data))
            .catch(err => console.log(err))
    }, [])
    const getPlantTypes = useCallback(() => {
        api.getData("plants-types").then((data) => setTypes(data.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        getPlantTypes()
        getPlantCategory()
    }, [getPlantTypes, getPlantCategory])

    const getPlantType = useCallback(() => {
        if (paramId) {
            api.getData(`plant/${paramId}`).then((data) => {
                console.log(data)
                setInitialValues(
                    {
                        name: data.data.name,
                        waterPeriod: data.data.waterPeriod,
                        yieldDuration: data.data.yieldDuration,
                        temperature: data.data.temperature,
                        lightRequirement: data.data.lightRequirement,
                        cultivationMethod: data.data.cultivationMethod,
                    }
                )
                setCategory(data.data.plantsCategoryId)
                setTypeId(data.data.plantTypeId)
            }).catch(err => console.log(err))
        }
    }, [paramId])

    useEffect(() => {
        getPlantType()
    }, [getPlantType])


    const handleFormSubmit = (values: ChangeEvent<HTMLInputElement> | any) => {

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

        api.putData(`plant/${paramId}`, formData).then(data => {
            if (data.success) {
                toast.success("Plant Data Updated", {
                    theme: "dark"
                })
                navigate("/admin/plants")
            }
            else {
                toast.error(data.message, {
                    theme: "dark"
                })
            }
        }).catch(err => console.log(err))
    }

    return (
        <Box m="20px">
            <Form
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="box">
                            <Field name="name">
                                {({ input, meta }) => (
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Plant name"
                                        {...input}
                                        error={meta.touched && meta.error}
                                        helperText={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
                            <Field name="waterPeriod">
                                {({ input, meta }) => (
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="What is period of water"
                                        {...input}
                                        error={meta.touched && meta.error}
                                        helperText={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
                        </div>
                        <div className="box">
                        <Field name="yieldDuration">
                                {({ input, meta }) => (
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Enter yield duration"
                                        {...input}
                                        error={meta.touched && meta.error}
                                        helperText={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
                            <Field name="temperature">
                                {({ input, meta }) => (
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Enter temperature"
                                        {...input}
                                        error={meta.touched && meta.error}
                                        helperText={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
                        </div>
                        <div className="box">
                        <Field name="lightRequirement">
                                {({ input, meta }) => (
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Light Requirements"
                                        {...input}
                                        error={meta.touched && meta.error}
                                        helperText={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
                            <Field name="cultivationMethod">
                                {({ input, meta }) => (
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Cultivation method"
                                        {...input}
                                        error={meta.touched && meta.error}
                                        helperText={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
                        </div>
                        <div className="box">
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
                        </div>
                        <div className="box">
                            <ImageLabel htmlFor="image">
                                Choose an image
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="file"
                                    id="image"
                                    name="image"
                                    sx={{ display: 'none' }}
                                    onChange={handleImage}
                                />
                            </ImageLabel>
                            <div>
                                <p>{typeof image === "object" && image.name}</p>
                            </div>
                            <CButton color="primary" type="submit">Edit Plant</CButton>
                        </div>
                    </form>
                )}
            />
        </Box>
    )
}

export default PlantEdit
