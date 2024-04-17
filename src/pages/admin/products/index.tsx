import AdminLayout from "@/Admin/components/Layout";
import ProductsComponent from "@/Admin/components/Products";

export default function Dashboard() {
    return (
        <AdminLayout>
            <ProductsComponent />
        </AdminLayout>
    )
}