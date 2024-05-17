import { Box, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { useFormik } from "formik"
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
import * as S from "./style.add"

type ProductType = {
    id: number
    name_uz: string
    name_ru: string
    name_en: string
}

type userType = {
    fullName: string,
    id: number,
    email: string
    role: string
    createdAt: string
    updatedAt: string
}

const AddMap = () => {

    const { l } = Language("home")
    const { navigate } = Router()
    const isNonMobile = useMediaQuery("(min-width:600px)")

    const [mapCenter, setMapCenter] = useState<{ lat: number, lng: number }>({ lat: 40.7686, lng: 72.2364 })

    const [category, setCategory] = useState<any>(null)
    const [loader, setLoader] = useState(false)
    const [data, setData] = useState([])
    const [typeData, setTypeData] = useState([])
    const [selectedProducts, setSelectedProducts] = useState<number[] | any>([])

    const [soil_key, setKey_data] = useState("")
    const [soil_value, setKey_value] = useState("")
    const [soils, setSoils] = useState<{ key: string; value: string }[]>([])
    const [users, setUSers] = useState([])
    const [userId, setUSerID] = useState<null|string>(null)

    const handleSoilValue = () => {
        if (soil_key && soil_value) {
            setSoils([...soils, {
                key: soil_key,
                value: soil_value
            }])
            setKey_data("")
            setKey_value((""))
        }
    }

    const handleChange = (event: React.ChangeEvent<any> | any) => {
        setSelectedProducts(event.target.value as number[])
    }

    const fetchData = useCallback(() => {
        fetch(`${MAIN_URL}/plants-category`).then(res => res.json())
            .then((data) => setData(data.data))
    }, [])

    const fetchUser = useCallback(() => {
        api.authGet("user-role").then((data) => setUSers(data.user))
           .catch(err => console.log(err))
    }, [])

    const fetchType = useCallback(() => {
        fetch(`${MAIN_URL}/types-id/${category}`).then(res => res.json())
            .then((data) => setTypeData(data.data))
    }, [category])

    const [regions, setRegions] = useState([])
    const [regionId, setRegionId] = useState<null | string>(null)
    const [districts, setDistricts] = useState([])
    const [districtId, setDistrictId] = useState<null | string>(null)

    const getRegions = useCallback(() => {
        api.getData('region').then((data) => setRegions(data.data)).catch(err => console.log(err))
    }, [])

    const getDistrictsByCategoryId = useCallback(() => {
        if (regionId) {
            api.authGet(`district-by-region-id/${Number(regionId)}`).then((data) => setDistricts(data.data)).catch(err => console.log(err))
        }
    }, [regionId])

    useEffect(() => {
        getRegions()
    }, [getRegions])

    useEffect(() => {
        getDistrictsByCategoryId()
    }, [getDistrictsByCategoryId])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    useEffect(() => {
        fetchType()
    }, [fetchType])

    useEffect(() => {
        fetchUser()
    }, [fetchUser])

    const formik: any = useFormik({
        initialValues: {
            address: "",
        },
        onSubmit: (values: any) => {
            const payload = {
                regionId,
                districtId,
                address: values.address,
                crops: JSON.stringify(selectedProducts),
                soilsContent: JSON.stringify(soils),
                lat: JSON.stringify(mapCenter.lat),
                long: JSON.stringify(mapCenter.lng),
                userId: userId
            }

            if (values.address && selectedProducts && soils && mapCenter.lat && mapCenter.lng, regionId, districtId) {
                setLoader(true)
                api.authPost('map', payload).then((data) => {
                    if (data.success) {
                        toast.success("Your map data created!", {
                            theme: "dark"
                        })
                        setLoader(false)
                        navigate("/admin/map")
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
    })

    console.log(users)
    useEffect(() => {
        setKey_value(formik.values.soil_value)
    }, [formik.values.soil_value])

    useEffect(() => {
        setKey_data(formik.values.soil_key)
    }, [formik.values.soil_key])

    return (
        <Fragment>
            <MapUI
                height={47}
                MapContent={PointComponent}
                mapCenter={mapCenter}
                setMapCenter={setMapCenter} mapData={[]} onClick={function (id: number): void {
                    throw new Error("Function not implemented.")
                } } />
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
                        <FormControl fullWidth
                            sx={{ gridColumn: "span 2" }}
                        >
                            <InputLabel id="demo-simple-select-label">Choose a region</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={regionId}
                                label="Regions"
                                onChange={(e) => setRegionId(e.target.value)}
                                name="regions"
                            >
                                {regions.map((item: ProductType) => {
                                    const name: string = item[`name_${l}` as keyof ProductType] as string
                                    return <MenuItem value={item.id} key={item.id}>{name}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth
                            sx={{ gridColumn: "span 2" }}
                        >
                            <InputLabel id="demo-simple-select-label">Choose a district</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={districtId}
                                label="Districts"
                                onChange={(e) => setDistrictId(e.target.value)}
                                name="districts"
                            >
                                {districts?.map((item: ProductType) => {
                                    const name: string = item[`name_${l}` as keyof ProductType] as string
                                    return <MenuItem value={item.id} key={item.id}>{name}</MenuItem>
                                })}
                            </Select>
                        </FormControl>

                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Your address"
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
                                        const selectedProduct: any = typeData?.find((item: any) => item.id === productId);
                                        const name: string = selectedProduct[`name_${l}` as keyof ProductType] as string
                                        return selectedProduct ? name : '';
                                    }).join(', ');
                                }}
                            >
                                {typeData?.map((item: ProductType) => {
                                    const name: string = item[`name_${l}` as keyof ProductType] as string;
                                    return <MenuItem key={item.id} value={item.id}>{name}</MenuItem>;
                                })}
                            </Select>
                        </FormControl>

                        <FormControl fullWidth
                            sx={{ gridColumn: "span 4" }}
                        >
                            <InputLabel id="demo-simple-select-label">Choose a user</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={userId}
                                label="Plant Categories"
                                onChange={(e) => setUSerID(e.target.value)}
                                name="categoryId"
                            >
                                {users?.map((item: userType) => 
                                    <MenuItem value={item.id} key={item.id}>{item.email}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Soil Key"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={soil_key}
                            name="soil_key"
                            error={!!formik.touched.soil_key && !!formik.errors.soil_key}
                            helperText={formik.touched.soil_key && formik.errors.soil_key}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="number"
                            label="Soil Value"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={soil_value}
                            name="soil_value"
                            error={!!formik.touched.soil_value && !!formik.errors.soil_value}
                            helperText={formik.touched.soil_value && formik.errors.soil_value}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <CButton
                            color="primary"
                            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", width: "100px" }}
                            onClick={handleSoilValue}
                        >
                            Add
                        </CButton>
                    </Box>
                    <S.AddStyle>
                        {soils.map((item: { value: string, key: string }) =>
                            <S.Soil key={item.key}>
                                <pre>{item.key}</pre>
                                <pre>:</pre>
                                <pre>{item.value} %</pre>
                            </S.Soil>
                        )}
                    </S.AddStyle>
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

export default AddMap
