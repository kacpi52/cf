import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Home.scss'
import NavBar from '../../Components/NavBar/NavBar'
import SingleElem from 'src/Components/SingleElem/SingleElem'

const Home = (): JSX.Element => {
  return (
    <div className="home">
      <NavBar />
      <div className="home__content">
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="2" className="home__content__title">
              Home Page
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs={12} md={6} lg={4}>
              <SingleElem />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Home
