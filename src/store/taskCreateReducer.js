const defaultState = {
	inputValue: '',
	selectValue: '',
	isError: '',
}
const input = 'input'
const select = 'select'
export const taskCreateReducer = (state = defaultState, action) => {
	switch (action.type) {
		case input:
			return { ...state, inputValue: action.payload }
		case select:
			return { ...state, selectValue: action.payload }

		default:
			return state
	}
}

export const changeInput = payload => {
	return {
		type: input,
		payload,
	}
}
export const changeSelect = payload => {
	return {
		type: select,
		payload,
	}
}
//export const addItem = payload => ({
//	type: add,
//	payload,
//})
