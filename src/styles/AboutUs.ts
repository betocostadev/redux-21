import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  .title {
    margin: 1rem;
  }
  .user-list {
    list-style: none;
    min-width: 50%;
    padding: 0.25rem;
  }
  .user-list-item {
    align-self: flex-end;
  }
`
