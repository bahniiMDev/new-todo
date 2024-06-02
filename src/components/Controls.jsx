import React, { useEffect, useState } from 'react'
import MenuButton from './MenuButton'
import MenuGroup from './MenuGroup'

const Controls = () => {
	const [size, setSize] = useState(['0', '0'])
	const [isMobile, setIsMobile] = useState(
		window.matchMedia('(width < 768px)').matches
	)
	const fun = () => {
		setIsMobile(window.matchMedia('(width < 768px)').matches)
	}

	window.addEventListener('resize', fun)
	useEffect(() => {
		const el = document.querySelector('.menu-position')
		setSize([el.offsetLeft, el.offsetTop])
		return () => {
			window.removeEventListener('resize', fun)
		}
	}, [isMobile])
	return (
		<>
			<MenuButton
				show={true}
				style={{
					position: 'absolute',
					top: `${size[1]}px`,
					left: `${size[0]}px`,
					zIndex: 20,
				}}
			/>
			<MenuGroup />
		</>
	)
}

export default Controls
