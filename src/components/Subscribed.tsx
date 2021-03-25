import React, { useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IGlobalState } from '../store/modules/user/types'
import { removeUser } from '../store/modules/user/actions'

import { SubscribedContainer } from '../styles/Subscribed'

const Subscribed: React.FC = () => {
  const dispatch = useDispatch()
  const state = useSelector((state: IGlobalState) => state.users)

  const removeUserById = useCallback((id: string) => {
    dispatch(removeUser(id))
  }, [dispatch])

  return (
    <SubscribedContainer>
      <h2 className="title">Matriculados | Academia Accenture 2.1</h2>
      <>
        { state && state.length ?
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Idade</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
            { state.map((user, index) => (
              <tr key={index}>
                <th>{index}</th>
                <th>{user.name}</th>
                <th>{user.email}</th>
                <th>{user.age}</th>
                <th>
                  <span
                    className="material-icons remove-icon"
                    onClick={() => removeUserById(user.id)}>
                      delete_outline
                  </span>
                </th>
              </tr>
            ))}
            </tbody>
          </table>
          : null
        }
      </>
    </SubscribedContainer>
  )
}

export default Subscribed
