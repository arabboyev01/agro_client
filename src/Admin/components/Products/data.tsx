import { ProductsType } from "@/Admin/types"

export const plantsTypeColumns = [
  {
    key: 'id',
    label: '',
    filter: false,
    sorter: false,
    _style: { width: '20%' },
  },
  {
    key: 'name',
    _style: { width: '20%' },
  },
  {
    key: 'avatar',
    _style: { width: '20%' }
  },
  {
    key: 'plantTypeId',
    _style: { width: '20%' },
    label: "Plant Type"
  },
  {
    key: 'price',
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

export const dataSet = (data: ProductsType[]) => {
  if (data?.length) {
    return data.map(({ name, image, id, plantTypeId, price }) => {
      return {
        id,
        name,
        avatar: image,
        plantTypeId,
        price
      }
    })
  }
  return []
}