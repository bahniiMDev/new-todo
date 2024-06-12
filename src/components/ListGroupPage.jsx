import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	useHistory,
	useLocation,
	useParams,
} from 'react-router-dom/cjs/react-router-dom'
import { ShowItems, groupSet } from '../store/listReducer'
import ListGroup from './UI/ListGroup'
import Task from './UI/Task'

const ListGroupPage = () => {
	const { items, groupValue, inputSearch } = useSelector(state => state.list)
	const param = useParams()
	const dispatch = useDispatch()

	const history = useHistory()
	const location = useLocation()

	useEffect(() => {
		if (param.group) {
			dispatch(groupSet(param.group))
			dispatch(
				ShowItems(
					items
						.filter(item => item.group === param.group)
						.filter(item =>
							item.body.toLowerCase().includes(inputSearch.toLowerCase())
						)
				)
			)
		}
	}, [groupValue])

	const { itemsToShow } = useSelector(state => state.list)

	return (
		<div>
			<ListGroup page={true} body={groupValue}>
				{itemsToShow.map(item => (
					<Task {...item} key={item.id} />
				))}
			</ListGroup>
		</div>
	)
}

export default ListGroupPage
