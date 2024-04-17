import AdminLayout from "@/Admin/components/Layout";
import ProductsAdd from "@/Admin/components/Products/add";

export default function Dashboard() {
    return (
        <AdminLayout>
            <ProductsAdd />
        </AdminLayout>
    )
}