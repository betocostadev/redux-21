import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

import userService from '../services/users'
import { IUser } from '../store/modules/user/types'
import { addNewUser } from '../store/modules/user/actions'
import { HomeContainer, Button } from '../styles/Home'

import UserForm from './UserForm'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const [ users, setUsers ] = useState<IUser[]>([])

  useEffect(() => {
    getAll()
  }, [])

  const getAll = async () => {
    try {
      const users = await userService.getAll()
      setUsers(users)
    } catch (error) {
      console.log(error)
    }
  }

  const createUser = async (user: IUser) => {
    try {
      await userService.create(user)
      await getAll()
    } catch (error) {
      console.log(error)
    }
  }

  const handleRemoveUser = async (id: any) => {
    try {
      await userService.remove(id)
      await getAll()
    } catch (error) {
      console.log(error)
    }
  }

  const handleUsers = useCallback((user: IUser) => {
    dispatch(addNewUser(user))
  }, [dispatch])

  return (
    <HomeContainer>
      <h2 className="title">Lista de candidatos</h2>
      <UserForm createUser={createUser} />
      {
        users.map(user => (
          <div className="users" key={user.id}>
            <article>
              <ul className="user-list">
                <li className="user-list-item">Nome: {user.name}</li>
                <li className="user-list-item">Email: {user.email}</li>
                <li className="user-list-item">Idade: {user.age}</li>
              </ul>
              <Button onClick={() => handleUsers(user)}>Matricular</Button>
              <Button onClick={() => handleRemoveUser(user.id)}>Remover</Button>
            </article>
          </div>
        ))
      }
      <h3>Add user</h3>
    </HomeContainer>
  )
}

export default Home
