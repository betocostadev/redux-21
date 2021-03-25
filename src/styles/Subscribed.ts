import styled from 'styled-components'

export const SubscribedContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  width: 85%;
  .title {
    text-align: center;
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
  .remove-icon {
    &:hover {
      cursor: pointer;
    }
  }
`
