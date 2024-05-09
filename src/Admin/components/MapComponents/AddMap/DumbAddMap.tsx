import { Box, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { Formik } from "formik"
import * as yup from "yup"
import useMediaQuery from "@mui/material/useMediaQuery"
import { CButton, CSpinner } from "@coreui/react"
import {  useState, useCallback, useEffect } from "react"
import { Language } from '@/hooks/language'
import { api } from '@/api'
import { toast } from 'react-toastify'
import { MAIN_URL } from "@/config"
import Router from "@/hooks/router"

type ProductType = {
    id: number
    name_uz: string
    name_ru: string
    name_en: string
}
const AddMap = () => {

    const isNonMobile = useMediaQuery("(min-width:600px)")

    const [product, setProduct] = useState<any>(null)
    const [loader, setLoader] = useState(false)
    const [data, setData] = useState([])

    const fetchData = useCallback(() => {
        fetch(`${MAIN_URL}/products`).then(res => res.json())
        .then((data) => setData(data.data))
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    const { l } = Language()
    const { navigate } = Router()

    const handleFormSubmit = (values: {address: string, phone: string }) => {
        setLoader(true)
        const payload = {
            address: values.address,
            phone: values.phone,
            productId: product
        }

        if (values.address && values.phone && product) {
            api.postData('orders', payload).then((data) => {
                if (data.success) {
                    toast.success("Your order has sent!", {
                        theme: "dark"
                    })
                    setLoader(false)
                    navigate("/admin/orders")
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
                                label="Enter the address"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address}
                                name="address"
                                error={!!touched.address && !!errors.address}
                                helperText={touched.address && errors.address}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Customer phone number"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.phone}
                                name="phone"
                                error={!!touched.phone && !!errors.phone}
                                helperText={touched.phone && errors.phone}
                                sx={{ gridColumn: "span 2" }}
                            />
                           <FormControl fullWidth
                                sx={{ gridColumn: "span 2" }}
                            >
                                <InputLabel id="demo-simple-select-label">Choose a products</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={product?.id}
                                    label="Plant Categories"
                                    onChange={(e) => setProduct(e.target.value)}
                                    name="categoryId"
                                >
                                    {data.map((item: ProductType) =>{
                                        const name: string = item[`name_${l}` as keyof ProductType] as string 
                                        return <MenuItem value={item.id} key={item.id}>{name}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <CButton color="primary" type="submit" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                Create new Order
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
    address: yup.string().required("required"),
    phone: yup.string().required("required"),
});
const initialValues = {
    address: "",
    phone: "+998"
}

export default AddMap;
