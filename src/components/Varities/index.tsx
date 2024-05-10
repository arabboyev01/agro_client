import { useRouter } from "next/router"
import DumbVarities from "./DUmbVarities"
import { Language } from "@/hooks/language"
import { useQuery } from "react-query"
import { getData } from "@/api/custom"
import { useEffect, useState } from "react"
import { api } from "@/api"

const VaritiesComponent = () => {

    const router = useRouter()
    const { lang, l } = Language()

    const [type, setType] = useState<any>('')
    const [category, setCategory] = useState<any>('')
    const [data, setData] = useState(null)

    
    const { data: categories } = useQuery('plants-category', () => getData('plants-category'))

    const { data: types, refetch } = useQuery('types-id', () => getData(`types-id/${category?.id}`), {
        enabled: !!category?.id,
    })

    useEffect(() => {
        if (category?.id) refetch()
    }, [category?.id, refetch])

    const handleRoute = (route: string) => router.push(route)
    
    const handleData = () => {
        if (category && type) {
            api.getData(`varity-details?type=${type?.id}&category=${category?.id}`)
            .then((data) => setData(data.data))
            .catch(err => console.log(err))
        }
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