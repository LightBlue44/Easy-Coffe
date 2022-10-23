import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../assets/styles/variables'

const { lightBrown, brown1, darkBrown  } = colors

const Button = styled.button`
:hover{
    background-color: ${lightBrown};
    border: ${brown1};
    border: 2px solid ${darkBrown};
    transition: border 1s;
}
 background-color: ${darkBrown};
 color: #fff;
 border: 2px solid ${lightBrown};
 border-radius: 5px;
 width: 70px;
`

export default Button