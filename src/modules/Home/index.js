import React from 'react'
import styled from 'styled-components'
import Logout from 'modules/Logout'
import Navbar from 'modules/Navbar'
import Sidebar from 'components/sidebar'
import { InnerRoutes } from 'Router'

const Home = () => (
  <>
    <Sidebar>
      <Navbar />
    </Sidebar>
    <Content>
      <ContextualHeader>
        <Logout />
      </ContextualHeader>
      <MainContent>
        <InnerRoutes />
      </MainContent>
    </Content>
  </>
)

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const ContextualHeader = styled.div`
  padding: 2rem 1rem;
  border-bottom: black solid 1px;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1rem;
  background-color: lightgray;
`

const MainContent = styled.div`
  height: 100%;
  padding: 2rem;
`

export default Home
