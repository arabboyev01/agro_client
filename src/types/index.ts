export type LoginValueType = {
    email: string
    password: string
}
export type AddUserType = {
    username: string
    email: string
    password: string
}

export interface ProductType {
    id: number
    image: string
    name: string
    plantTypeId: number
    price: number
}