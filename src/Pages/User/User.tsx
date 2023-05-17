import React, { useState } from 'react'
import './User.scss'
import { Container, Row, Col } from 'react-bootstrap'
import NavBar from 'src/Components/NavBar/NavBar'
import AddEditPostModal from 'src/Components/Modals/AddEditPostModal/AddEditPostModal'
import AddEditUserModal from 'src/Components/Modals/AddEditUser/AddEditUserModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { addEditUserInterface } from 'src/typings/sharedInterfaces'
import { loginUserAxios } from 'src/lib/apiService/apiUserService'
import { loginUserType } from 'src/typings/sharedTypes'

const User: React.FC<loginUserType> = ({ email, password }) => {
  const [isOpenUserModal, setIsOpenUserModal] = useState(false),
    [isOpenPostModal, setIsOpenPostModal] = useState(false),
    [errorState, setErrorState] = useState(false),
    [loginData, setLoginData] = useState({ email, password })

  const inputChangeHandler = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    setLoginData({
      ...loginData,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }
  const selectChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    if (event.currentTarget.value === 'false') {
      setLoginData({
        ...loginData,
        [event.currentTarget.name]: false,
      })
    } else if (event.currentTarget.value === 'true') {
      setLoginData({
        ...loginData,
        [event.currentTarget.name]: true,
      })
    }
  }
  const sendAxiosReq = async (): Promise<void> => {
    try {
      const loginRequest = await loginUserAxios('/user/login', loginData)
    } catch (error: any) {
      setErrorState(error)
    }
  }
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
                <section>
                  <h2>Sign in</h2>
                  <div className="User__content__loginBox__inputBox">
                    <input
                      type="text"
                      name="email"
                      required={true}
                      onChange={inputChangeHandler}
                      value={loginData?.email}
                    />
                    <span>
                      <FontAwesomeIcon icon={faUser} /> E-mail
                    </span>
                    <i></i>
                  </div>
                  <div className="User__content__loginBox__inputBox">
                    <input
                      type="password"
                      required={true}
                      name="password"
                      onChange={inputChangeHandler}
                      value={loginData?.password}
                    />
                    <span>
                      <FontAwesomeIcon icon={faLock} /> Password
                    </span>
                    <i></i>
                  </div>
                  <div className="User__content__loginBox__linkBox">
                    <a href="/">Forgot Password</a>
                    <a href="/register">Register</a>
                  </div>

                  <button
                    className="User__content__loginBox__button"
                    onClick={() => {
                      sendAxiosReq()
                    }}
                  >
                    Login
                  </button>
                </section>
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
