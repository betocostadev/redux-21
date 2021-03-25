import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

import api from '../services/api'

import { IUser } from '../store/modules/user/types'
import { addNewUser } from '../store/modules/user/actions'

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
    <div>
      <h2>Home</h2>
      {
        users.map(user => (
          <div key={user.id}>
            <article>
              <p>{user.name} | {user.email}  | {user.age} </p>
              <button onClick={() => handleUsers(user)}>Adicionar</button>
            </article>
          </div>
        ))
      }
    </div>
  )
}

export default Home
