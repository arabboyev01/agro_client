import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { CButton } from "@coreui/react"
import { ChangeEvent, useCallback, useEffect, useState } from "react"
import { api } from "@/api"
import { toast } from "react-toastify"
import Router from "@/hooks/router"
import { Form, Field } from "react-final-form"
import { Language } from "@/hooks/language"

type districtType = {
    id: number
    name_uz: string,
    name_ru: string,
    name_en: string,
    regionId: string,
}

const DistrictEditComponent = () => {

    const { l } = Language("plants")
    const { navigate, paramId } = Router()
    const [regions, setRegions] = useState([])
    const [regionId, setRegionId] = useState(null)

    const [initialValues, setInitialValues] = useState(
        {
            name_uz: "",
            name_ru: "",
            name_en: "",
            regionId: "",
        }
    );

    const getPlantType = useCallback(() => {
        if (paramId) {
            api.getData(`district/${paramId}`).then((data) => {
                setInitialValues(
                    {
                        name_uz: data.data.name_uz,
                        name_ru: data.data.name_ru,
                        name_en: data.data.name_en,
                        regionId: data.data.regionId
                    }
                )
            }).catch(err => console.log(err))
        }
    }, [paramId])

    useEffect(() => {
        getPlantType()
    }, [getPlantType])

    const getRegions = useCallback(() => {
        api.getData('region').then((data) => setRegions(data.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        getRegions()
    }, [getRegions])


    const handleFormSubmit = (values: ChangeEvent<HTMLInputElement> | any) => {

        const payload = {
            name_uz: values.name_uz,
            name_ru: values.name_ru,
            name_en: values.name_en,
            regionId: regionId
        }

        api.authPut(`district/${paramId}`, payload).then(data => {
            if (data.success) {
                toast.success("District Updated", {
                    theme: "dark"
                })
                navigate("/admin/districts")
            }
            else {
                toast.error(data.message, {
                    theme: "dark"
                })
            }
        }).catch(err => console.log(err))
    }

    const handleSelector = (e: any) => setRegionId(e.target.value)
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
                            <FormControl
                                fullWidth
                                sx={{ gridColumn: "span 2" }}
                            >
                                <InputLabel id="demo-simple-select-label">Plant Categories</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={regionId}
                                    label="Regions"
                                    onChange={handleSelector}
                                    name="regionId"
                                >
                                    {regions.map((item: districtType) => {
                                        const name: string = item[`name_${l}` as keyof districtType] as string
                                        return <MenuItem value={item.id} key={item.id}>{name}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
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

export default DistrictEditComponent
