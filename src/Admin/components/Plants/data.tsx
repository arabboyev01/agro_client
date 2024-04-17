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
    key: 'name',
    _style: { width: '12%' },
  },
  {
    key: 'avatar',
    _style: { width: '12%' }
  },
  // {
  //   key: 'plantType',
  //   _style: { width: '10%' }
  // },
  // {
  //   key: 'plantsCategory',
  //   _style: { width: '10%' },
  //   label: 'Category',
  // },
  {
    key: 'waterPeriod',
    _style: { width: '12%' }
  },
  {
    key: 'yieldDuration',
    _style: { width: '12%' }
  },
  {
    key: 'temperature',
    _style: { width: '12%' }
  },
  {
    key: 'lightRequirement',
    _style: { width: '12%' }
  },
  {
    key: 'cultivationMethod',
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
    return data.map(({ name, image, id, plantTypeId, plantsCategoryId, waterPeriod, yieldDuration, temperature, lightRequirement, cultivationMethod }) => {
      return {
        id,
        name,
        avatar: image,
        plantTypeId,
        plantsCategoryId,
        waterPeriod,
        yieldDuration,
        temperature,
        lightRequirement,
        cultivationMethod
      }
    })
  }
  return []
}