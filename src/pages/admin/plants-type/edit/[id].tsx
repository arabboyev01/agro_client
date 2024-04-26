import AdminLayout from "@/Admin/components/Layout"
import PlantTypeEdit from "@/Admin/components/PlantsTypes/edit"

export default function Dashboard() {
    return (
        <AdminLayout>
            <PlantTypeEdit />
        </AdminLayout>
    )
}