import axios from 'axios'
const dbUrl = 'http://localhost:3021'
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

const allRequestsCarPostsAxios = async (
  method: 'get' | 'post' | 'put' | 'patch' | 'delete',
  path: string,
  requestData?: Record<string, any>
): Promise<carPostType[] | any> => {
  try {
    const { data, status } = await axios({
      method: method,
      url: dbUrl + path,
      headers: { Accept: 'application/json' },
    })
    console.log(data)
    console.log(`server status is ${status}`)
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}
const getAllCarPostsAxios = async (
  path: string,
  requestData?: Record<string, any>
): Promise<carPostType[] | any> => {
  try {
    const { data, status } = await axios({
      method: 'get',
      url: dbUrl + path,
      headers: { Accept: 'application/json' },
    })
    console.log(data)
    console.log(`server status is ${status}`)
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}
const getSingleCarPostsAxios = async (
  path: string
): Promise<carPostType[] | any> => {
  try {
    const { data, status } = await axios({
      method: 'get',
      url: dbUrl + path,
      headers: { Accept: 'application/json' },
    })
    console.log(data)
    console.log(`server status is ${status}`)
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export { allRequestsCarPostsAxios, getAllCarPostsAxios, getSingleCarPostsAxios }
