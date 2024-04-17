import AdminLayout from "@/Admin/components/Layout"
import HomeComponent from "@/Admin/components/Home"
import useAuth from "@/hooks/useAuth"

export default function Dashboard() {

    useAuth()

    return (
        <AdminLayout>
            <HomeComponent />
        </AdminLayout>
    )
}