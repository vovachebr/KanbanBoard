import { combineReducers } from 'redux'
import homeReducer from './homeReducer'
import boardReducer from './boardReducer'
import boardSettingsReducer from './boardSettingsReducer'
import { dialogReducer } from "redux-dialog";

const main = combineReducers({
  homeReducer,
  boardReducer,
  boardSettingsReducer,
  dialogReducer
})

export default main