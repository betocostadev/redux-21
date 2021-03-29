import React, { useState } from 'react'
import { toast } from 'react-toastify'

// import { Link } from 'react-router-dom'

import { IUser } from '../store/modules/user/types'
import { Button } from '../styles/Home'

import { FormContainer, Form } from '../styles/UserForm'
interface createProps {
  createUser(user: IUser): void
}

const UserForm: React.FC<createProps> = ({ createUser }) => {
  const [ name, setName] = useState('')
  const [ email, setEmail] = useState('')
  const [ age, setAge] = useState<number>(1)

  const clearFields = (event: any) => {
    event.target.name.value = ''
    event.target.email.value = ''
    event.target.age.value = 1

    setName('')
    setEmail('')
    setAge(0)
  }

  // FormEvent<HTMLFormElement>
  const addUser = (event: any) => {
    event.preventDefault()

    const newUser = {
      name: name,
      email: email,
      age: age,
      id: "0"
    }

    createUser(newUser)

    toast.success(`Aluno cadastrado`)



    clearFields(event)
  }

  // <Link to="https://www.google.com" />
  return (
    <FormContainer>
      <h3 className="description">Inscrever usuário</h3>

      <Form onSubmit={addUser}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input name="name" type="text" placeholder="Nome do aluno" onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input name="email" type="text" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="age">Idade:</label>
          <input name="age" type="number" placeholder="Idade" onChange={e => setAge(Number(e.target.value))} />
        </div>
        <Button type="submit" disabled={ !name || !email || !age ? true : false }>Adicionar</Button>
      </Form>
    </FormContainer>
  )
}

export default UserForm
