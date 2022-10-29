import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import * as UserService from '../../services/Users'

import Container from '../../components/atoms/Container'
import Button from '../../components/atoms/Button'
import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'
import Input from '../../components/atoms/Input'
import {useUser} from '../../context/User'

const MyAccount = () => {
    const {dispatch} = useUser()
    const [purchase, ] = useState<string>('')
    const navigate = useNavigate()
  
    const returnPurchase = (purchase: string) => {
        UserService.returnPurchase(purchase)
        .then((response) =>{
            dispatch({
            type: 'RETURN_PURCHASE',
            payload: response
          })
        })
        .then(() => return returnPurchase)
    }
  
    return (
      <Container 
        fullHeight
        fullCentered
      >
        <Paper>
          <Typography>Perfil</Typography>
        </Paper>
      </Container>
    )
  
  export default MyAccount