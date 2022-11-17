import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Col, Row } from 'react-grid-system'

import * as UserService from '../../services/Users'
import {useUser} from '../../context/User'

import Container from '../../components/atoms/Container'
import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'
import PurchaseInterface from '../../models/interfaces/Purchase'

const MyAccount = () => {
    const {dispatch} = useUser()
    const [purchase, ] = useState<string>('')
    const navigate = useNavigate()
  
    const payment => {
      UserService.(purchase)
    } .then(() => return returnPurchase) 


    return (
      <Container 
        fullHeight
        fullCentered
      >
        <Paper>
          <Row>
            //each prop is a column
            this.props.map((prop) => {
                <Col>
                  <Typography>{this.prop.purchaseInterface}</Typography>
                </Col>
            })
          </Row>
        </Paper>
      </Container>
    )
  
  export default MyAccount