import { OrderType } from "@/Admin/types"

export const ordersColumns = [
  {
    key: 'id',
    label: '',
    filter: false,
    sorter: false,
    _style: { width: '4%' },
  },
  {
    key: 'name_uz',
    _style: { width: '12.5%' },
  },
  {
    key: 'name_ru',
    _style: { width: '12.5%' },
  },
  {
    key: 'name_en',
    _style: { width: '12.5%' },
  },
  {
    key: 'customerName',
    _style: { width: '12.5%' }
  },
  {
    key: 'customerPhone',
    _style: { width: '12.5%' }
  },
  {
    key: 'price',
    _style: { width: '12.5%' }
  },
  {
    key: 'avatar',
    _style: { width: '12.5%' }
  },
  {
    key: 'show_details',
    label: '',
    _style: { width: '12.5%' },
    filter: false,
    sorter: false,
  },
]

export const dataSet = (data: OrderType[]) => {
  console.log(data)
  if (data?.length) {
    return data.map(({ id, customerName, product, customerPhone }) => {
      return {
        id,
        customerName,
        customerPhone,
        avatar: product?.image,
        name_uz: product?.name_uz,
        name_ru: product?.name_ru,
        name_en: product?.name_en,
        price: product?.price
      }
    })
  }
  return []
}