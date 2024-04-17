import AdminLayout from "@/Admin/components/Layout"
import PlantEdit from "@/Admin/components/Plants/edit"

export default function Dashboard() {
    return (
        <AdminLayout>
            <PlantEdit />
        </AdminLayout>
    )
}