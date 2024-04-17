import AdminLayout from "@/Admin/components/Layout"
import PlantCategoryEdit from "@/Admin/components/PlantCategories/edit"

export default function Dashboard() {
    return (
        <AdminLayout>
            <PlantCategoryEdit />
        </AdminLayout>
    )
}