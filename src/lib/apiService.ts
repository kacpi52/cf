import axios from 'axios'
const dbUrl = 'http://localhost:3021/carposts'
type carPostType = {
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
export type carPostsArrType = {
  data: carPostType[]
}
const getCarPostsAxios = async () => {
  try {
    const { data, status } = await axios.get<carPostsArrType>(dbUrl, {
      headers: { Accept: 'application/json' },
    })
    console.log(data)
    console.log(`server status is ${status}`)
    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(`error message is : ${error.message}`)
      return error.message
    } else {
      console.log('an unexpected error')
    }
  }
}

export { getCarPostsAxios }
