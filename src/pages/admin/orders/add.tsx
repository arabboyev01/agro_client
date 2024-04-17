import AdminLayout from "@/Admin/components/Layout";
import OrderAdd from "@/Admin/components/Orders/add";

export default function Dashboard() {
    return (
        <AdminLayout>
            <OrderAdd />
        </AdminLayout>
    )
}