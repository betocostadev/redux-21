import styled from 'styled-components'

export const FormContainer = styled.div`
  box-shadow: 0px 2px 2px 0px rgba(156,156,156,0.58);
  background: #f5f4f0;
  color: black;
  padding: 0 1rem;
  margin: 0 1rem 1rem 0;
  .description {
    padding: 0.5rem 0;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  justify-items: stretch;
  margin: 2rem auto;
  label {
    margin-right: 0.25rem;
  }
  input {
    margin: 0.3rem;
    width: 350px;
  }
  input[type=number] {
    width: 150px;
  }
`
