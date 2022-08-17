import { DECREMENT, INCREMENT } from './ActionType'

export const increment = (value, name, stock) => {
  return {
    type: INCREMENT,
    payload: { value, name, stock },
  }
}
export const decrement = (value, name, stock) => {
  return {
    type: DECREMENT,
    payload: { value, name, stock },
  }
}
