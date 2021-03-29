import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

import { IUser } from '../store/modules/user/types'

const baseUrl =  'http://localhost:8888/'

const getAll = async () => {
  const response = await axios.get(`${baseUrl}students/`)
  return response.data
}

const create = async (user: IUser) => {
  const newUser = { ...user, id: uuidv4() }
  const response = await axios.post(`${baseUrl}students/`, newUser)
  return response
}

const remove = async(id: string) => {
  const response = await axios.delete(`${baseUrl}students/${id}`)
  return response
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, remove }
