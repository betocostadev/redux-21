import { Reducer } from 'redux'

import { IGlobalState } from './types'

const INITIAL_STATE: IGlobalState = {
  users: []
}

const AllUsers: Reducer<IGlobalState | any> = ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case 'ADD_USER':
      const { user } = action.payload
      return { ...state, users: [...state.users, user] }
    case 'REMOVE_USER':
      const { id } = action.payload
      return { users: [ ...state.users.filter((user: any) => user.id !== id)] }
    default:
      return state
  }
}

export default AllUsers
