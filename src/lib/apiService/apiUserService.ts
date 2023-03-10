import axios from 'axios'
import { userType, editUserType } from 'src/utils/sharedTypes'
const dbUrl = 'http://localhost:3021'

const getAllUserAxios = async (path: string): Promise<userType[]> => {
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
const getSingleUserAxios = async (path: string): Promise<userType> => {
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
const addSingleUserAxios = async (
  path: string,
  editData: editUserType
): Promise<userType> => {
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
const editSingleUserAxios = async (
  path: string,
  editData: editUserType
): Promise<userType> => {
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
const deleteSingleUserAxios = async (path: string): Promise<userType> => {
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
  getAllUserAxios,
  getSingleUserAxios,
  addSingleUserAxios,
  editSingleUserAxios,
  deleteSingleUserAxios,
}
