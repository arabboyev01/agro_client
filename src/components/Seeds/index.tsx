import { useState, ChangeEvent } from "react"
import DumbSeeds from "./DumbSeeds"
import { useQuery } from "react-query"
import { getMethod } from "@/api/custom"
import { Loader } from "../Loader"
import { Language } from "@/hooks/language"

const SeedsComponent = () => {

    const [hover, setHovered] = useState<null|number>(null)
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState('')

    const { data, isLoading } = useQuery(['products', 'products', search], getMethod)

    const { lang } = Language()

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

    if(isLoading) return <Loader />

    return <DumbSeeds hover={hover} setIsHovered={setHovered} open={open} setOpen={setOpen} data={data?.data} handleSearch={handleSearch} search={search} lang={lang}/>
}
export default SeedsComponent