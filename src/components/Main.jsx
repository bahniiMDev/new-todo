import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom'
import List from '../components/List'
import NavBar from '../components/NavBar'
import ListGroupPage from './ListGroupPage'

const Main = () => {
	const isOpen = useSelector(state => state.menu.isOpen)
	//const groups = useSelector(state => state.list.groups)

	return (
		<div
			className={` bg-zinc app md:p-6 p-4 w-full h-full ${
				isOpen ? 'menu-activ-app' : ''
			}`}
		>
			<NavBar />
			<Switch>
				<Route path={'/posts'} exact>
					<List />
				</Route>
				<Route path={'/'} exact>
					<List />
				</Route>
				<Route path={'/posts/:group'} exact>
					<ListGroupPage />
				</Route>
			</Switch>
		</div>
	)
}

export default Main
