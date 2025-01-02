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
            case "incrementer":
                return { ...state, num : state.num + 1}
            case "decrementer":
                return { ...state, num : state.num - 1}
            case "reset":
                return {...state, num:0}
            case "incrementerBy":
                return {...state, num : state.num + action.payload}
            case "decrementerBy":
                return {...state, num : state.num - action.payload}
            default:
                return state
        }
}

export default reducer