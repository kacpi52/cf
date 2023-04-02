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
            <Col>
              <h1>User Page</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <button
                className="btn-block"
                onClick={() => {
                  setIsOpenPostModal(true)
                }}
              >
                Add new post
              </button>
            </Col>
            <Col xs={6}>
              <button
                className="btn-block"
                onClick={() => {
                  setIsOpenUserModal(true)
                }}
              >
                Add new user
              </button>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="User__content__loginBox">
                <form>
                  <h2>Sign in</h2>
                  <div className="User__content__loginBox__inputBox">
                    <input type="text" required={true} />
                    <span>Username</span>
                    <i></i>
                  </div>
                  <div className="User__content__loginBox__inputBox">
                    <input type="password" required={true} />
                    <span>Password</span>
                    <i></i>
                  </div>
                  <div className="User__content__loginBox__linkBox">
                    <a href="/">Forgot Password</a>
                    <a href="/">Signup</a>
                  </div>
                  <button className="User__content__loginBox__button">
                    Login
                  </button>
                </form>
              </div>
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
