import * as types from "./actionsTypes"

const initialState = {
    num : 0,
    test:true
}

/* 
{
    type: "incrementer"
}

{
    type:"decrementer"
}

{
    type:"reset"
}

{
    type:"incrementerBy",
    payload:5
}

{
    type:"decrementerBy",
    payload:4
} */



const reducer = (state = initialState, action) => {

    /* if(action.type == "incrementer") {
        return  { ...state, num : state.num + 1}
    }

    if(action.type == "decrementer"){
        return {...state, num:state.num - 1}
    } 
    return state
    */

        switch (action.type) {
            case types.INCREMENTER:
                return { ...state, num : state.num + 1}
            case types.DECREMENTER:
                return { ...state, num : state.num - 1}
            case types.RESET:
                return {...state, num:0}
            case types.INCREMENTERBY:
                return {...state, num : state.num + action.payload}
            case types.DECREMENTERBY:
                return {...state, num : state.num - action.payload}
            default:
                return state
        }
}

export default reducer