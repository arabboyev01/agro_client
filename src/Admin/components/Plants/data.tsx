import { PlantsType } from "@/Admin/types"

export const plantsTypeColumns = [
  {
    key: 'id',
    label: '',
    filter: false,
    sorter: false,
    _style: { width: '4%' },
  },
  {
    key: 'name_uz',
    _style: { width: '12%' },
  },
  {
    key: 'name_ru',
    _style: { width: '12%' },
  },
  {
    key: 'name_en',
    _style: { width: '12%' },
  },
  {
    key: 'describtion_uz',
    _style: { width: '12%' }
  },
  {
    key: 'describtion_ru',
    _style: { width: '12%' }
  },
  {
    key: 'describtion_en',
    _style: { width: '12%' }
  },
  {
    key: 'avatar',
    _style: { width: '12%' }
  },
  {
    key: 'show_details',
    label: '',
    _style: { width: '12%' },
    filter: false,
    sorter: false,
  },
]

export const dataSet = (data: PlantsType[]) => {
  if (data?.length) {
    return data.map(({ name_uz, name_ru, name_en, image, id, plantTypeId, plantsCategoryId, describtion_uz, describtion_ru, describtion_en }) => {
      return {
        id,
        name_uz,
        name_ru,
        name_en,
        avatar: image,
        plantTypeId,
        plantsCategoryId,
        describtion_uz,
        describtion_ru,
        describtion_en,
      }
    })
  }
  return []
}