import { Box, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { Formik } from "formik"
import * as yup from "yup"
import useMediaQuery from "@mui/material/useMediaQuery"
import { CButton, CSpinner } from "@coreui/react"
import { ChangeEvent, useCallback, useEffect, useState } from "react"
import { api } from "@/api"
import { toast } from "react-toastify"
import Router from "@/hooks/router"
import { Language } from "@/hooks/language"

type regionType = {
    name_uz: string
    name_ru: string
    name_en: string
    id: number
}

const DistrictAdd = () => {

    const { navigate } = Router()
    const { l } = Language("plants")

    const isNonMobile = useMediaQuery("(min-width:600px)")

    const [loader, setLoader] = useState(false)
    const [regionId, setRegionId] = useState('')
    const [regions, setRegions] = useState([])

    const getPlantType = useCallback(() => {
        api.getData("region").then((data) => setRegions(data.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        getPlantType()
    }, [getPlantType])

    const handleSelector = (e: any) => setRegionId(e.target.value)

    const handleFormSubmit = (values: ChangeEvent<HTMLInputElement> | any) => {
        setLoader(true)
        const payload = {
            name_uz: values.name_uz,
            name_ru: values.name_ru,
            name_en: values.name_en,
            regionId: regionId
        }

        api.authPost("district", payload).then(data => {
            if (data.success) {
                toast.success("District created", {
                    theme: "dark"
                })
                navigate("/admin/districts")
                setLoader(false)
            }
            else {
                toast.error(data.message, {
                    theme: "dark"
                })
                setLoader(false)
            }
        }).catch(() => setLoader(false))
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
                                label="District name uz"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name_uz}
                                name="name_uz"
                                error={!!touched.name_uz && !!errors.name_uz}
                                helperText={touched.name_uz && errors.name_uz}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="District name ru"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name_ru}
                                name="name_ru"
                                error={!!touched.name_ru && !!errors.name_ru}
                                helperText={touched.name_ru && errors.name_ru}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="District name en"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name_en}
                                name="name_en"
                                error={!!touched.name_en && !!errors.name_en}
                                helperText={touched.name_en && errors.name_en}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <FormControl fullWidth
                                sx={{ gridColumn: "span 2" }}
                            >
                                <InputLabel id="demo-simple-select-label">Choose category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={regionId}
                                    label="Regions"
                                    onChange={handleSelector}
                                    name="regionId"
                                >
                                    {regions.map((item: regionType) => {
                                        const name: string = item[`name_${l}` as keyof regionType] as string
                                        return <MenuItem value={item.id} key={item.id}>{name}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                            
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <CButton color="primary" type="submit" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                Create new District
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
    name_uz: yup.string().required("required"),
    name_ru: yup.string().required("required"),
    name_en: yup.string().required("required"),
})
const initialValues = {
    name_uz: "",
    name_ru: "",
    name_en: "",
}
export default DistrictAdd
