import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startItems } from '../store/listReducer'
import Add from './Add'
import Blur from './Blur'
import Controls from './Controls'
import Main from './Main'

const App = () => {
	const isOpen = useSelector(state => state.menu.isOpen)

	const dispatch = useDispatch()
	useEffect(() => {
		if (isOpen) {
			document.body.style.background = '#151515'
		} else {
			document.body.style.background = '#202020'
		}
	}, [isOpen])
	useEffect(() => {
		dispatch(startItems())
	}, [])
	return (
		<div className='app-menu-cont'>
			<Controls />
			<Blur />
			<Main />
			<Add />
		</div>
	)
}

export default App
