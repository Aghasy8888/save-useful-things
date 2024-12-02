type ID = string

type DropCallback = (stackId: ID, cardId: ID) => void

type Dimensions = {
  left: number
  top: number
  width: number
  height: number
}

type Point = {
  x: number
  y: number
}

type Card = {
  id: string
  color: string
}
