import AdminLayout from "@/Admin/components/Layout";
import OrderComponent from "@/Admin/components/Orders";

export default function Dashboard() {
    return (
        <AdminLayout>
            <OrderComponent />
        </AdminLayout>
    )
}