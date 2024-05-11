import AdminLayout from "@/Admin/components/Layout";
import RegionsEditComponent from "@/Admin/components/Regions/edit";

export default function Dashboard() {
    return (
        <AdminLayout>
            <RegionsEditComponent />
        </AdminLayout>
    )
}