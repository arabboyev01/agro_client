import { Box, TextField, FormControl, InputLabel, Select, MenuItem, TextareaAutosize } from "@mui/material"
import { CButton } from "@coreui/react"
import { ChangeEvent, useCallback, useEffect, useState } from "react"
import { ImageLabel } from "../../Products/style.products"
import { api } from "@/api"
import { toast } from "react-toastify"
import Router from "@/hooks/router"
import { Form, Field } from "react-final-form"
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

const PlantEdit = () => {

    const { l } = Language("plants")

    const { navigate, paramId } = Router()
    const [categories, setCategories] = useState([])
    const [types, setTypes] = useState([])
    const [categoryId, setCategory] = useState('')
    const [typeId, setTypeId] = useState('')

    const [image, setImage] = useState<string | any>("")
    const [initialValues, setInitialValues] = useState(
        {
            name_uz: "",
            name_ru: "",
            name_en: "",
            descibtion_uz: "",
            descibtion_ru: "",
            descibtion_en: "",
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
                        name_uz: data.data.name_uz,
                        name_ru: data.data.name_ru,
                        name_en: data.data.name_en,
                        descibtion_uz: data.data.describtion_uz,
                        descibtion_ru: data.data.describtion_ru,
                        descibtion_en: data.data.describtion_en
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
        formData.append("name_uz", values.name_uz)
        formData.append("name_ru", values.name_ru)
        formData.append("name_en", values.name_en)
        formData.append("describtion_uz", values.descibtion_uz)
        formData.append("describtion_ru", values.descibtion_ru)
        formData.append("describtion_en", values.descibtion_en)
        formData.append("image", image)
        formData.append("plantsCategoryId", categoryId)
        formData.append("plantTypeId", typeId)

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
                            <Field name="name_uz">
                                {({ input, meta }) => (
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Plant name uz"
                                        {...input}
                                        error={meta.touched && meta.error}
                                        helperText={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
                            <Field name="name_ru">
                                {({ input, meta }) => (
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Plant name ru"
                                        {...input}
                                        error={meta.touched && meta.error}
                                        helperText={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
                        </div>
                        <div className="box">
                            <Field name="name_en">
                                {({ input, meta }) => (
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Plant name en"
                                        {...input}
                                        error={meta.touched && meta.error}
                                        helperText={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
                        </div>
                        <div className="box">
                            <Field name="descibtion_uz">
                                {({ input, meta }) => (
                                    <TextField
                                        {...input}
                                        fullWidth
                                        multiline
                                        rows={5}
                                        variant="filled"
                                        label="Description uz"
                                        error={meta.touched && meta.error}
                                        helperText={meta.touched && meta.error}
                                        sx={{ width: '100%', gridColumn: "span 2" }}
                                    />
                                )}
                            </Field>
                            <Field name="descibtion_ru">
                                {({ input, meta }) => (
                                    <TextField
                                        {...input}
                                        fullWidth
                                        multiline
                                        rows={5}
                                        variant="filled"
                                        label="Description ru"
                                        error={meta.touched && meta.error}
                                        helperText={meta.touched && meta.error}
                                        sx={{ width: '100%', gridColumn: "span 2" }}
                                    />
                                )}
                            </Field>
                        </div>
                        <div className="box">
                            <Field name="descibtion_en">
                                {({ input, meta }) => (
                                    <TextField
                                        {...input}
                                        fullWidth
                                        multiline
                                        rows={5}
                                        variant="filled"
                                        label="Description en"
                                        error={meta.touched && meta.error}
                                        helperText={meta.touched && meta.error}
                                        sx={{ width: '100%', gridColumn: "span 2" }}
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
