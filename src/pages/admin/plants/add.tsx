import AdminLayout from "@/Admin/components/Layout"
import PlantsAdd from "@/Admin/components/Plants/add"

export default function Dashboard() {
    return (
        <AdminLayout>
            <PlantsAdd />
        </AdminLayout>
    )
}