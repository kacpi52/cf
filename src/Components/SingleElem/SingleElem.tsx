import React from 'react'
import { Image } from 'react-bootstrap'
import './SingleElem.scss'
import { Link } from 'react-router-dom'

interface singleProps {
  // zrobic tu porzadek z tymi interfejsami itd
  _id: string
  brand: string
  model: string
  productionYear: number
  frontWheelSize: number
  frontWheelWide: number
  rearWheelSize: number
  rearWheelWide: number
  isCustomBody: boolean
  kindOfBody?: string
  isStockSuspension: boolean
  kindOfSuspension: string
}
const SingleElem: React.FC<singleProps> = ({
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
      <div className="singleElem__title">
        {brand} {model} {productionYear}
      </div>
      <div className="singleElem__content">
        <span className="singleElem__content__image">
          <Image
            src="https://mklr.pl/uimages/services/motokiller/i18n/pl_PL/201702/$_bmw_e36_stance_gleba_$1486680344_by_ML9.jpg?1486680344"
            fluid={true}
          />
        </span>
        <span className="singleElem__content__desc">
          Front wheel : size {frontWheelSize} wide {frontWheelWide} <br />
          Rear wheel : size {rearWheelSize} wide {rearWheelWide}
        </span>
        <button className="singleElem__content__button" onClick={() => {}}>
          <a href="/single">Show Details</a>
        </button>
        <Link to={`/single/${_id}`} state={{ id: _id }}>
          {' '}
          link routerowy{' '}
        </Link>
      </div>
    </div>
  )
}

export default SingleElem
