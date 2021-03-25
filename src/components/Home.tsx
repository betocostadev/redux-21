import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

import api from '../services/api'

import { IUser } from '../store/modules/user/types'
import { addNewUser } from '../store/modules/user/actions'
import { HomeContainer, Button } from '../styles/Home'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const [ users, setUsers ] = useState<IUser[]>([])

  useEffect(() => {
    api.get('students')
      .then(res => {
        setUsers(res.data)
      })
      .catch(e => console.log(e))
  }, [])

  const handleUsers = useCallback((user: IUser) => {
    dispatch(addNewUser(user))
  }, [dispatch])

  return (
    <HomeContainer>
      <h2 className="title">Lista de candidatos</h2>
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
            </article>
          </div>
        ))
      }
      <h3>Add user</h3>
    </HomeContainer>
  )
}

export default Home
