export type carPostType = {
  _id: string
  brand: string
  model: string
  productionYear: number
  frontWheelSize: number
  frontWheelWide: number
  rearWheelSize: number
  rearWheelWide: number
  isCustomBody: boolean
  kindOfBody?: string
  isStockSuspension: boolean
  kindOfSuspension: string
}
export type editCarPostType = {
  _id?: string
  brand?: string
  model?: string
  productionYear?: number
  frontWheelSize?: number
  frontWheelWide?: number
  rearWheelSize?: number
  rearWheelWide?: number
  isCustomBody?: boolean
  kindOfBody?: string
  isStockSuspension?: boolean
  kindOfSuspension?: string
}

export type userType = {
  _id: string
  login: string
  email: string
  password: string
  isAdmin?: boolean
}
export type editUserType = {
  _id?: string
  login?: string
  email?: string
  password?: string
  isAdmin?: boolean
}
export type loginUserType = {
  email?: string
  password?: string
}
