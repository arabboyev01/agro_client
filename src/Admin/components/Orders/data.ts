import { OrderType, PlantsType } from "@/Admin/types"

export const ordersColumns = [
  {
    key: 'id',
    label: '',
    filter: false,
    sorter: false,
    _style: { width: '4%' },
  },
  {
    key: 'plantName',
    _style: { width: '12.5%' },
  },
  {
    key: 'avatar',
    _style: { width: '12.5%' }
  },
  {
    key: 'price',
    _style: { width: '12.5%' }
  },
  {
    key: 'customerName',
    _style: { width: '12.5%' }
  },
  {
    key: 'phone',
    _style: { width: '12.5%' }
  },
  {
    key: 'productId',
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
  if (data?.length) {
    return data.map(({ plantName, image, id, price, customerName, phone, productId }) => {
      return {
        id,
        plantName,
        avatar: image,
        price,
        customerName,
        phone,
        productId
      }
    })
  }
  return []
}