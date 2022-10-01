import React from 'react'
import Button from '../../components/atoms/Button'
import Container from '../../components/atoms/Container'
import Input from '../../components/atoms/Input'
import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'

const Home = () => (
  <Container 
  fullHeight
  fullCentered>
    <Paper>
      <Typography>Bem Vindo!</Typography>
      <Input
        type='text'
      />
      <br/>
      <Button>
        Login
      </Button>
    </Paper>
  </Container>
)

export default Home