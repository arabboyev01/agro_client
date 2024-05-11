import AdminLayout from "@/Admin/components/Layout";
import RegionsAddComponent from "@/Admin/components/Regions/add";

export default function Dashboard() {
    return (
        <AdminLayout>
            <RegionsAddComponent />
        </AdminLayout>
    )
}