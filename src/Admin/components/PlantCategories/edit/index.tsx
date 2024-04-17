import { Box, TextField } from "@mui/material"
import * as yup from "yup"
import { CButton } from "@coreui/react"
import { ChangeEvent, useCallback, useEffect, useState } from "react"
import { ImageLabel } from "../../Products/style.products"
import { api } from "@/api"
import { toast } from "react-toastify"
import Router from "@/hooks/router"
import { Form, Field } from "react-final-form"

const PlantTypeEdit = () => {

    const { navigate, paramId } = Router()

    const [image, setImage] = useState<string | any>("")
    const [initialValues, setInitialValues] = useState({ name: '', plantType: '' });

    const handleImage = (e: any) => setImage(e?.target?.files[0])

    const getPlantType = useCallback(() => {
        if (paramId) {
            api.getData(`plants-category/${paramId}`).then((data) => {
                setInitialValues({
                    name: data.data.name,
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
        const formData = new FormData()
        formData.append("name", values.name)
        formData.append("image", image)
        formData.append("plantType", values.plantType)

        api.putData(`plants-category/${paramId}`, formData).then(data => {
            if (data.success) {
                toast.success("Plant Type Updated", {
                    theme: "dark"
                })
                navigate("/admin/plants-type")
            }
            else {
                toast.error(data.message, {
                    theme: "dark"
                })
            }
        }).catch(err => console.log(err))
    }

    const checkoutSchema = () => yup.object().shape({
        name: yup.string().required("required"),
        plantType: yup.string().required("required"),
    })

    return (
        <Box m="20px">
            <Form
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
                // validate={checkoutSchema}
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
                            <div>
                                <p>{typeof image === "object" && image.name}</p>
                            </div>
                            <CButton color="primary" type="submit">Create new Product</CButton>
                        </div>
                    </form>
                )}
            />
        </Box>
    )
}

export default PlantTypeEdit
