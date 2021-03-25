import React from 'react'
import { useSelector } from 'react-redux'

import { IGlobalState } from '../store/modules/user/types'

import { AboutContainer } from '../styles/AboutUs'

const AboutUs: React.FC = () => {
  const state = useSelector((state: IGlobalState) => state.users)
  return (
    <AboutContainer>
      <h2 className="title">Matriculados | Academia Accenture 2.1</h2>
      <>
      {
        state.map((user, index) => (
          <div key={index}>
            <ul className="user-list">
              <li className="user-list-item">{user.name}</li>
            </ul>
          </div>
        ))
      }
      </>
    </AboutContainer>
  )
}

export default AboutUs
