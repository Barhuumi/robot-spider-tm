import { IInput, IResponse } from './types'

export const calculateRobotMovement = (input: IInput): IResponse => {
  const directionsArray = input.directions.split('')

  const forwardSteps: number = directionsArray.filter(direction => direction === 'F').length
  const backwardSteps: number = directionsArray.filter(direction => direction === 'B').length
  const rightSteps: number = directionsArray.filter(direction => direction === 'R').length
  const leftSteps: number = directionsArray.filter(direction => direction === 'L').length

  const yAxisMovement = forwardSteps - backwardSteps
  const xAxisMovement = rightSteps - leftSteps

  const response: IResponse = {
    coordinates: {
      x: input.coordinates.x + xAxisMovement,
      y: input.coordinates.y + yAxisMovement
    }
  }

  return response
}
