import { PlantType } from "@/Admin/types"

export const plantsTypeColumns = [
    {
        key: 'id',
        label: '',
        filter: false,
        sorter: false,
        _style: { width: '10%' },
      },
      {
        key: 'name',
        _style: { width: '30%' },
      },
      {
        key: "categoryId",
        label: "Category",
        _style: { width: '29%' }
      },
      { 
        key: 'avatar',
        _style: { width: '30%' }
      },
      {
        key: 'show_details',
        label: '',
        _style: { width: '1%' },
        filter: false,
        sorter: false,
      },
]

export const dataSet = (data: PlantType[]) => {
  if(data?.length){
    return data.map(({ name, image, categoryId, id}) => {
      return {
        id,
        name,
        avatar: image,
        categoryId
      }
    })
  }
  return []
}