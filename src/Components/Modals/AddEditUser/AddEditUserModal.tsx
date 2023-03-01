import React, { useState } from 'react'
import './AddEditUserModal.scss'
import Modal from 'react-modal'
import { addEditUserModalInterface } from 'src/utils/sharedInterfaces'

const AddEditUserModal: React.FC<addEditUserModalInterface> = ({
  _id,
  login,
  email,
  password,
  isAdmin,
  isOpenUserModal,
  toggleModal,
  reqMethod,
}) => {
  const [errorState, setErrorState] = useState(false),
    [editData, setEditData] = useState({ login, email, password, isAdmin })
  const inputChangeHandler = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    setEditData({
      ...editData,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }
  const selectChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    if (event.currentTarget.value === 'false') {
      setEditData({
        ...editData,
        [event.currentTarget.name]: false,
      })
    } else if (event.currentTarget.value === 'true') {
      setEditData({
        ...editData,
        [event.currentTarget.name]: true,
      })
    }
  }
  const sendAxiosReq = (): void => {
    if (reqMethod === 'put') {
      //edit(`/user/${_id}/edit`, editData)
      toggleModal('user')
    } else if (reqMethod === 'post') {
      //add('/user/register', editData)
      console.log(editData)
      toggleModal('user')
    } else {
      setErrorState(true)
    }
  }
  return (
    <Modal isOpen={isOpenUserModal} className="editModal">
      <div className="editModal__content">
        <h5>User</h5>

        <label>
          Login
          <input
            type="text"
            name="login"
            onChange={inputChangeHandler}
            value={editData.login}
          />
        </label>
        <label>
          E-mail
          <input
            type="text"
            name="email"
            onChange={inputChangeHandler}
            value={editData?.email}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            onChange={inputChangeHandler}
            value={editData?.password}
          />
        </label>
        <label>
          Is admin
          <select name="isAdmin" onChange={selectChangeHandler}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>

        <div>
          <button
            onClick={() => {
              sendAxiosReq()
            }}
          >
            send
          </button>{' '}
          <button
            onClick={() => {
              toggleModal('user')
            }}
          >
            close
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default AddEditUserModal
