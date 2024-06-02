import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { thunk } from 'redux-thunk'
import { listReducer } from './listReducer'
import { menuReducer } from './menuReducer'
import { taskCreateReducer } from './taskCreateReducer'

const rootReducer = combineReducers({
	list: listReducer,
	taskCreate: taskCreateReducer,
	menu: menuReducer,
})

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
)
