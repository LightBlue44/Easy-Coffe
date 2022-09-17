import { colors } from './variables'
import {createGlobalStyle} from 'styled-components'
import coffeeBean from '../images/coffeeBean.svg'

const {lightBrown} = colors

const GlobalStyle = createGlobalStyle`
 *{
 box-sizing: border-box;
 margin: 0;
 padding: 0;
 }
  body{
    background-color: ${lightBrown};
    background-image: url(${coffeeBean});
    background-size: 800px;
    height: 100vh;
  }
 `

export default GlobalStyle