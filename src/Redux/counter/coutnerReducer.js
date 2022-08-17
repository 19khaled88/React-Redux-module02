import { DECREMENT, INCREMENT } from './ActionType'

const initialState = {
  value: 0,
  soldItems: 0,
  asusStock: 20,
  dellStock: 35,
  canonStock: 72,
  asusSold: 0,
  dellSold: 0,
  canonSold: 0,
}
const counterReducer = (state = initialState, action) => {
  const pl = action
  console.log(pl.payload?.name)
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload?.value,
        soldItems: state.soldItems + 1,
        asusStock:
          action.payload?.name === 'asus'
            ? state.asusStock - 1
            : state.asusStock,
        asusSold:
          action.payload?.name === 'asus' ? state.asusSold + 1 : state.asusSold,
        dellStock:
          action.payload?.name === 'dell'
            ? state.dellStock - 1
            : state.dellStock,
        dellSold:
          action.payload?.name === 'dell' ? state.dellSold + 1 : state.dellSold,
        canonStock:
          action.payload?.name === 'canon'
            ? state.canonStock - 1
            : state.canonStock,
        canonSold:
          action.payload?.name === 'canon'
            ? state.canonSold + 1
            : state.canonSold,
      }
    case DECREMENT:
      return {
        ...state,
        value: state.value - action.payload?.value,
        soldItems: state.soldItems - 1,
        asusStock:
          action.payload?.name === 'asus'
            ? state.asusStock + 1
            : state.asusStock,
        asusSold:
          action.payload?.name === 'asus' ? state.asusSold - 1 : state.asusSold,
        dellStock:
          action.payload?.name === 'dell'
            ? state.dellStock + 1
            : state.dellStock,
        dellSold:
          action.payload?.name === 'dell' ? state.dellSold - 1 : state.dellSold,
        canonStock:
          action.payload?.name === 'canon'
            ? state.canonStock + 1
            : state.canonStock,
        canonSold:
          action.payload?.name === 'canon'
            ? state.canonSold - 1
            : state.canonSold,
      }
    default:
      return state
  }
}

export default counterReducer
