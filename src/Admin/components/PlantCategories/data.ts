import { PlantProps } from "@/Admin/types"

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
        key: 'plantType',
        _style: { width: '30%' }
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

export const dataSet = (data: PlantProps[]) => {
  if(data?.length){
    return data.map(({ name, image, plantType, id}) => {
      return {
        id,
        name,
        avatar: image,
        plantType
      }
    })
  }
  return []
}