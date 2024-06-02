const defaultState = {
	isOpen: false,
}

const set = 'set'
export const menuReducer = (state = defaultState, action) => {
	switch (action.type) {
		case set:
			return { ...state, isOpen: action.payload }
		default:
			return state
	}
}

export const setMenu = payload => {
	return {
		type: set,
		payload,
	}
}
