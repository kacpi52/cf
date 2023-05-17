import React, { useState } from 'react'
import './Register.scss'
import { Container, Row, Col } from 'react-bootstrap'
import NavBar from 'src/Components/NavBar/NavBar'
import AddEditPostModal from 'src/Components/Modals/AddEditPostModal/AddEditPostModal'
import AddEditUserModal from 'src/Components/Modals/AddEditUser/AddEditUserModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { addEditUserInterface } from 'src/typings/sharedInterfaces'
import { addSingleUserAxios } from 'src/lib/apiService/apiUserService'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const Register: React.FC<addEditUserInterface> = ({
  login,
  email,
  password,
}) => {
  const [isOpenUserModal, setIsOpenUserModal] = useState(false),
    [isOpenPostModal, setIsOpenPostModal] = useState(false),
    [errorState, setErrorState] = useState(false),
    [registerData, setRegisterData] = useState({
      login,
      email,
      password,
    })

  const inputChangeHandler = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    setRegisterData({
      ...registerData,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const sendAxiosReq = async (): Promise<void> => {
    try {
      const resData = await addSingleUserAxios('/user/register', registerData)
      console.log(resData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="Register">
      <NavBar />
      <div className="Register__content">
        <Container>
          <Row>
            <Col>
              <h1>Register user </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="Register__content__loginBox">
                <section>
                  <h2>Sign up</h2>
                  <div className="Register__content__loginBox__inputBox">
                    <input
                      type="text"
                      name="login"
                      required={true}
                      onChange={inputChangeHandler}
                      value={registerData?.login}
                    />
                    <span>
                      <FontAwesomeIcon icon={faUser} /> Login
                    </span>
                    <i></i>
                  </div>
                  <div className="Register__content__loginBox__inputBox">
                    <input
                      type="text"
                      name="email"
                      required={true}
                      onChange={inputChangeHandler}
                      value={registerData?.email}
                    />
                    <span>
                      <FontAwesomeIcon icon={faEnvelope} /> E-mail
                    </span>
                    <i></i>
                  </div>
                  <div className="Register__content__loginBox__inputBox">
                    <input
                      type="password"
                      required={true}
                      name="password"
                      onChange={inputChangeHandler}
                      value={registerData?.password}
                    />
                    <span>
                      <FontAwesomeIcon icon={faLock} /> Password
                    </span>
                    <i></i>
                  </div>
                  <div className="Register__content__loginBox__linkBox">
                    <a href="/user">Aready an user? Login</a>
                  </div>

                  <button
                    className="Register__content__loginBox__button"
                    onClick={() => {
                      sendAxiosReq()
                    }}
                  >
                    Register
                  </button>
                </section>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Register
