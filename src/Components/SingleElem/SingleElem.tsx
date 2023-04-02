import React from 'react'
import { Image } from 'react-bootstrap'
import './SingleElem.scss'
import { Link } from 'react-router-dom'
import { carPostDetailInterface } from 'src/typings/sharedInterfaces'

const SingleElem: React.FC<carPostDetailInterface> = ({
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
}) => {
  return (
    <div className="singleElem">
      <span>
        <img
          className="singleElem__image"
          src="https://mklr.pl/uimages/services/motokiller/i18n/pl_PL/201702/$_bmw_e36_stance_gleba_$1486680344_by_ML9.jpg?1486680344"
        />
      </span>
      <div className="singleElem__title">
        {brand} {model} {productionYear}
      </div>
      <span className="singleElem__desc">
        Front wheel : size {frontWheelSize} wide {frontWheelWide} <br />
        Rear wheel : size {rearWheelSize} wide {rearWheelWide}
      </span>
      <div>
        <button className="btn-block" onClick={() => {}}>
          <Link
            to={`/single/${_id}`}
            state={{ id: _id }}
            className="singleElem__link"
          >
            SHOW DETAILS
          </Link>
        </button>
      </div>
    </div>
  )
}

export default SingleElem
