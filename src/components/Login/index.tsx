import { LoginValueType } from "@/types"
import DumbStyleLogin from "./DumbLoginPage"
import { api } from "@/api"
import { setToken } from "@/utils/tokens"
import { toast } from "react-toastify"
import { useRouter } from "next/router"

const LoginComponent = () => {
    const router = useRouter()

    const onSubmit = (values: LoginValueType) => {
        api.postData('login', values).then(data => {
            if (!data.success) return toast.error(data.message, {
                theme: "dark"
            })

            setToken(data.token)
            toast(data.message, {
                theme: "dark"
            })
            router.push('/admin')
        })
    }

    return <DumbStyleLogin handleSubmit={onSubmit} />
}
export default LoginComponent