import { DECREMENT, INCREMENT } from "./ActionType"

const  initialState ={
    value:0
}
const counterReducer =(state = initialState, action)=> {
    console.log(state)
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                value:state.value + action.payload
            }
        case DECREMENT:
            return{
                ...state,
                value:state.value - 1
            }
        default:
            return state;
    }
}

export default counterReducer;