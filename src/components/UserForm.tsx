import React from 'react'

import { IUser } from '../store/modules/user/types'
import { Button } from '../styles/Home'

import { FormContainer, Form } from '../styles/UserForm'
interface createProps {
  createUser(user: IUser): void
}

const UserForm: React.FC<createProps> = ({ createUser }) => {

  const addUser = (event: any) => {
    event.preventDefault()

    if (!event.target.name.value || !event.target.email.value || !event.target.age.value) {
      return
    }

    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      age: event.target.age.value,
      id: "0"
    }

    createUser(newUser)

    event.target.name.value = ''
    event.target.email.value = ''
    event.target.age.value = ''

    return
  }

  return (
    <FormContainer>
      <h3 className="description">Inscrever usuário</h3>
      <Form onSubmit={addUser}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input name="name" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="age">Idade:</label>
          <input name="age" type="number" />
        </div>
        <Button type="submit">Adicionar</Button>
      </Form>
    </FormContainer>
  )
}

export default UserForm
