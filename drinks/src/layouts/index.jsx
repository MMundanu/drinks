import React from 'react'
import {Container} from 'react-bootstrap'
import { Header } from '../components/Header/Index'
import { Footer } from '../components/Footer'
import PropTypes from 'prop-types'

export const MainLayout = ({children}) => {
  return (
    <div>
        <Header />
        <Container>
            {children}
        </Container>
        <Footer />
    </div>
  )

  
}

MainLayout.prototype = {
    children : PropTypes.node.isRequired
}
