import { Row, Col, Image } from 'react-bootstrap'
import React from 'react'
import { carPostDetailInterface } from 'src/typings/sharedInterfaces'

const PostDetails: React.FC<carPostDetailInterface> = ({
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
    <>
      <Row className="justify-content-md-center">
        <Col xs={12}>
          <div className="SpecificPost__content__title">
            {brand} {model} {productionYear}
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} className="SpecificPost__content__image">
          {' '}
          <Image
            src="https://mklr.pl/uimages/services/motokiller/i18n/pl_PL/201702/$_bmw_e36_stance_gleba_$1486680344_by_ML9.jpg?1486680344"
            fluid={true}
          />
        </Col>
        <Col xs={12} md={6} className="SpecificPost__content__desc">
          <Row>
            <Col>Front wheel size : {frontWheelSize}</Col>
            <Col>Front wheel wide : {frontWheelWide}</Col>
          </Row>
          <Row>
            <Col>Rear wheel size : {rearWheelSize}</Col>
            <Col>Rear wheel wide : {rearWheelWide}</Col>
          </Row>
          <Row>
            <Col>Is stock body : {isCustomBody}</Col>
            <Col>What kind : {kindOfBody}</Col>
          </Row>
          <Row>
            <Col>Is stock suspension : {isStockSuspension}</Col>
            <Col>What kind : {kindOfSuspension}</Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default PostDetails
