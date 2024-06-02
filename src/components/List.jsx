import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { groupSet } from '../store/listReducer'
import ListGroup from './UI/ListGroup'
import Task from './UI/Task'

const List = () => {
	const { items, itemsToShow, groups } = useSelector(state => state.list)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(groupSet(''))
	}, [])
	return (
		<main className='flex flex-col transition-all'>
			{itemsToShow.length > 0 ? (
				groups.map(item => (
					<ListGroup key={item.color} {...item}>
						{itemsToShow
							.filter(item2 => item2.group === item.body)
							.map(item3 => (
								<Task
									key={item3.id}
									body={item3.body}
									id={item3.id}
									isSucsses={item3.isSucsses}
								/>
							))}
					</ListGroup>
				))
			) : (
				<p>Not task</p>
			)}
		</main>
	)
}

export default List
