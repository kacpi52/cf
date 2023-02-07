import React, { ReactElement } from 'react'
import './SingleElem.scss'
interface singleProps {
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
      <h1>singleElem</h1>
      {brand} , {model} , {productionYear}
    </div>
  )
}

export default SingleElem
