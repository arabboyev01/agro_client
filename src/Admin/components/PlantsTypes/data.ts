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
        key: 'name_uz',
        _style: { width: '25%' },
      },
      {
        key: 'name_ru',
        _style: { width: '25%' },
      },
      {
        key: 'name_en',
        _style: { width: '25%' },
      },
      { 
        key: 'avatar',
        _style: { width: '20%' }
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
    return data.map(({ name_uz, name_ru, name_en, image, categoryId, id}) => {
      return {
        id,
        name_uz,
        name_ru,
        name_en,
        avatar: image,
        categoryId
      }
    })
  }
  return []
}