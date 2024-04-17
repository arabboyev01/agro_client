import { Box, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material"
import { Formik } from "formik"
import * as yup from "yup"
import useMediaQuery from "@mui/material/useMediaQuery"
import { CButton, CSpinner } from "@coreui/react"
import { ImageLabel } from "../style.products"
import { ChangeEvent, useState, useCallback, useEffect } from "react"
import { api } from "@/api"
import Router from "@/hooks/router"
import { toast } from "react-toastify"

const ProductsAdd = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)")
    const [image, setImage] = useState<any>("")
    const [types, setTypes] = useState([])
    const [typeId, setTypeId] = useState('')
    const [loader, setLoader] = useState(false)

    const { navigate } = Router()

    const handleFormSubmit = (values: any) => {
        setLoader(true)
        const formData = new FormData()
        formData.append("name", values.name)
        formData.append("price", values.price)
        formData.append("plantTypeId", typeId)
        formData.append("image", image)

        api.postWithToken('products', formData).then((data) => {
            if (data.success) {
                toast.success("Products Created", {
                    theme: "dark"
                })
                navigate("/admin/products")
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

    const handleImage = (e: ChangeEvent<any>) => {
        setImage(e?.target?.files[0])
    }
    const handleType = (e: SelectChangeEvent<string>) => setTypeId(e.target.value)

    const getPlantType = useCallback(() => {
        api.getData("plants-types").then((data) => setTypes(data.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        getPlantType()
    }, [getPlantType])

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
                                type="number"
                                label="Enter the price"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.price}
                                name="price"
                                error={!!touched.price && !!errors.price}
                                helperText={touched.price && errors.price}
                                sx={{ gridColumn: "span 2" }}
                            />
                         
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
                            <div>
                                <p>{image.name}</p>
                            </div>
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <CButton color="primary" type="submit">
                                Create new Product
                                {loader && <CSpinner color="light" style={{ width: '15px', height: "15px" }} />}
                            </CButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

const checkoutSchema = yup.object().shape({
    name: yup.string().required("required"),
    price: yup.number().required("required"),
})
const initialValues = {
    name: "",
    price: ""
}

export default ProductsAdd
