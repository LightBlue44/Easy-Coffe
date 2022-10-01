import { colors } from './variables'
import {createGlobalStyle} from 'styled-components'
import coffeeBean from '../images/coffeeBean.svg'

const {lightBrown} = colors

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  *{
 box-sizing: border-box;
 margin: 0;
 padding: 0;
 font-family: 'Roboto', sans-serif;
 }

 body{
    background-color: ${lightBrown};
    background-image: url(${coffeeBean});
    background-size: 800px;
    height: 100vh;
  }
 `

export default GlobalStyle