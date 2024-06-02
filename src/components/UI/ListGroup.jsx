import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom'
import 'swiper/css'
import 'swiper/css/free-mode'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ShowItems, deleteGroupFun } from '../../store/listReducer'
import { deleteImg, pinImg } from '../../utils'
import Task from './Task'

const ListGroup = ({ body, color, children, page }) => {
	const { itemsToShow, items, inputSearch } = useSelector(state => state.list)
	const [hei, setHei] = useState(0)
	const ref = useRef(null)
	const dispatch = useDispatch()
	const history = useHistory()
	const location = useLocation()

	useEffect(() => {
		setHei(ref.current.offsetHeight)
	}, [ref.current, itemsToShow])

	const groupRef = useRef(null)

	const deleteFun = () => {
		groupRef.current.swiper.slideTo(1, 100)
		gsap.to(groupRef.current, {
			duration: 0.8,
			height: 0,
			scale: 0,
			opacity: 0,
			delay: (ref.current.childNodes.length - 1) * 0.1 + 0.1,
			marginBottom: 0,
			ease: 'back.in(0.5)',
		})
		ref.current.childNodes.forEach((item, i) => {
			gsap
				.timeline()
				.to(item, {
					yPercent: 50,
					duration: 0.3,
					ease: 'ease',
					delay: 0.1 * (ref.current.childNodes.length - 1 - i),
				})
				.to(
					item,
					{
						opacity: 0,
						scale: 0,
						duration: 0.6,
						ease: 'back.in(1)',
						xPercent: -100,
					},
					'-=0.5'
				)
		})
		setTimeout(() => {
			dispatch(deleteGroupFun(body))
		}, (ref.current.childNodes.length - 1) * 100 + 1200)
		if (location.pathname.toLowerCase().includes(body.toLowerCase())) {
			setTimeout(() => {
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
				history.push('/posts')
			}, (ref.current.childNodes.length - 1) * 100 + 1205)
		}
	}
	return (
		<Swiper
			ref={groupRef}
			className=' w-full h-full rounded-[28px] mb-4 origin-center'
			initialSlide={1}
			slidesPerView={'auto'}
			spaceBetween={-28}
			speed={300}
			resistance={true}
			resistanceRatio={0}
		>
			<SwiperSlide
				className='w-[30%] max-w-[150px] flex bg-[#151515] rounded-[28px] cursor-pointer
				relative z-[7] flex-center'
				style={{
					height: `${hei}px`,
					borderRadius: '28px 0px 0px 28px',
				}}
			>
				<img
					src={pinImg}
					alt='pin'
					className='translate-x-[-14px]'
					width={36}
				/>
			</SwiperSlide>
			<SwiperSlide
				ref={ref}
				className={`p-8 bg-[#353537] rounded-[28px] relative flex 
				 flex-col w-[100%]  z-[8] ${page ? 'min-h-[70dvh]' : ''}`}
			>
				{!page && <Task title={true} body={body} color={color} />}
				{children}
			</SwiperSlide>
			<SwiperSlide
				className='w-[30%] max-w-[150px] flex bg-[#151515] rounded-[28px] flex-center relative z-[7] cursor-pointer'
				style={{
					height: `${hei}px`,
					borderRadius: ' 0px 28px 28px 0px',
				}}
				onClick={deleteFun}
			>
				<img
					src={deleteImg}
					alt='pin'
					className='translate-x-[14px]'
					width={36}
				/>
			</SwiperSlide>
		</Swiper>
	)
}

export default ListGroup
