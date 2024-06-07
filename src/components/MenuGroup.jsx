import gsap from 'gsap'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { animBackClose, animOpenClose } from '../animations'
import {
	ShowItems,
	addGroupFun,
	changeInputFun,
	groupSet,
} from '../store/listReducer'
import { setMenu } from '../store/menuReducer'
import { listImg } from '../utils'
import Button from './UI/Button'
import GroupButton from './UI/GroupButton'
import HR from './UI/HR'
import Input2 from './UI/Input'

const MenuGroup = () => {
	const { groups, items, inputSearch, itemsInGroup, size, inputGroup } =
		useSelector(state => state.list)
	const [groupCreate, setGroupCreate] = useState(false)
	const { isOpen } = useSelector(state => state.menu)
	const refMenu = useRef('')
	const dispatch = useDispatch()
	const close = group => {
		animBackClose()
		if (group) {
			setGroupCreate(false)
			dispatch(
				ShowItems(
					JSON.parse(
						JSON.stringify([
							...items
								.filter(i => i.group === group)
								.filter(item =>
									item.body.toLowerCase().includes(inputSearch.toLowerCase())
								),
						])
					)
				)
			)
			dispatch(groupSet(group))
		} else {
			dispatch(
				ShowItems(
					JSON.parse(
						JSON.stringify([
							...items.filter(item =>
								item.body.toLowerCase().includes(inputSearch.toLowerCase())
							),
						])
					)
				)
			)
			dispatch(groupSet(''))
		}

		dispatch(setMenu(false))
		if (isOpen) {
			gsap
				.timeline({
					defaults: {
						ease: 'back.out(1)',
					},
				})
				.to('#menu-group', {
					pointerEvents: 'none',
					duration: 0,
					delay: 0,
				})
				.to(' #line-3, #line-1', {
					rotate: '0deg',
					duration: 0.2,
				})
				.to(
					'#line-2',
					{
						opacity: 1,
						duration: 0,
					},
					'-=0.1'
				)
				.to('#line-1', {
					y: '-0.5rem',

					duration: 0.3,
				})
				.to(
					'#line-3',
					{
						y: '0.5rem',
						duration: 0.3,
					},
					'<'
				)
				.to(
					'#line-1, #line-3',
					{
						width: '65%',
						duration: 0.3,

						stagger: 0.1,
					},
					'-=0.2'
				)
			gsap.timeline().to('#item-menu', {
				x: '-150%',
				duration: 0.5,
				ease: 'back.out(1)',
				stagger: 0.05,
			})
		}
	}
	const lim = '600'
	const [height, setHeight] = useState(
		window.matchMedia(`(height > ${lim}px)`).matches
	)
	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.matchMedia(`(height > ${lim}px)`).matches !== height)
				setHeight(window.matchMedia(`(height > ${lim}px)`).matches)
		})
	}, [height])

	const inputRef = useRef(null)
	const [match, setMatch] = useState(
		window.matchMedia('(width < 400px').matches
	)

	useMemo(() => {
		window.addEventListener('resize', () => {
			setMatch(window.matchMedia('(width < 400px').matches)
		})
	}, [])

	useEffect(() => {
		if (groupCreate) {
			gsap.to('#cont-2', {
				width: window.matchMedia('(width < 400px').matches
					? 'calc(100vw - 5rem)'
					: '400px',
				duration: 0.1,
				ease: 'back.out(0.5)',
			})
		}
	}, [match])
	useEffect(() => {
		if (height) {
			refMenu.current.style.top = `calc(50% - ${
				refMenu.current?.offsetHeight / 2
			}px)`
		} else {
			refMenu.current.style.top = '72px'
		}
	}, [groups])

	const onSub = e => {
		e.preventDefault()
		dispatch(addGroupFun())
		dispatch(setMenu(false))

		gsap
			.timeline({
				defaults: {
					ease: 'back.out(1)',
				},
			})
			.to('#menu-group', {
				pointerEvents: 'none',
				duration: 0,
				delay: 0,
			})
			.to(' #line-3, #line-1', {
				rotate: '0deg',
				duration: 0.2,
			})
			.to(
				'#line-2',
				{
					opacity: 1,
					duration: 0,
				},
				'-=0.1'
			)
			.to('#line-1', {
				y: '-0.5rem',

				duration: 0.3,
			})
			.to(
				'#line-3',
				{
					y: '0.5rem',
					duration: 0.3,
				},
				'<'
			)
			.to(
				'#line-1, #line-3',
				{
					width: '65%',
					duration: 0.3,

					stagger: 0.1,
				},
				'-=0.2'
			)

		gsap.timeline().to('#item-menu', {
			x: '-150%',
			duration: 0.5,
			ease: 'back.out(1)',
			stagger: 0.05,
		})
		animBackClose()
	}
	return (
		<div
			id='menu-group'
			ref={refMenu}
			style={{
				top: height
					? `calc(50% - ${refMenu.current?.offsetHeight / 2}px)`
					: '72px',
			}}
			className={`z-[15] w-[50vw] absolute max-w-[200px] left-6 md:left-8 flex flex-col gap-3 pointer-events-none`}
		>
			<GroupButton
				id='item-menu'
				className=' bg-[rgba(32,32,32,1)] group-button rounded-[10px] mb-2 translate-x-[-150%]'
			>
				<p className='text-xs  font-semibold  cursor-pointer text-gray-300 w-full h-full '>
					<Link
						to={`/posts`}
						onClick={() => close(null)}
						className='w-full h-full block p-4'
					>
						All Task
					</Link>
				</p>
			</GroupButton>
			<HR
				id='item-menu'
				className={`translate-x-[-150%] w-[80%] h-[1.5px] rounded-full bg-gray-200 block relative left-[10%]`}
			/>
			<p
				className='flex translate-x-[-150%] items-center relative text-gray-300 text-[14px] left-[10%]'
				id='item-menu'
			>
				<img src={listImg} alt='list' width={14} height={14} className='mr-2' />
				<span className='py-1 '>LIST</span>
			</p>
			<GroupButton
				id='item-menu'
				className='  translate-x-[-150%] bg-[rgba(32,32,32,1)] group-button rounded-[10px] mb-2 py-2'
			>
				{groups.map((item, index) => (
					<div key={index}>
						<Link
							onClick={() => close(item.body)}
							to={`/posts/${item.body}`}
							className='text-[12px] py-2.5 px-4 font-medium cursor-pointer text-gray-100 w-full h-full flex items-center'
						>
							<div
								className={`h-[12px] aspect-square mr-4 relative flex-center items-center bg-[${item.color}] rounded-full`}
								style={{
									backgroundColor: item.color,
								}}
							></div>
							{item.body}
							<span className=' flex w-full justify-end'>
								{
									items.filter((item2, index) => item2.group === item.body)
										.length
								}
							</span>
						</Link>
						{index !== groups.length - 1 && (
							<HR
								className={`w-[80%] h-[1.5px] rounded-full bg-gray-200 block relative left-[10%]`}
							/>
						)}
					</div>
				))}
				<div className='text-[13px] py-2 px-4 font-semibold cursor-pointer text-gray-100 w-full h-full flex items-center  justify-center whitespace-nowrap relative '>
					<button
						className={`w-full h-10 bg-blue text-[#101010] rounded-[8px] flex items-center relative justify-center gap-2 z-[101]`}
						onClick={() => {
							animOpenClose()
							setGroupCreate(true)
						}}
					>
						Add Group
						<span className='h-6 flex aspect-square items-center relative justify-center'>
							<span className='w-[50%] h-[2px] rounded-full bg-[#101010] absolute'></span>
							<span className='w-[50%] h-[2px] rounded-full bg-[#101010] absolute rotate-[90deg]'></span>
						</span>
						{/*rounded-[${groupCreate ? 28 : 8}px]*/}
						{/*{groupCreate
							? 'backdrop-blur-md bg-gray-200 active-group-blur'
							: 'backdrop-blur-[0px] bg-[rgba(118, 118, 128, 0)]'}*/}
					</button>

					<div
						className='w-full h-full py-2 px-4  pointer-events-none  absolute z-[102] '
						id='cont-all'
					>
						<div className='w-full h-full relative'>
							<div
								id='cont-2'
								className={` blur-group backdrop-blur-[0px] bg-[rgba(118, 118, 128, 0)] 
								
								active-group-blur rounded-[8px] flex flex-col items-end absolute z-[100] bottom-0 left-0`}
							>
								<form
									className='bg-transparent overflow-hidden p-6 flex-1 flex flex-col w-full'
									action=''
									onSubmit={e => onSub(e)}
								>
									{/*${errors.input && 'error'}*/}
									<Input2
										ref={inputRef}
										className={`input-add-2
									`}
										id='item-add-2'
										placeholder='write a name your group...'
										value={inputGroup}
										onChange={e => {
											//if (e.target.value.trim()) {
											//	setErrors(prev => ({
											//		...prev,
											//		input: false,
											//	}))
											//}
											dispatch(changeInputFun(e.target.value))
										}}
									/>
									<p
										className={`label-error input-label ${
											//errors.input && 'activ'
											''
										}`}
									>
										you can't create task if input empty
									</p>
									<Button className='button-add-2 font-bold' id='item-add-2'>
										Add Group
									</Button>
								</form>
								<button
									className={`bg-[#333] close-btn rounded-xl w-[44px] h-[44px] mb-6 mr-6 opacity-0 scale-0 translate-y-10 flex items-center justify-center`}
									id='item-add-2'
									onClick={() => {
										animBackClose()
										setGroupCreate(false)
									}}
								>
									<span className='line-close-2'></span>
									<span className='line-close'></span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</GroupButton>
		</div>
	)
}

export default MenuGroup
