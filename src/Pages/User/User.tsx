import React, { useState } from 'react'
import './User.scss'
import { Container, Row, Col } from 'react-bootstrap'
import NavBar from 'src/Components/NavBar/NavBar'
import AddEditPostModal from 'src/Components/Modals/AddEditPostModal/AddEditPostModal'
import AddEditUserModal from 'src/Components/Modals/AddEditUser/AddEditUserModal'

const User: React.FC = () => {
  const [isOpenUserModal, setIsOpenUserModal] = useState(false),
    [isOpenPostModal, setIsOpenPostModal] = useState(false)

  const toggleModal = (val: string) => {
    if (val === 'user') {
      setIsOpenUserModal(!isOpenUserModal)
    } else if (val === 'post') {
      setIsOpenPostModal(!isOpenPostModal)
    }
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
            <Col xs={6}>
              <button
                onClick={() => {
                  setIsOpenPostModal(true)
                }}
              >
                Add new post
              </button>
            </Col>
            <Col xs={6}>
              <button
                onClick={() => {
                  setIsOpenUserModal(true)
                }}
              >
                Add new user
              </button>
            </Col>
          </Row>
        </Container>
        <AddEditPostModal
          reqMethod="post"
          toggleModal={toggleModal}
          isOpenPostModal={isOpenPostModal}
        />
        <AddEditUserModal
          reqMethod="register"
          toggleModal={toggleModal}
          isOpenUserModal={isOpenUserModal}
        />
      </div>
    </div>
  )
}

export default User
