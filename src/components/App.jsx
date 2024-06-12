import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { groupsSet, setItemOne, startItems } from '../store/listReducer'
import Add from './Add'
import Blur from './Blur'
import Controls from './Controls'
import Main from './Main'

const App = () => {
	const isOpen = useSelector(state => state.menu.isOpen)
	const { items, groupValue, groups } = useSelector(state => state.list)

	const dispatch = useDispatch()
	useEffect(() => {
		if (isOpen) {
			document.body.style.background = '#151515'
		} else {
			document.body.style.background = '#202020'
		}
	}, [isOpen])
	useEffect(() => {
		if (localStorage.getItem('arr')) {
			dispatch(setItemOne(JSON.parse(localStorage.getItem('arr'))))
			dispatch(startItems())
		} else {
			dispatch(startItems())
		}
	}, [])
	useEffect(() => {
		if (localStorage.getItem('arr-g')) {
			console.log(JSON.parse(localStorage.getItem('arr-g')))
			dispatch(groupsSet(JSON.parse(localStorage.getItem('arr-g'))))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('arr', JSON.stringify(items))
	}, [items])
	useEffect(() => {
		localStorage.setItem('arr-g', JSON.stringify(groups))
	}, [groups])
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
