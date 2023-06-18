const initState = {
    count:0,
    username:"john"
}

// export const reducer = (state = initState, action = {}) => {
//     switch(action.type){
//         case 'INCREMENT_COUNTER':
//             return {...state, count: state.count + 1}
//
//         case 'DECREMENT_COUNTER':
//             return {...state, count: state.count - 1}
//
//         default :
//
//     }
// }

export const reducer = (state = initState, action = {}) => {
    if(action.type === 'INCREMENT_COUNTER') {
        return {...state, count: state.count + 1}
    } else if (action.type === 'DECREMENT_COUNTER') {
        return {...state, count: state.count - 1}
    } else {
        return {...state}
    }
}