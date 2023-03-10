export interface carPostDetailInterface {
  _id: string
  brand: string
  model: string
  productionYear: number
  frontWheelSize: number
  frontWheelWide: number
  rearWheelSize: number
  rearWheelWide: number
  isCustomBody: string
  kindOfBody?: string
  isStockSuspension: string
  kindOfSuspension: string
}

export interface addEditPostModalInterface {
  _id?: string
  brand?: string
  model?: string
  productionYear?: number
  frontWheelSize?: number
  frontWheelWide?: number
  rearWheelSize?: number
  rearWheelWide?: number
  isCustomBody?: string
  kindOfBody?: string
  isStockSuspension?: string
  kindOfSuspension?: string
  reqMethod: string
  isOpenPostModal: boolean
  toggleModal: (val: string) => void
}

export interface addEditUserModalInterface {
  _id?: string
  login?: string
  email?: string
  password?: string
  isAdmin?: boolean
  reqMethod: string
  isOpenUserModal: boolean
  toggleModal: (val: string) => void
}
export interface userInterface {
  login: string
  email: string
  password: string
  isAdmin: boolean
  apiToken: string
}
