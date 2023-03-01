import React, { useEffect, useState } from 'react'
import './SpecificPost.scss'
import NavBar from 'src/Components/NavBar/NavBar'
import { Link, useLocation } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import {
  deleteSingleCarPostsAxios,
  getSingleCarPostsAxios,
} from 'src/lib/apiService'
import { carPostType } from 'src/utils/sharedTypes'
import PostDetails from 'src/Components/PostDetails/PostDetails'
import AddEditPostModal from 'src/Components/Modals/AddEditPostModal/AddEditPostModal'

const SpecificPost: React.FC = () => {
  const [loadingState, setLoadingState] = useState(true),
    [reloadTrigger, setReloadTrigger] = useState(false),
    [loadDataError, setLoadDataError] = useState(false), // to samo co z oblusga bledow
    [postDataState, setPostDataState] = useState<carPostType>(),
    [isOpenPostModal, setIsOpenPostModal] = useState(false)
  const { state } = useLocation()
  const idSelectedPost = state.id.toString()
  const toggleModal = (val: string) => {
    if (val === 'post') {
      setIsOpenPostModal(!isOpenPostModal)
      setReloadTrigger(!reloadTrigger)
    }
  }

  useEffect(() => {
    const getDataFromApi = async () => {
      const loadedData = await getSingleCarPostsAxios(
        `/carposts/${idSelectedPost}`
      )
      setLoadingState(false)
      setPostDataState(loadedData)
    }
    try {
      getDataFromApi()
    } catch (error) {
      setLoadDataError(true)
    }
  }, [reloadTrigger])

  return loadingState ? (
    <div>Loading icon</div>
  ) : (
    <div className="SpecificPost">
      <NavBar />
      <div className="SpecificPost__content">
        <Container>
          <PostDetails {...postDataState!} />

          <Row>
            <Col className="SpecificPost__content__title">
              <button
                className="SpecificPost__content__button"
                onClick={() => {
                  setIsOpenPostModal(true)
                }}
              >
                Edit
              </button>
            </Col>
            <Col className="SpecificPost__content__title">
              <button
                className="SpecificPost__content__button"
                onClick={() => {
                  deleteSingleCarPostsAxios(
                    `/carposts/${idSelectedPost}/delete`
                  )
                }}
              >
                <Link to="/">Delete post</Link>
              </button>
            </Col>
          </Row>
          <AddEditPostModal
            {...postDataState}
            reqMethod="put"
            toggleModal={toggleModal}
            isOpenPostModal={isOpenPostModal}
          />
        </Container>
      </div>
    </div>
  )
}

export default SpecificPost
