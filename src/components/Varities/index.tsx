import { useRouter } from "next/router"
import DumbVarities from "./DUmbVarities"
import { Language } from "@/hooks/language"
import { useQuery } from "react-query"
import { getData } from "@/api/custom"
import { useState } from "react"

const VaritiesComponent = () => {

    const { data: categories}  = useQuery('plants-category', () => getData('plants-category'))
    const { data: types}  = useQuery('plants-type', () => getData('plants-category'))

    const router = useRouter()
    const { lang, l } = Language()

    const [type, setType] = useState<any>('')
    const [category, setCategory] = useState('')
    const [data, setData] = useState(null)

    const handleRoute = (route: string) => router.push(route)

    const handleData = () => {
        if(category && type) setData(type?.plantTypes)
    }

    return <DumbVarities 
        lang={lang} 
        handleRoute={handleRoute} 
        categories={categories?.data} 
        types={types?.data} 
        setType={setType} 
        setCategory={setCategory}
        type={type}
        category={category} 
        handleData={handleData}
        data={data}
        l={l}
    />
}
export default VaritiesComponent