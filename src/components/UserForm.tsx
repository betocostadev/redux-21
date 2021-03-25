import React from 'react'

import { IUser } from '../store/modules/user/types'

interface createProps {
  createUser(user: IUser): void
}

const UserForm: React.FC<createProps> = ({ createUser }) => {

  const addUser = (event: any) => {
    event.preventDefault()
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      age: event.target.age.value,
      id: 0
    }

    createUser(newUser)

    event.target.name.value = ''
    event.target.email.value = ''
    event.target.age.value = ''

    return
  }

  return (
    <form onSubmit={addUser}>
      <input name="name" type="text" />
      <input name="email" type="text" />
      <input name="age" type="number" />
      <button type="submit">add</button>
    </form>
  )
}

export default UserForm
