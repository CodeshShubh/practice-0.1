import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from "./reducers/userReducer"


export const store = configureStore({
    reducer:{
        user: userReducer,

    }
})


export const server = 'http://localhost:3500/api/v1'