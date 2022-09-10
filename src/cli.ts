import program from 'commander'
import inquirer from 'inquirer'

import { IInput } from './types'
import { calculateRobotMovement } from './index'

export const captureUserInput = async (): Promise<IInput> => {
  const inquirerInput = await askOptions(program)

  const xCoordinate = inquirerInput.coordinates.split(',')[0]
  const yCoordinate = inquirerInput.coordinates.split(',')[1]

  return {
    coordinates: {
      x: parseInt(xCoordinate),
      y: parseInt(yCoordinate),
    },
    directions: inquirerInput.directions.toUpperCase()
  }
}

const askOptions = async (program) => {
  const questions = []

  if (!program.coordinates) {
    questions.push({
      name: 'coordinates',
      type: 'input',
      message: 'Please enter the starting coordinates of the robot. Format: "x,y" i.e. >> 0,0' ,
      validate: (value) => /([0-9]+)\,([0-9]+)/.test(value)
    })
  }
  if (!program.directions) {
    questions.push({
      name: 'directions',
      type: 'input',
      message: 'Please enter the sequence of direction instructions for the robot. Format: Valid letters are "f" , "l", "b", "r" (not case sensitive)',
      validate: (value) => /^[fblrFBLR]+$/.test(value)

    })
  }

  return inquirer.prompt(questions)
}

const main = async () => {
  const input: IInput = await captureUserInput()
  const response = calculateRobotMovement(input)
  console.log(JSON.stringify(response, null, 2))
}

main()