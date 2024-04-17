import { Box, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { CButton, CSpinner } from "@coreui/react"
import { ChangeEvent, useCallback, useEffect, useState } from "react"
import { ImageLabel } from "../../Products/style.products"
import { api } from "@/api"
import { toast } from "react-toastify"
import Router from "@/hooks/router"
import { Form, Field } from "react-final-form"

const ProductEdit = () => {

    const { navigate, paramId } = Router()
    const [types, setTypes] = useState([])
    const [typeId, setTypeId] = useState('')
    const [loader, setLoader] = useState(false)

    const [image, setImage] = useState<string | any>("")
    const [initialValues, setInitialValues] = useState(
        {
            name: "",
            price: "",
            plantTypeId: "",
        }
    );

    const handleImage = (e: any) => setImage(e?.target?.files[0])
    const handleType = (e: any) => setTypeId(e.target.value)

    const getPlantTypes = useCallback(() => {
        api.getData("plants-types").then((data) => setTypes(data.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        getPlantTypes()
    }, [getPlantTypes])

    const getPlantType = useCallback(() => {
        if (paramId) {
            api.getData(`products/${paramId}`).then((data) => {
                setInitialValues(
                    {
                        name: data.data.name,
                        price: data.data.price,
                        plantTypeId: data.data.plantTypeId,
                    }
                )
                setTypeId(data.data.plantTypeId)
            }).catch(err => console.log(err))
        }
    }, [paramId])

    useEffect(() => {
        getPlantType()
    }, [getPlantType])


    const handleFormSubmit = (values: ChangeEvent<HTMLInputElement> | any) => {
        setLoader(true)
        const formData = new FormData()

        formData.append("name", values.name)
        formData.append("price", values.price)
        formData.append("plantTypeId", typeId)
        formData.append("image", image)

        api.putData(`products/${paramId}`, formData).then((data) => {
            console.log(data)
            if (data.success) {
                toast.success("Product data updated", {
                    theme: "dark"
                })
                navigate("/admin/products")
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
                            <Field name="name">
                                {({ input, meta }) => (
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Product name"
                                        {...input}
                                        error={meta.touched && meta.error}
                                        helperText={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
                            <Field name="price">
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

export default ProductEdit
