import AdminLayout from "@/Admin/components/Layout"
import PlantCategoryAdd from "@/Admin/components/PlantCategories/add"

export default function Dashboard() {
    return (
        <AdminLayout>
            <PlantCategoryAdd />
        </AdminLayout>
    )
}