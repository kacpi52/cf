import axios from 'axios'
import { carPostType, editCarPostType } from 'src/utils/sharedTypes'
const dbUrl = 'http://localhost:3021'

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
const addSingleCarPostsAxios = async (
  path: string,
  editData: editCarPostType
): Promise<carPostType[] | any> => {
  try {
    const { data, status } = await axios({
      method: 'post',
      url: dbUrl + path,
      data: editData,
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
const editSingleCarPostsAxios = async (
  path: string,
  editData: editCarPostType
): Promise<carPostType[] | any> => {
  try {
    const { data, status } = await axios({
      method: 'put',
      url: dbUrl + path,
      data: editData,
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
const deleteSingleCarPostsAxios = async (
  path: string
): Promise<carPostType[] | any> => {
  try {
    const { data, status } = await axios({
      method: 'delete',
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
export {
  allRequestsCarPostsAxios,
  getAllCarPostsAxios,
  getSingleCarPostsAxios,
  addSingleCarPostsAxios,
  editSingleCarPostsAxios,
  deleteSingleCarPostsAxios,
}
