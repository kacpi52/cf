import axios from 'axios'
import { carPostType, editCarPostType } from 'src/typings/sharedTypes'

const getAllDataAxios = async (path: string): Promise<carPostType[]> => {
  try {
    const { data, status } = await axios({
      method: 'get',
      url: path,
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
      url: path,
    })
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
      url: path,
      data: editData,
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
      url: path,
      data: editData,
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
      url: path,
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
