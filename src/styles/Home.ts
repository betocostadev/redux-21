import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  p {
    margin: 0.25rem 0;
  }
  .user-form {
    align-self: flex-start;
  }
  .title {
    margin-bottom: 1rem;
    align-self: center;
  }
  .users {
    display: flex;
    min-width: 50%;
    padding: 0.5rem;
  }
  .user-list {
    list-style: none;
    min-width: 50%;
    padding: 0.25rem;
  }
  .user-list-item {
    padding: 0.25rem 0;
  }
`

export const HomeDiv = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
`

export const UsersContainer = styled.div`
  align-self: flex-end;
  height: 400px;
  overflow-y: scroll;
`

export const Button = styled.button`
  margin: 0.2rem 0.5rem;
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  background-color: #ffffff;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #666666;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
  &:hover {
    cursor: pointer;
    background: linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
    background-color: #f6f6f6;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`
