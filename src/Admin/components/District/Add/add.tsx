import { Box, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { Field } from "formik"
import { ChangeEvent, useCallback, useEffect, useState } from "react"
import { api } from "@/api"
import { toast } from "react-toastify"
import Router from "@/hooks/router"
import { Language } from "@/hooks/language"
import AddForm from "@/Admin/Reusiable/AddForm"
import { fieldType } from "@/Admin/types"
import { checkoutSchema, initialValues, regionType } from "./data"

const DistrictAdd = () => {

    const { navigate } = Router()
    const { l } = Language("plants")


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
            }
            else {
                toast.error(data.message, {
                    theme: "dark"
                })
            }
        }).catch((err) => console.log(err))
    }

    return (
        <Box m="20px">
            <AddForm submit={handleFormSubmit} initValue={initialValues} validate={checkoutSchema} buttonText="Add District">
                <Field name="name_uz">
                    {({ field, meta }: fieldType) => (
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="District name uz"
                            {...field}
                            error={meta.touched && meta.error}
                            helperText={meta.touched && meta.error}
                            sx={{ gridColumn: "span 2" }}
                        />
                    )}

                </Field>

                <Field name="name_ru">
                    {({ field, meta }: fieldType) => (
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="District name ru"
                            {...field}
                            error={meta.touched && meta.error}
                            helperText={meta.touched && meta.error}
                            sx={{ gridColumn: "span 2" }}
                        />
                    )}
                </Field>
                <Field name="name_en">
                    {({ field, meta }: fieldType) => (
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="District name en"
                            {...field}
                            error={meta.touched && meta.error}
                            helperText={meta.touched && meta.error}
                            sx={{ gridColumn: "span 2" }}
                        />
                    )}
                </Field>
                <FormControl fullWidth
                    sx={{ gridColumn: "span 2" }}
                >
                    <InputLabel id="demo-simple-select-label">Choose region</InputLabel>
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
            </AddForm>
        </Box>
    )
}
export default DistrictAdd
