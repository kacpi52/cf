import React, { useState } from 'react'
import './AddEditPostModal.scss'
import Modal from 'react-modal'
import {
  addSingleDataAxios,
  editSingleDataAxios,
} from 'src/lib/apiService/apiCarPostService'
import { addEditPostModalInterface } from 'src/typings/sharedInterfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faCarSide, faTired } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'

const AddEditPostModal: React.FC<addEditPostModalInterface> = ({
  _id,
  brand,
  model,
  productionYear,
  frontWheelSize,
  frontWheelWide,
  rearWheelSize,
  rearWheelWide,
  isCustomBody,
  kindOfBody,
  isStockSuspension,
  kindOfSuspension,
  isOpenPostModal,
  toggleModal,
  reqMethod,
}) => {
  const [errorState, setErrorState] = useState(false),
    [editData, setEditData] = useState({
      brand,
      model,
      productionYear,
      frontWheelSize,
      frontWheelWide,
      rearWheelSize,
      rearWheelWide,
      isCustomBody,
      kindOfBody,
      isStockSuspension,
      kindOfSuspension,
    })
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
  const sendAxiosReq = async (): Promise<void> => {
    if (reqMethod === 'put') {
      const editCarPost = await editSingleDataAxios(
        `/carposts/${_id}/edit`,
        editData
      )
      console.log(editCarPost)
      toggleModal('post')
    } else if (reqMethod === 'post') {
      const addCarPost = await addSingleDataAxios('/carposts/add', editData)
      console.log(addCarPost)
      toggleModal('post')
    } else {
      setErrorState(true)
    }
  }
  return (
    <Modal isOpen={isOpenPostModal} className="editModal__content">
      <div className="editModal__content__formBox">
        <section>
          <h2>{reqMethod === 'put' ? 'Edit post ' : 'Add post'}</h2>

          <div className="editModal__content__formBox__inputBox">
            <input
              type="text"
              name="brand"
              required={reqMethod === 'put' ? false : true}
              onChange={inputChangeHandler}
              value={editData.brand}
            />
            <span>
              <FontAwesomeIcon icon={faCarSide} /> Brand
            </span>
            <i></i>
          </div>
          <div className="editModal__content__formBox__inputBox">
            <input
              type="text"
              name="model"
              required={reqMethod === 'put' ? false : true}
              onChange={inputChangeHandler}
              value={editData.model}
            />
            <span>
              <FontAwesomeIcon icon={faCar} /> Model
            </span>
            <i></i>
          </div>
          <div className="editModal__content__formBox__inputBox">
            <input
              type="number"
              name="productionYear"
              required={reqMethod === 'put' ? false : true}
              onChange={inputChangeHandler}
              value={editData.productionYear}
            />
            <span>
              <FontAwesomeIcon icon={faCalendarDays} /> Production Year
            </span>
            <i></i>
          </div>
          <div className="editModal__content__formBox__inputBox">
            <input
              type="number"
              name="frontWheelSize"
              required={reqMethod === 'put' ? false : true}
              onChange={inputChangeHandler}
              value={editData.frontWheelSize}
            />
            <span>
              <FontAwesomeIcon icon={faTired} /> Front Wheel Size
            </span>
            <i></i>
          </div>
          <div className="editModal__content__formBox__inputBox">
            <input
              type="number"
              name="frontWheelWide"
              required={reqMethod === 'put' ? false : true}
              onChange={inputChangeHandler}
              value={editData.frontWheelWide}
            />
            <span>
              <FontAwesomeIcon icon={faTired} /> Front Wheel Wide
            </span>
            <i></i>
          </div>
          <div className="editModal__content__formBox__inputBox">
            <input
              type="number"
              name="rearWheelSize"
              required={reqMethod === 'put' ? false : true}
              onChange={inputChangeHandler}
              value={editData.rearWheelSize}
            />
            <span>
              <FontAwesomeIcon icon={faTired} /> Rear Wheel Size
            </span>
            <i></i>
          </div>
          <div className="editModal__content__formBox__inputBox">
            <input
              type="number"
              name="rearWheelWide"
              required={reqMethod === 'put' ? false : true}
              onChange={inputChangeHandler}
              value={editData.rearWheelWide}
            />
            <span>
              <FontAwesomeIcon icon={faTired} /> Rear Wheel Wide
            </span>
            <i></i>
          </div>
          <div className="editModal__content__formBox__inputBox">
            <select name="isCustomBody" onChange={selectChangeHandler}>
              <option value={'true'}>Yes</option>
              <option value={'false'} defaultChecked={true}>
                No
              </option>
            </select>
            <span>
              <FontAwesomeIcon icon={faTired} /> is custom body
            </span>
            <i></i>
          </div>
          <div className="editModal__content__formBox__inputBox">
            <input
              type="text"
              name="kindOfBody"
              required={reqMethod === 'put' ? false : true}
              onChange={inputChangeHandler}
              value={editData.kindOfBody}
            />
            <span>
              <FontAwesomeIcon icon={faCar} /> kind of body
            </span>
            <i></i>
          </div>
          <div className="editModal__content__formBox__inputBox">
            <select name="isStockSuspension" onChange={selectChangeHandler}>
              <option value={'true'}>Yes</option>
              <option value={'false'} defaultChecked={true}>
                No
              </option>
            </select>
            <span>
              <FontAwesomeIcon icon={faTired} /> is custom body
            </span>
            <i></i>
          </div>
          <div className="editModal__content__formBox__inputBox">
            <input
              type="text"
              name="kindOfSuspension"
              required={reqMethod === 'put' ? false : true}
              onChange={inputChangeHandler}
              value={editData.kindOfSuspension}
            />
            <span>
              <FontAwesomeIcon icon={faCar} /> kind of suspension
            </span>
            <i></i>
          </div>
          <div>
            <button
              onClick={() => {
                sendAxiosReq()
              }}
            >
              {reqMethod === 'put' ? 'Edit post ' : 'Add post'}
            </button>{' '}
            <button
              onClick={() => {
                toggleModal('post')
              }}
            >
              Close
            </button>
          </div>
        </section>
      </div>
    </Modal>
  )
}

export default AddEditPostModal
