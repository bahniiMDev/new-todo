import React, { useEffect, useRef, useState } from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom'
import { searchImg } from '../utils'
import MenuButton from './MenuButton'

import Title from './Title'

import gsap from 'gsap'
import { useDispatch, useSelector } from 'react-redux'
import { ShowItems, setInput } from '../store/listReducer'
import IconButton from './UI/IconButton'

const NavBar = () => {
	const reficon = useRef('')
	const [inputOpen, setInputOpen] = useState(false)
	const inputRef = useRef()
	const dispatch = useDispatch()
	const { items, inputSearch, groupValue, groups } = useSelector(
		state => state.list
	)

	const [color, setColor] = useState('#000')
	useEffect(() => {
		groups.forEach(item => {
			if (item.body === groupValue) {
				setColor(item.color)
				setColor(item.color)
				console.log(item.color)
			}
		})
	}, [groupValue])

	return (
		<header className='w-full flex items-center mb-4 md:mb-6 justify-between'>
			<MenuButton />
			<Switch>
				<Route path={'/:text'} exact>
					<Title clas={color} />
				</Route>
				<Route path={'/'} exact>
					<Title text={'All Task'} />
				</Route>
			</Switch>

			<form
				action=''
				onSubmit={e => {
					e.preventDefault()
				}}
				className='flex flex-1 justify-end h-[40px] relative'
			>
				<input
					onChange={e => {
						dispatch(setInput(e.target.value))
						dispatch(
							ShowItems(
								groupValue
									? items
											.filter(item => item.group === groupValue)
											.filter(item =>
												item.body
													.toLowerCase()
													.includes(e.target.value.toLowerCase())
											)
									: items.filter(item =>
											item.body
												.toLowerCase()
												.includes(e.target.value.toLowerCase())
									  )
							)
						)
					}}
					value={inputSearch}
					ref={inputRef}
					type='text'
					className={`bg-gray-200 rounded-full relative z-[5]  w-[40px] focus:outline-none text-lg font-medium `}
					spellCheck='false'
					id='input-search'
				/>
				<IconButton
					reficon={reficon}
					className='aspect-square z-[6]  flex-center absolute h-full right-0 cursor-pointer bg-[#353537] rounded-full'
					onClick={() => {
						setInputOpen(p => !p)
						const tl = gsap.timeline()
						if (inputOpen) {
							inputRef.current.blur()
							tl
							tl.to(
								'#input-search',

								{
									pointerEvents: 'none',
									duration: 0,
									onComplete: () => {
										dispatch(setInput(''))
										dispatch(
											ShowItems(
												groupValue
													? items
															.filter(item => item.group === groupValue)
															.filter(item =>
																item.body
																	.toLowerCase()
																	.includes(''.toLowerCase())
															)
													: items.filter(item =>
															item.body.toLowerCase().includes(''.toLowerCase())
													  )
											)
										)
									},
								}
							).to('#input-search', {
								width: '40px',
								duration: 1,
								padding: '0 0rem',
								ease: 'power4.out',
							})
						} else {
							inputRef.current.focus()

							tl.to(
								'#input-search',

								{
									pointerEvents: 'all',
									duration: 0,
								}
							)
							tl.to(
								'#input-search',

								{
									ease: 'power4.out',
									padding: '0 1.5rem',
									duration: 1,
									width: window.matchMedia('(width < 700px)').matches
										? '100%'
										: '400px',
								}
							)
						}
					}}
				>
					<img
						src={searchImg}
						width={16}
						height={16}
						alt='search'
						className='pointer-events-none'
					/>
				</IconButton>
			</form>
		</header>
	)
}

export default NavBar
