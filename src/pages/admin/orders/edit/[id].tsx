import AdminLayout from "@/Admin/components/Layout"
import OrderEdit from "@/Admin/components/Orders/edit"

export default function Dashboard() {
    return (
        <AdminLayout>
            <OrderEdit />
        </AdminLayout>
    )
}