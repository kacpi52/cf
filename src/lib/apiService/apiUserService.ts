import axios from 'axios'
import { userType, editUserType } from 'src/typings/sharedTypes'
const dbUrl = 'http://localhost:3021'

const getAllUserAxios = async (path: string): Promise<userType[]> => {
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
const getSingleUserAxios = async (path: string): Promise<userType> => {
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
const addSingleUserAxios = async (
  path: string,
  editData: editUserType
): Promise<userType> => {
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
const editSingleUserAxios = async (
  path: string,
  editData: editUserType
): Promise<userType> => {
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
const deleteSingleUserAxios = async (path: string): Promise<userType> => {
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
const loginUserAxios = async (
  path: string,
  loginData: editUserType
): Promise<userType> => {
  try {
    const { data, status } = await axios({
      method: 'post',
      url: path,
      data: loginData,
    })
    console.log(`server status is ${status} ${JSON.stringify(data)}`)
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
  loginUserAxios,
}
