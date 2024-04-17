import AdminLayout from "@/Admin/components/Layout";
import AddUser from "@/Admin/components/Users/Add";

export default function Dashboard() {
    return (
        <AdminLayout>
            <AddUser />
        </AdminLayout>
    )
}