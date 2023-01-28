import { Schema, model } from 'mongoose'

//document interface
interface Car {
  brand: string
  model: string
  productionYear: number
  frontWheelSize: number
  frontWheelWide: number
  rearWheelSize: number
  rearWheelWide: number
  isCustomBody: boolean
  kindOfBody?: string
}
//schema
const carPostSchema = new Schema<Car>({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  productionYear: { type: Number, required: true, min: 1930 },
  frontWheelSize: { type: Number, required: true },
  frontWheelWide: { type: Number, required: true },
  rearWheelSize: { type: Number, required: true },
  rearWheelWide: { type: Number, required: true },
  isCustomBody: { type: Boolean, required: true },
  kindOfBody: String,
})

const CarPost = model<Car>('CarPost', carPostSchema)

export default CarPost
