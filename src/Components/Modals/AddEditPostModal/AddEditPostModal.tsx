import React, { useState } from 'react'
import './AddEditPostModal.scss'
import Modal from 'react-modal'
import {
  addSingleDataAxios,
  editSingleDataAxios,
} from 'src/lib/apiService/apiCarPostService'
import { addEditPostModalInterface } from 'src/utils/sharedInterfaces'

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
    setEditData({
      ...editData,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }
  const sendAxiosReq = (): void => {
    if (reqMethod === 'put') {
      editSingleDataAxios(`/carposts/${_id}/edit`, editData)
      toggleModal('post')
    } else if (reqMethod === 'post') {
      addSingleDataAxios('/carposts/add', editData)
      console.log(editData)
      toggleModal('post')
    } else {
      setErrorState(true)
    }
  }
  return (
    <Modal isOpen={isOpenPostModal} className="editModal">
      <div className="editModal__content">
        <h5>{reqMethod === 'put' ? 'Edit post ' : 'Add post'}</h5>

        <label>
          Brand
          <input
            type="text"
            name="brand"
            onChange={inputChangeHandler}
            value={editData.brand}
          />
        </label>
        <label>
          Model
          <input
            type="text"
            name="model"
            onChange={inputChangeHandler}
            value={editData?.model}
          />
        </label>
        <label>
          production Year
          <input
            type="number"
            name="productionYear"
            onChange={inputChangeHandler}
            value={editData?.productionYear}
          />
        </label>
        <label>
          frontWheelSize
          <input
            type="number"
            name="frontWheelSize"
            onChange={inputChangeHandler}
            value={editData?.frontWheelSize}
          />
        </label>
        <label>
          frontWheelWide
          <input
            type="number"
            name="frontWheelWide"
            onChange={inputChangeHandler}
            value={editData?.frontWheelWide}
          />
        </label>
        <label>
          rearWheelSize
          <input
            type="number"
            name="rearWheelSize"
            onChange={inputChangeHandler}
            value={editData?.rearWheelSize}
          />
        </label>
        <label>
          rearWheelWide
          <input
            type="number"
            name="rearWheelWide"
            onChange={inputChangeHandler}
            value={editData?.rearWheelWide}
          />
        </label>
        <label>
          Custom Body
          <select
            name="isCustomBody"
            onChange={selectChangeHandler}
            value={editData?.isCustomBody}
          >
            <option value={'true'}>Yes</option>
            <option value={'false'} defaultChecked={true}>
              No
            </option>
          </select>
        </label>
        <label>
          Kind of body
          <input
            type="text"
            name="kindOfBody"
            onChange={inputChangeHandler}
            value={editData?.kindOfBody}
          />
        </label>
        <label>
          Stock suspension
          <select
            name="isStockSuspension"
            onChange={selectChangeHandler}
            value={editData?.isStockSuspension}
          >
            <option value={'true'}>Yes</option>
            <option value={'false'} defaultChecked={true}>
              No
            </option>
          </select>
        </label>
        <label>
          Kind of suspension
          <input
            type="text"
            name="kindOfSuspension"
            onChange={inputChangeHandler}
            value={editData?.kindOfSuspension}
          />
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
              toggleModal('post')
            }}
          >
            close
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default AddEditPostModal
