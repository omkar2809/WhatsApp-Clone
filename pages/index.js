import Head from 'next/head'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>WhatsApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
      <ChatContainer>
        <Title>WhatsApp Clone</Title>
      </ChatContainer>
    </Container>
  )
}

const Container = styled.div `
  display: flex;
  background-color: #e5ded8;
`
const ChatContainer = styled.div `
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1 `
  text-align: center;
`