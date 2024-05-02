import { PlantProps } from "@/Admin/types"

export const plantsTypeColumns = [
    {
        key: 'id',
        label: '',
        filter: false,
        sorter: false,
        _style: { width: '5%' },
      },
      {
        key: 'name_uz',
        _style: { width: '17%' },
      },
      {
        key: 'name_ru',
        _style: { width: '17%' },
      },
      {
        key: 'name_en',
        _style: { width: '17%' },
      },
      { 
        key: 'plantType',
        _style: { width: '17%' }
      },
      { 
        key: 'avatar',
        _style: { width: '17%' }
      },
      {
        key: 'show_details',
        label: '',
        _style: { width: '1%' },
        filter: false,
        sorter: false,
      },
]

export const dataSet = (data: PlantProps[]) => {
  if(data?.length){
    return data.map(({ name_uz, name_en, name_ru,  image, plantType, id}) => {
      return {
        id,
        name_uz,
        name_ru,
        name_en,
        avatar: image,
        plantType
      }
    })
  }
  return []
}