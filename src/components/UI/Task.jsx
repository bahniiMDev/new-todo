import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ShowItems, changeSucsses } from '../../store/listReducer'

const Task = ({ body, title = false, id, color, isSucsses, i }) => {
	const dispatch = useDispatch()
	const { items, groupValue, inputSearch } = useSelector(state => state.list)
	return (
		<div className='flex items-cente justify-between'>
			<div
				onClick={e => {
					if (e.target.closest('.task-123')) {
						if (!title) {
							dispatch(changeSucsses(id))
							dispatch(
								ShowItems(
									groupValue
										? items
												.filter(item => item.group === groupValue)
												.filter(item =>
													item.body
														.toLowerCase()
														.includes(inputSearch.toLowerCase())
												)
										: items.filter(item =>
												item.body
													.toLowerCase()
													.includes(inputSearch.toLowerCase())
										  )
								)
							)
						}
					}
				}}
				className={`mb-1 task-123 flex items-center origin-left ${
					!title ? 'cursor-pointer' : 'pointer-events-none'
				}`}
				id='task'
				//style={{
				//	animationDelay: `${i * 0.15}s`,
				//}}
			>
				<div className='h-[20px] aspect-square mr-4 relative flex-center'>
					<button
						className={`h-full w-full absolute top-0 left-0 flex-center block  transition-transform ${
							!isSucsses ? 'scale-0' : 'scale-1'
						}`}
						style={{}}
					>
						<svg
							width='17'
							height='12'
							viewBox='0 0 17 12'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								className='icon'
								d='M5.20948 11.5602C5.04155 11.5676 4.87603 11.5183 4.73948 11.4202L0.249483 7.71024C-0.0397957 7.45413 -0.0833516 7.01857 0.149483 6.71024C0.405152 6.4223 0.837337 6.37476 1.14948 6.60024L5.14948 9.86024L15.6495 0.150241C15.96 -0.0828876 16.3971 -0.0404685 16.657 0.248016C16.9169 0.5365 16.9136 0.97565 16.6495 1.26024L5.71948 11.3602C5.58026 11.488 5.39843 11.5593 5.20948 11.5602Z'
								fill='rgba(235, 235, 245, 0.6)'
							/>
						</svg>
					</button>
					<button
						className={`block h-full w-full absolute transition-transform rounded-full
					${isSucsses ? 'scale-0' : 'scale-1'} ${color ? 'scale-[1.1]' : null}`}
						style={{
							backgroundColor: color ? color : '',
						}}
						id='circle'
					></button>
				</div>

				<p
					className={
						title
							? 'text-lg font-semibold select-none pointer-events-none whitespace-nowrap overflow-auto'
							: 'text-base text-gray-300 font-light select-none relative flex items-center pointer-events-none whitespace-nowrap overflow-auto'
					}
				>
					{body.includes('void') ? '' : body}
					{!title && (
						<span
							className={`${
								isSucsses ? 'w-[106%]' : 'w-0'
							} line-show translate-y-[2px] rounded-full bg-[#A2A2A9] absolute  h-[2px] left-[-3%]`}
						></span>
					)}
				</p>
			</div>
			{/*{!title && (
				<IconButton className='icon-reject flex justify-end'>
					<svg
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4C0 1.79086 1.79086 0 4 0ZM17.7678 17.7678C18.2366 17.2989 18.5 16.663 18.5 16V4C18.5 3.33696 18.2366 2.70107 17.7678 2.23223C17.2989 1.76339 16.663 1.5 16 1.5H4C2.61929 1.5 1.5 2.61929 1.5 4V16C1.5 16.663 1.76339 17.2989 2.23223 17.7678C2.70107 18.2366 3.33696 18.5 4 18.5H16C16.663 18.5 17.2989 18.2366 17.7678 17.7678Z'
							fill='rgba(235, 235, 245, 0.6)'
						/>
						<path
							d='M13.69 6.73C13.3972 6.43755 12.9228 6.43755 12.63 6.73L10.21 9.15L7.79 6.73C7.49449 6.45464 7.03399 6.46277 6.74838 6.74838C6.46277 7.03399 6.45464 7.49449 6.73 7.79L9.15 10.21L6.73 12.63C6.43755 12.9228 6.43755 13.3972 6.73 13.69C7.02282 13.9825 7.49718 13.9825 7.79 13.69L10.21 11.27L12.63 13.69C12.7705 13.8307 12.9612 13.9098 13.16 13.91C13.358 13.9057 13.5472 13.8272 13.69 13.69C13.9825 13.3972 13.9825 12.9228 13.69 12.63L11.27 10.21L13.69 7.79C13.9825 7.49718 13.9825 7.02282 13.69 6.73Z'
							fill='rgba(235, 235, 245, 0.6)'
						/>
					</svg>
				</IconButton>
			)}*/}
		</div>
	)
}

export default Task
