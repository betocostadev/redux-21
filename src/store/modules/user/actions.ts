import { IUser } from './types'

export function addNewUser(user: IUser) {
  return {
    type: 'ADD_USER',
    payload: {
      user
    }
  }
}

export function removeUser(id: string) {
  return {
    type: 'REMOVE_USER',
    payload: {
      id
    }
  }
}
