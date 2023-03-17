import axios from 'axios'
import { carPostType, editCarPostType } from 'src/typings/sharedTypes'
const dbUrl = 'http://localhost:3021'

const getAllDataAxios = async (path: string): Promise<carPostType[]> => {
  try {
    const { data, status } = await axios({
      method: 'get',
      url: dbUrl + path,
      headers: { Accept: 'application/json' },
    })
    console.log(`server status is ${status}`)
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}
const getSingleDataAxios = async (path: string): Promise<carPostType> => {
  try {
    const { data, status } = await axios({
      method: 'get',
      url: dbUrl + path,
      headers: { Accept: 'application/json' },
    })
    console.log(`server status is ${status}`)
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}
const addSingleDataAxios = async (
  path: string,
  editData: editCarPostType
): Promise<carPostType> => {
  try {
    const { data, status } = await axios({
      method: 'post',
      url: dbUrl + path,
      data: editData,
      headers: { Accept: 'application/json' },
    })
    console.log(`server status is ${status}`)
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}
const editSingleDataAxios = async (
  path: string,
  editData: editCarPostType
): Promise<carPostType> => {
  try {
    const { data, status } = await axios({
      method: 'put',
      url: dbUrl + path,
      data: editData,
      headers: { Accept: 'application/json' },
    })
    console.log(`server status is ${status}`)
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}
const deleteSingleDataAxios = async (path: string): Promise<carPostType> => {
  try {
    const { data, status } = await axios({
      method: 'delete',
      url: dbUrl + path,
      headers: { Accept: 'application/json' },
    })
    console.log(`server status is ${status}`)
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}
export {
  getAllDataAxios,
  getSingleDataAxios,
  addSingleDataAxios,
  editSingleDataAxios,
  deleteSingleDataAxios,
}
