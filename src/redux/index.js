import {combineReducers} from "redux"
import {infoAboutUserReducer} from "../store/reducer/textReducer";

export const rootReducer = combineReducers({
    users: infoAboutUserReducer
})

