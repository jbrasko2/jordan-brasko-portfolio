import React from 'react'
import styled from 'styled-components/macro'

const Title = () => {
    return (
        <TitleContent>
            Jordan Brasko's Portfolio
        </TitleContent>
    )
}

const TitleContent = styled.h1`
    margin: 0 auto;
    padding: 16px 20px;
    border: solid black;
    font-style: italic;
`

export default Title