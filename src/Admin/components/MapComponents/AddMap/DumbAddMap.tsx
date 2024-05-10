import { Box, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { Formik, useFormik } from "formik"
import * as yup from "yup"
import useMediaQuery from "@mui/material/useMediaQuery"
import { CButton, CSpinner } from "@coreui/react"
import { useState, useCallback, useEffect, Fragment } from "react"
import { Language } from '@/hooks/language'
import { api } from '@/api'
import { toast } from 'react-toastify'
import { MAIN_URL } from "@/config"
import Router from "@/hooks/router"
import MapUI from "../Map"
import { PointComponent } from "../Point"

type ProductType = {
    id: number
    name_uz: string
    name_ru: string
    name_en: string
}

const AddMap = () => {

    const isNonMobile = useMediaQuery("(min-width:600px)")

    const [category, setCategory] = useState<any>(null)
    const [loader, setLoader] = useState(false)
    const [data, setData] = useState([])
    const [inputValue, seInputValue] = useState("")

    const [formData, setFormData] = useState({});
    const [isValueVisible, setIsValueVisible] = useState(false)

    const [selectedProducts, setSelectedProducts] = useState<number[] | any>([]);

    const handleChange = (event: React.ChangeEvent<any> | any) => {
        setSelectedProducts(event.target.value as number[])
    }

    const [typeData, setTypeData] = useState([])


    const fetchData = useCallback(() => {
        fetch(`${MAIN_URL}/plants-category`).then(res => res.json())
            .then((data) => setData(data.data))
    }, [])

    const fetchType = useCallback(() => {
        fetch(`${MAIN_URL}/types-id/${category}`).then(res => res.json())
            .then((data) => setTypeData(data.data))
    }, [category])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    useEffect(() => {
        fetchType()
    }, [fetchType])

    const { l } = Language()
    const { navigate } = Router()

    console.log(typeData)


    const formik: any = useFormik({
        initialValues: {
            address: "",
            phone: "+998"
        },
        onSubmit: (values: any) => {
            setLoader(true)
            const payload = {
                address: values.address,
                phone: values.phone,
                productId: category
            }

            if (values.address && values.phone && category) {
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
        },
    });

    console.log(category)

    useEffect(() => {
        seInputValue(formik.values.address);
    }, [formik.values.address]);

    return (
        <Fragment>
            <MapUI height={47} MapContent={PointComponent} searchValue={inputValue} />
            <Box m="20px">
                <form onSubmit={formik.handleSubmit}>
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
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.address}
                            name="address"
                            error={!!formik.touched.address && !!formik.errors.address}
                            helperText={formik.touched.address && formik.errors.address}
                            sx={{ gridColumn: "span 4" }}
                        />

                        <FormControl fullWidth
                            sx={{ gridColumn: "span 2" }}
                        >
                            <InputLabel id="demo-simple-select-label">Choose a category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category}
                                label="Plant Categories"
                                onChange={(e) => setCategory(e.target.value)}
                                name="categoryId"
                            >
                                {data.map((item: ProductType) => {
                                    const name: string = item[`name_${l}` as keyof ProductType] as string
                                    return <MenuItem value={item.id} key={item.id}>{name}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
                            <InputLabel id="demo-multiple-select-label">Choose types</InputLabel>
                            <Select
                                labelId="demo-multiple-select-label"
                                id="demo-multiple-select"
                                multiple
                                value={selectedProducts}
                                onChange={handleChange}
                                renderValue={(selected) => {
                                    return (selected as number[]).map((productId) => {
                                        const selectedProduct: any = data.find((item: any) => item.id === productId);
                                        return selectedProduct ? selectedProduct.name : '';
                                    }).join(', ');
                                }}
                            >
                                {typeData?.map((item: ProductType) => {
                                    const name: string = item[`name_${l}` as keyof ProductType] as string;
                                    return <MenuItem key={item.id} value={item.id}>{name}</MenuItem>;
                                })}
                            </Select>
                        </FormControl>
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Soil Key"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.address}
                            name="soil_key"
                            error={!!formik.touched.address && !!formik.errors.address}
                            helperText={formik.touched.address && formik.errors.address}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Soil Value"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.address}
                            name="soil_value"
                            error={!!formik.touched.address && !!formik.errors.address}
                            helperText={formik.touched.address && formik.errors.address}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <CButton color="primary" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", width: "100px" }}>
                            Add
                        </CButton>
                    </Box>
                    <Box display="flex" justifyContent="end" mt="20px">
                        <CButton color="primary" type="submit" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            Create new Map
                            {loader && <CSpinner color="light" style={{ width: '15px', height: "15px" }} />}
                        </CButton>
                    </Box>
                </form>
            </Box>
        </Fragment>
    )
}

const checkoutSchema = yup.object().shape({
    address: yup.string().required("required"),
    phone: yup.string().required("required"),
})

export default AddMap;
