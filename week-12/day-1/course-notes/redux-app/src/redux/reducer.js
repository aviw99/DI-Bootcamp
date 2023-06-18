const initState = {
    property_one:'prop one from redux',
    property_two:'prop two from redux',
    count: 0
}

export const reducer = (state= initState, action={}) => {
    switch (action.type) {
        case 'PROP_ONE':
            return {...state, property_one: action.payload}
        case 'INCREMENT_COUNTER':
            return{...state, count: state.count + 1}

        case 'DECREMENT_COUNTER':
            return{...state, count: state.count - 1}


        default:
            return {...state}
    }
}

