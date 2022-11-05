import React, {useState} from 'react'

import * as UserService from '../../services/Users'
import { payment } from '../../services/Payment'
import { getAllPurchase } from '../../services/Purchase'

import PurchaseInterface from '../../models/interfaces/Purchase'

import Container from '../../components/atoms/Container'
import Button from '../../components/atoms/Button'
import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'
import { useUser } from '../../context/User'
import { useFormats } from '../../utils/useFormats'
import { getAll } from '../../services/Product'
import { Row } from 'react-grid-system'

const MyAccount = () => {
    const {dispatch} = useUser()
    const {formatCurrency, getFisrtName} = useFormats()
    const [purchase] = useState<PurchaseInterface[]>([])
  
    const payment => {
      UserService.(purchase)
    } .then(() => return payment 


      (
      <Container 
        fullHeight
        fullCentered
      >
        <Typography>
          Olá {getFisrtName(state.user?.name)} <br />
          
        </Typography>
        <Row>
          {purchase.map(purchase) ={'>'} (
          <Paper>
            <Typography>Produto 01</Typography><br />
            <Typography>Produto 02</Typography><br />
            <Typography>Produto 03</Typography><br />
            <Typography>Produto 04</Typography><br />
            <Typography>Produto 05</Typography><br />
            <Button onClick={getAll}>Pagar</Button>
          </Paper>
          )}
        </Row>
      </Container>
    )

  export default MyAccount