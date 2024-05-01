import { Box, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { CButton, CSpinner } from "@coreui/react"
import { ChangeEvent, useCallback, useEffect, useState } from "react"
import { api } from "@/api"
import { toast } from "react-toastify"
import Router from "@/hooks/router"
import { Form, Field } from "react-final-form"
import { Language } from '@/hooks/language'

type ProductType = {
    id: number
    name_uz: string
    name_ru: string
    name_en: string
}

const OrdersEdit = () => {

    const { navigate, paramId } = Router()
    const [products, setProducts] = useState([])
    const [productId, setProductId] = useState('')
    const [loader, setLoader] = useState(false)


    const { l } = Language()

    const [initialValues, setInitialValues] = useState(
        {
            customerName: "",
            phone: "",
        }
    )

    const handleSelector = (e: any) => setProductId(e.target.value)

    const getProducts = useCallback(() => {
        api.getData("products").then((data) => setProducts(data.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        getProducts()
    }, [getProducts])

    const getPlantType = useCallback(() => {
        if (paramId) {
            api.getData(`orders/${paramId}`).then((data) => {
                console.log(data)
                setInitialValues(
                    {
                        customerName: data.data.customerName,
                        phone: data.data.customerPhone,
                    }
                )
                setProductId(data.data.productId)
            }).catch(err => console.log(err))
        }
    }, [paramId])

    useEffect(() => {
        getPlantType()
    }, [getPlantType])


    const handleFormSubmit = (values: ChangeEvent<HTMLInputElement> | any) => {
        setLoader(true)
        const formData = new FormData()
        formData.append("customerName", values.customerName)
        formData.append("phone", values.phone)
        formData.append("productId", productId)

        api.putData(`orders/${paramId}`, formData).then(data => {
            if (data.success) {
                toast.success("Orders Updated", {
                    theme: "dark"
                })
                navigate("/admin/orders")
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
                            <Field name="customerName">
                                {({ input, meta }) => (
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Customer name"
                                        {...input}
                                        error={meta.touched && meta.error}
                                        helperText={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
                            <Field name="phone">
                                {({ input, meta }) => (
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Customer phone number"
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
                                    value={productId}
                                    label="Plant Types"
                                    onChange={handleSelector}
                                >
                                    {products.map((item: ProductType) => {
                                        const name: string = item[`name_${l}` as keyof ProductType] as string
                                        return <MenuItem value={item.id} key={item.id}>{name}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                        </div>
                         
                        <CButton color="primary" type="submit" style={{ display: "flex", alignItems: "center", gap: "10px"}}>
                                Edit Order
                                {loader && <CSpinner color="light" style={{ width: '15px', height: "15px" }} />}
                            </CButton>
                    </form>
                )}
            />
        </Box>
    )
}

export default OrdersEdit
