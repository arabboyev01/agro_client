import { FC } from "react"
import { AddUserType } from "@/types"
import React from 'react'
import { api } from "@/api"
import { setToken } from "@/utils/tokens"
import router from "next/router"
import { toast } from "react-toastify"
import DumbUserData from "./DumbAddUser"

const AddUser: FC = () => {

    const onSubmit = (values: AddUserType) => {
        api.postData('user', values).then(data => {
            if (!data.success) return toast(data.message)
            setToken(data.token)
            toast(data.message)
            router.push('/admin/users')
        })
    }

    return <DumbUserData onSubmit={onSubmit} />
}
export default AddUser