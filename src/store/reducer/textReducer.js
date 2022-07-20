import { ADD_USER, GET_USER} from "../constanst/constants"

export const initialState = {
}

export const infoAboutUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                infoAboutUserReducer: action.payload
            }
        case GET_USER:
            return {
                ...state
            }
        default:
            return  state
    }
}