import React, {useState} from 'react'

import * as UserService from '../../services/Users'
import { returnPurchase } from '../../services/Purchase'
import { returnAllPurchase } from '../../services/Purchase'

import PurchaseInterface from '../../models/interfaces/Purchase'

import Container from '../../components/atoms/Container'
import Button from '../../components/atoms/Button'
import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'
import { useUser } from '../../context/User'
import { useFormats } from '../../utils/useFormats'

const MyAccount = () => {
    const {dispatch} = useUser()
    const {formatCurrency, getFisrtName} = useFormats()
    const [purchase] = useState<PurchaseInterface[]>([])
  
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
        <Typography>Olá {getFisrtName(state.user?.name)}</Typography>
        <Row>
          {purchase.map(purchase) => (
          <Paper>
            <Typography>Produto 01</Typography>
            <Button>Pagar</Button> <br />

            <Typography>Produto 02</Typography>
            <Button>Pagar</Button> <br />

            <Typography>Produto 03</Typography>
            <Button>Pagar</Button> <br />

           <Typography>Produto 04</Typography>
            <Button>Pagar</Button> <br />

            <Typography>Produto 05</Typography>
            <Button>Pagar</Button> <br />
          </Paper>
          )}
        </Row>
      </Container>
    )
  
  export default MyAccount