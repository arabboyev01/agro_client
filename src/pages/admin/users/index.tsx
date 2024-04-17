import AdminLayout from "@/Admin/components/Layout";
import UsersComponent from "@/Admin/components/Users";
import useAuth from "@/hooks/useAuth";

export default function Dashboard() {
    useAuth()
    return (
        <AdminLayout>
            <UsersComponent />
        </AdminLayout>
    )
}