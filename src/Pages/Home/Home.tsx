import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Home.scss'
import NavBar from '../../Components/NavBar/NavBar'
import SingleElem from 'src/Components/SingleElem/SingleElem'
import { allRequestsCarPostsAxios, carPostType } from 'src/lib/apiService'

const Home: React.FC = () => {
  const [loadingState, setLoadingState] = useState<boolean>(true),
    [loadDataError, setLoadDataError] = useState<boolean>(false),
    [postDataState, setPostDataState] = useState<carPostType[]>([])
  useEffect(() => {
    const getDataFromApi = async () => {
      const loadedData = await allRequestsCarPostsAxios('get', '/carposts')
      loadedData.length > 1 && setPostDataState(loadedData)
      setLoadingState(false)
    }
    try {
      getDataFromApi()
    } catch (error) {
      setLoadDataError(true)
    }
  }, [])
  const renderAllPosts = () => {
    return postDataState.map((elem) => (
      <Col xs={12} md={6} lg={4}>
        {' '}
        <SingleElem {...elem} key={elem._id} />{' '}
      </Col>
    ))
  }
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
          <Row className="justify-content-md-center">{renderAllPosts()}</Row>
        </Container>
      </div>
    </div>
  )
}

export default Home
