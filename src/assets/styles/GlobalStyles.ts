import { colors } from './variables'
import {createGlobalStyle} from 'styled-components'
import coffeeBean from '../images/coffeeBean.svg'

const {veryLightBrown} = colors

const GlobalStyle = createGlobalStyle`
 *{
 box-sizing: border-box;
 margin: 0;
 padding: 0;
 }
  body{
    background-color: ${veryLightBrown};
    background-image: url(${coffeeBean});
    background-size: 800px;
    height: 100vh;
  }
 `

export default GlobalStyle