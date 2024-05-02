import { Box, TextField } from "@mui/material"
import { CButton, CSpinner } from "@coreui/react"
import { ChangeEvent, useCallback, useEffect, useState } from "react"
import { ImageLabel } from "../../Products/style.products"
import { api } from "@/api"
import { toast } from "react-toastify"
import Router from "@/hooks/router"
import { Form, Field } from "react-final-form"

const PlantTypeEdit = () => {

    const { navigate, paramId } = Router()

    const [loader, setLoader] = useState(false)
    const [image, setImage] = useState<string | any>("")
    const [initialValues, setInitialValues] = useState({
        name_uz: '',
        name_ru: '',
        name_en: '',
        plantType: ''
    });

    const handleImage = (e: any) => setImage(e?.target?.files[0])

    const getPlantType = useCallback(() => {
        if (paramId) {
            api.getData(`plants-category/${paramId}`).then((data) => {
                console.log(data)
                setInitialValues({
                    name_uz: data.data.name_uz,
                    name_ru: data.data.name_ru,
                    name_en: data.data.name_en,
                    plantType: data.data.plantType,
                })
            })
                .catch(err => console.log(err))
        }
    }, [paramId])

    useEffect(() => {
        getPlantType()
    }, [getPlantType])


    const handleFormSubmit = (values: ChangeEvent<HTMLInputElement> | any) => {
        console.log(values)
        setLoader(true)
        const formData = new FormData()
        formData.append("name_uz", values.name_uz)
        formData.append("name_ru", values.name_ru)
        formData.append("name_en", values.name_en)
        formData.append("image", image)
        formData.append("plantType", values.plantType)

        api.putData(`plants-category/${paramId}`, formData).then(data => {
            if (data.success) {
                toast.success("Plant Type Updated", {
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
                            <Field name="plantType">
                                {({ input, meta }) => (
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="What is Plant type name"
                                        {...input}
                                        error={meta.touched && meta.error}
                                        helperText={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
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
                            <div> <p>{typeof image === "object" && image.name}</p> </div>
                            <CButton color="primary" type="submit" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                Create new Product
                                {loader && <CSpinner color="light" style={{ width: '15px', height: "15px" }} />}
                            </CButton>
                        </div>
                    </form>
                )}
            />
        </Box>
    )
}
export default PlantTypeEdit