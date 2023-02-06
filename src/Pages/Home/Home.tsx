import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Home.scss'
import NavBar from '../../Components/NavBar/NavBar'
import SingleElem from 'src/Components/SingleElem/SingleElem'
import { getCarPostsAxios, carPostsArrType } from 'src/lib/apiService'

const Home = (): JSX.Element => {
  const [loadingState, setLoadingState] = useState(true),
    [loadDataError, setLoadDataError] = useState(false),
    [postDataState, setPostDataState] = useState<carPostsArrType>()
  useEffect(() => {
    const fun = async () => {
      const loadedData = await getCarPostsAxios()
      setLoadingState(false)
      setPostDataState(loadedData)
    }
    fun()
  }, [])
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
