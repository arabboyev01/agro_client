import { ProductsType } from "@/Admin/types"

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
    _style: { width: '20%' },
  },
  {
    key: 'name_ru',
    _style: { width: '20%' },
  },
  {
    key: 'name_en',
    _style: { width: '20%' },
  },
  {
    key: 'avatar',
    _style: { width: '10%' }
  },
  {
    key: 'price',
    _style: { width: '10%' }
  },
  {
    key: 'show_details',
    label: '',
    _style: { width: '15%' },
    filter: false,
    sorter: false,
  },
]

export const dataSet = (data: ProductsType[]) => {
  if (data?.length) {
    return data.map(({ name_uz, name_ru, name_en, image, id, price }) => {
      return {
        id,
        name_uz,
        name_ru,
        name_en,
        avatar: image,
        price
      }
    })
  }
  return []
}