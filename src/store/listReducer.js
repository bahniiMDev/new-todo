import { groups, items } from '../data/list'

const defaultState = {
	items: items,
	groups: groups,
	inputSearch: '',
	itemsToShow: [],
	groupValue: '',
	inputGroup: '',
}

const add = 'add'
const addShow = 'addS'
const start = 'start'
const changeSucsess = 'cahnge-sucsses'
const setShowItems = 'set-show-items'
const setItems = 'set-items'
const inputSet = 'input-set'
const setGroupValue = 'set-g'
const changeSucsessShow = 'sef'
const deleteGroup = 'delete-g'
const addGroup = 'add-g'
const changeInputGroup = 'cig'
const setGroups = 'dwadwa'

export const listReducer = (state = defaultState, action) => {
	switch (action.type) {
		case add:
			return {
				...state,
				items: [action.payload, ...state.items],
				//itemsToShow: [action.payload, ...state.itemsToShow],
			}
		case addShow:
			let arr = state.groupValue
				? [action.payload, ...state.itemsToShow]
						.filter(item => item.group === state.groupValue)
						.filter(item =>
							item.body.toLowerCase().includes(state.inputSearch.toLowerCase())
						)
				: [action.payload, ...state.itemsToShow].filter(item =>
						item.body.toLowerCase().includes(state.inputSearch)
				  )
			return { ...state, itemsToShow: arr }
		case changeSucsess:
			const initialValue = []
			const sumWithInitial = state.items.reduce((accumulator, currentValue) => {
				if (currentValue.id == action.payload) {
					currentValue.isSucsses = !currentValue.isSucsses
				}
				accumulator.push(currentValue)
				return accumulator
			}, initialValue)
			return { ...state, items: sumWithInitial }
		case changeSucsessShow:
			const initialValueShow = []
			const sumWithInitialShow = state.itemsToShow.reduce(
				(accumulator, currentValue) => {
					if (currentValue.id == action.payload) {
						currentValue.isSucsses = !currentValue.isSucsses
					}
					accumulator.push(currentValue)
					return accumulator
				},
				initialValueShow
			)
			return { ...state, itemsToShow: sumWithInitialShow }
		case start:
			return {
				...state,
				itemsToShow: JSON.parse(JSON.stringify([...state.items])),
			}
		case setShowItems:
			return {
				...state,
				itemsToShow: action.payload,
			}
		case setItems:
			return {
				...state,
				items: action.payload,
			}
		case inputSet:
			return {
				...state,
				inputSearch: action.payload,
			}
		case setGroupValue:
			return {
				...state,
				groupValue: action.payload,
			}
		case deleteGroup:
			return {
				...state,
				groups: state.groups.filter(item => item.body !== action.payload),
			}
		case addGroup:
			let sum1 = 1
			state.groups.forEach(item => {
				if (item.body.includes('void')) {
					++sum1
				}
			})

			return {
				...state,
				groups: [
					...state.groups,
					{
						body: state.inputGroup === '' ? 'void' + sum1 : state.inputGroup,
						color: '#000',
					},
				],
			}
		case setGroups:
			return {
				...state,
				groups: action.payload,
			}

		case changeInputGroup:
			return {
				...state,
				inputGroup: action.payload,
			}
		default:
			return state
	}
}
export const addItem = payload => ({
	type: add,
	payload,
})
export const setItemOne = payload => ({
	type: setItems,
	payload,
})
export const addItemShow = payload => ({
	type: addShow,
	payload,
})
export const startItems = () => ({
	type: start,
	payload: null,
})
export const changeSucsses = payload => ({
	type: changeSucsess,
	payload,
})
export const changeSucssesShow = payload => ({
	type: changeSucsessShow,
	payload,
})
export const ShowItems = payload => ({
	type: setShowItems,
	payload,
})
export const setInput = payload => ({
	type: inputSet,
	payload,
})
export const groupSet = payload => ({
	type: setGroupValue,
	payload,
})
export const deleteGroupFun = payload => ({
	type: deleteGroup,
	payload,
})
export const addGroupFun = payload => ({
	type: addGroup,
	payload,
})
export const changeInputFun = payload => ({
	type: changeInputGroup,
	payload,
})
export const groupsSet = payload => ({
	type: setGroups,
	payload,
})
