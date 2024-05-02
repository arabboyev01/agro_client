export interface TableProps<T> {
    column: TableColumn
    data: T
}

interface TableColumn {
    key: string
    label?: string
    filter?: boolean
    sorter?: boolean
    _style?: React.CSSProperties
}


export interface UserTypes {
    id: number
    username: string
    email: string
    password: string
    role: string
    createdAt: Date | string
    updatedAt: Date | string
}

export interface ProductsProp<T> {
    user: T[]
    navigate?: (value: string) => void
    column: any
    navigateTo?: (value: number) => void
}
export interface PlantProps {
    id: number
    image: string
    name_uz: string
    name_ru: string
    name_en: string
    plantType: string
    plantTypes: string[]
}
export interface PlantTypeProp<T> {
    navigate: (route: string) => void 
    data: T[]
    navigateTo: (id: number) => void
}

export interface ProductsType {
    id: number
    name_uz: string
    name_ru: string
    name_en: string
    plantTypeId: number
    plantType: OrderType[]
    price: number
    image: string
  }

  export interface OrderType {
    id: number
    customerName: string
    customerPhone: string
    productId: number
    product: ProductsType
  }

export interface PlantsType {
    id: number
    name_uz: string
    name_ru: string
    name_en: string
    describtion_uz: string
    describtion_ru: string
    describtion_en: string
    image: string
    plantTypeId: number
    plantsCategoryId: number
}
export interface PlantType {
    id: number
    name_uz: string
    name_ru: string
    name_en: string
    image: string
    categoryId: number
}
