import React from 'react'

import * as UserService from '../../services/Users'
import Button from '../../components/atoms/Button'
import Container from '../../components/atoms/Container'
import Input from '../../components/atoms/Input'
import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'

const Home = () => {
  const handleSubmit = (cpf: string) => {
    UserService.getByCpf(cpf)
    .then((response) => {
      console.log(response)
    })
  }
  
  return(
  <Container 
  fullHeight
  fullCentered>
    <Paper>
      <Typography>Bem Vindo!</Typography>
      <Input
        type='text'
      />
      <br/>
      <button
        type='button'
        onClick={() => handleSubmit('03182200089')}
      >
        Login
      </button>
    </Paper>
  </Container>
)}

export default Home