import { Box, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { CButton, CSpinner } from "@coreui/react"
import { ChangeEvent, useCallback, useEffect, useState } from "react"
import { ImageLabel } from "../../Products/style.products"
import { api } from "@/api"
import { toast } from "react-toastify"
import Router from "@/hooks/router"
import { Form, Field } from "react-final-form"

const ConsultantEdit = () => {

    const { navigate, paramId } = Router()
    const [types, setTypes] = useState([])
    const [loader, setLoader] = useState(false)

    const [image, setImage] = useState<string | any>("")
    const [initialValues, setInitialValues] = useState(
        {
            fullName: "",
            dagree: "",
            phone_number: "",
        }
    );

    const handleImage = (e: any) => setImage(e?.target?.files[0])

    const getPlantTypes = useCallback(() => {
        api.getData("plants-types").then((data) => setTypes(data.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        getPlantTypes()
    }, [getPlantTypes])

    const getPlantType = useCallback(() => {
        if (paramId) {
            api.getData(`consultant/${paramId}`).then((data) => {
                setInitialValues(
                    {
                        fullName: data.data.fullName,
                        dagree: data.data.dagree,
                        phone_number: data.data.phone_number,
                        telegram_user: data.data.telegram_user,
                    }
                )
            }).catch(err => console.log(err))
        }
    }, [paramId])

    useEffect(() => {
        getPlantType()
    }, [getPlantType])


    const handleFormSubmit = (values: ChangeEvent<HTMLInputElement> | any) => {
        setLoader(true)
        const formData = new FormData()

        formData.append("fullName", values.fullName)
        formData.append("dagree", values.dagree)
        formData.append("phone_number", values.phone_number)
        formData.append("image", image)

        api.putData(`consultant/${paramId}`, formData).then((data) => {
            console.log(data)
            if (data.success) {
                toast.success("Consultant data updated", {
                    theme: "dark"
                })
                navigate("/admin/consulation")
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
            <Form
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="box">
                            <Field name="fullName">
                                {({ input, meta }) => (
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Consultant Full name"
                                        {...input}
                                        error={meta.touched && meta.error}
                                        helperText={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
                            <Field name="dagree">
                                {({ input, meta }) => (
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Consultant dagree"
                                        {...input}
                                        error={meta.touched && meta.error}
                                        helperText={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
                        </div>

                        <div className="box">
                            <Field name="phone_number">
                                {({ input, meta }) => (
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Consultant phone number"
                                        {...input}
                                        error={meta.touched && meta.error}
                                        helperText={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
                            <Field name="telegram_user">
                                {({ input, meta }) => (
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Consultant phone number"
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
                        </div>
                       
                        <div className="box">
                            <CButton color="primary" type="submit">
                                Edit Product
                                {loader && <CSpinner color="light" style={{ width: '15px', height: "15px" }} />}
                            </CButton>
                        </div>
                    </form>
                )}
            />
        </Box>
    )
}
export default ConsultantEdit
