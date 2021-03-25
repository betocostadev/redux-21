import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

import { toast } from 'react-toastify'

import userService from '../services/users'
import { IUser } from '../store/modules/user/types'
import { addNewUser } from '../store/modules/user/actions'
import { HomeContainer, Button, UsersContainer, HomeDiv } from '../styles/Home'

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

  // <Button onClick={() => toast(`nice!`)} />

  return (
    <HomeContainer>
      <h2 className="title">Academia Accenture 2.1</h2>
      <HomeDiv>
        <div className="user-form">
          <UserForm createUser={createUser} />
        </div>

        <UsersContainer>
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
        </UsersContainer>
      </HomeDiv>
    </HomeContainer>
  )
}

export default Home
