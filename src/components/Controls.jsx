import React, { useEffect, useState } from 'react'
import MenuButton from './MenuButton'
import MenuGroup from './MenuGroup'

const Controls = () => {
	const [size, setSize] = useState([0, 0])
	const [isMobile, setIsMobile] = useState(
		window.matchMedia('(width < 768px)').matches
	)
	const fun = () => {
		setIsMobile(window.matchMedia('(width < 768px)').matches)
	}
	useEffect(() => {
		window.addEventListener('resize', fun)
	}, [isMobile])
	useEffect(() => {
		const el = document.querySelector('.menu-position')
		setSize([el.offsetLeft, el.offsetTop])
	}, [isMobile])
	return (
		<div className=''>
			<MenuButton
				show={true}
				style={{
					position: 'absolute',
					top: `${size[1]}px`,
					left: `${size[0]}px`,
					zIndex: 20,
				}}
			/>
			<MenuGroup size={size} />
		</div>
	)
}

export default Controls
