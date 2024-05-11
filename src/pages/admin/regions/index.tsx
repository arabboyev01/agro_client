import AdminLayout from "@/Admin/components/Layout";
import RegionsComponent from "@/Admin/components/Regions";

export default function Dashboard() {
    return (
        <AdminLayout>
            <RegionsComponent />
        </AdminLayout>
    )
}