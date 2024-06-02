import React from 'react'
import { useSelector } from 'react-redux'

const Blur = () => {
	const isOpen = useSelector(state => state.menu.isOpen)

	return (
		<div
			className={`fixed top-0 bottom-0 left-0 right-0 backdrop-blur-[6px] z-10 blur-cont pointer-events-none ${
				isOpen && 'blur-cont-active'
			}`}
		></div>
	)
}

export default Blur
