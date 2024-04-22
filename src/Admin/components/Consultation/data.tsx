export const consultationColumn = [
    {
      key: 'id',
      label: '',
      filter: false,
      sorter: false,
      _style: { width: '20%' },
    },
    {
      key: 'avatar',
      _style: { width: '20%' }
    },
    {
      key: 'fullName',
      _style: { width: '20%' },
    },
    
    {
      key: 'phone_number',
      _style: { width: '20%' }
    },
    {
      key: 'dagree',
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

  export type ConsultationType = {
    fullName: string
    image: string
    dagree: string
    phone_number: string
    id: number
  }

  export const dataSet = (data: ConsultationType[]) => {
    if (data?.length) {
      return data.map(({ fullName, id, image, dagree, phone_number }) => {
        return {
          id,
          fullName,
          avatar: image,
          dagree,
          phone_number
        }
      })
    }
    return []
  }