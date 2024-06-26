import { useState, ChangeEvent, useCallback, useEffect } from "react"
import DumbSeeds from "./DumbSeeds"
import { Loader } from "../Loader"
import { Language } from "@/hooks/language"
import { MAIN_URL } from "@/config"

const SeedsComponent = () => {

    const [hover, setHovered] = useState<null|number>(null)
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState('')
    const [data, setData] = useState(null)

    const fetchData = useCallback(() => {
        fetch(`${MAIN_URL}/products?search=${search}`).then(res => res.json())
        .then((data) => setData(data.data))
    }, [search])

    useEffect(() => {
        fetchData()
    }, [fetchData])


    const { lang, l } = Language("seeds")

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setTimeout(() => {
            setSearch(e.target.value)
        }, 10)
    }

    if(!data) return <Loader />

    return <DumbSeeds hover={hover} setIsHovered={setHovered} open={open} setOpen={setOpen} data={data} handleSearch={handleSearch} lang={lang} l={l}/>
}
export default SeedsComponent