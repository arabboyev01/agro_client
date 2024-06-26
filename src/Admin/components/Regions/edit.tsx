import { Box, TextField } from "@mui/material"
import { CButton } from "@coreui/react"
import { ChangeEvent, useCallback, useEffect, useState } from "react"
import { api } from "@/api"
import { toast } from "react-toastify"
import Router from "@/hooks/router"
import { Form, Field } from "react-final-form"

const RegionsEditComponent = () => {

    const { navigate, paramId } = Router()

    const [initialValues, setInitialValues] = useState(
        {
            name_uz: "",
            name_ru: "",
            name_en: "",
        }
    );

    const getPlantType = useCallback(() => {
        if (paramId) {
            api.getData(`region/${paramId}`).then((data) => {

                setInitialValues(
                    {
                        name_uz: data.data.name_uz,
                        name_ru: data.data.name_ru,
                        name_en: data.data.name_en
                    }
                )
            }).catch(err => console.log(err))
        }
    }, [paramId])

    useEffect(() => {
        getPlantType()
    }, [getPlantType])


    const handleFormSubmit = (values: ChangeEvent<HTMLInputElement> | any) => {

        const payload = {
            name_uz: values.name_uz,
            name_ru: values.name_ru,
            name_en: values.name_en,
        }

        api.authPut(`region/${paramId}`, payload).then(data => {
            if (data.success) {
                toast.success("Region Updated", {
                    theme: "dark"
                })
                navigate("/admin/regions")
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
                            <CButton color="primary" type="submit">Edit Region</CButton>
                        </div>
                    </form>
                )}
            />
        </Box>
    )
}

export default RegionsEditComponent
