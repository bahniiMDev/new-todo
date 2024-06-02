import React, { useRef } from 'react'

const Select = ({ ...props }) => {
	const selectRef = useRef()
	return (
		<select
			ref={selectRef}
			{...props}
			className={` ${
				selectRef.current?.value === '' ? 'text-gray-300' : 'text-white'
			} ${props.className}`}
		>
			<option value='' defaultValue>
				select group
			</option>
			{props.array.map(item => (
				<option key={item.body} value={item.body}>
					{item.body}
				</option>
			))}
		</select>
	)
}

export default Select
