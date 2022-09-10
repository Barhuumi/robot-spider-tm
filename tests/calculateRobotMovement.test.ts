import { calculateRobotMovement } from '../src/index'
import { IInput } from '../src/types'

describe('Given a starting coordinate of (0,0)', () => {
  const input: IInput = {
    coordinates: {
      x: 0,
      y: 0,
    },
    directions: 'FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF'
  }
  it('then the robot movement is calculated', async () => {
    const response = calculateRobotMovement(input)

    expect(response).toEqual({
      coordinates: {
        x: -1,
        y: 21
      }
    })
  })
})

describe('Given a starting coordinate of (3,6)', () => {
  const input: IInput = {
    coordinates: {
      x: 3,
      y: 6,
    },
    directions: 'FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF'
  }
  it('then the robot movement is calculated', async () => {
    const response = calculateRobotMovement(input)

    expect(response).toEqual({
      coordinates: {
        x: 4,
        y: 19
      }
    })
  })
})

describe('Given a starting coordinate of (0,7)', () => {
  const input: IInput = {
    coordinates: {
      x: 0,
      y: 7,
    },
    directions: 'RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR'
  }
  it('then the robot movement is calculated', async () => {
    const response = calculateRobotMovement(input)

    expect(response).toEqual({
      coordinates: {
        x: 3,
        y: 15
      }
    })
  })
})