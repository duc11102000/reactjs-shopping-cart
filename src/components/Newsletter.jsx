import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`

const Desc = styled.div`
    font-size: 24px;
    margin-bottom: 20px;
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`

const Button = styled.button`
    flex: 1;
    border: none;
    transition: 0.2s ease;
    cursor: pointer;
    &:hover {
        background-color: teal;
        color: white;
    }
`

export default function Newsletter() {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
            <Input placeholder='Your Email'></Input>
            <Button>
                <Send></Send>
            </Button>
        </InputContainer>
    </Container>
  )
}
