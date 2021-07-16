import React from 'react'
import styled from 'styled-components/macro'

const ScrollButton = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Button onClick={scrollToTop}>Back To Top</Button>
    )
}

const Button = styled.button`

`

export default ScrollButton

