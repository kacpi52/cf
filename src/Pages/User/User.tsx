import React, { useState } from 'react'
import './User.scss'
import { Container, Row, Col } from 'react-bootstrap'
import NavBar from 'src/Components/NavBar/NavBar'
import AddEditPostModal from 'src/Components/AddEditPostModal/AddEditPostModal'

const User: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const toggleModal = (val: boolean) => {
    setIsOpenModal(val)
  }

  return (
    <div className="User">
      <NavBar />
      <div className="User__content">
        <Container>
          <Row>
            <Col>User Page</Col>
          </Row>
          <Row>
            <Col>
              <button
                onClick={() => {
                  setIsOpenModal(true)
                }}
              >
                Add new post
              </button>
            </Col>
          </Row>
        </Container>
        <AddEditPostModal
          reqMethod="post"
          toggleModal={toggleModal}
          isOpenModal={isOpenModal}
        />
      </div>
    </div>
  )
}

export default User
