import AdminLayout from "@/Admin/components/Layout";
import ProductEdit from "@/Admin/components/Products/edit";

export default function Dashboard() {
    return (
        <AdminLayout>
            <ProductEdit />
        </AdminLayout>
    )
}