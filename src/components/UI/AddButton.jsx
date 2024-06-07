import React, { forwardRef } from 'react'

const AddButton = forwardRef(({ onClickButton, setErrors, open }, inputRef) => {
	return (
		<button
			id='button'
			onClick={() => {
				onClickButton()
				setErrors({ input: false, select: false })
			}}
			className=' bg-blue absolute right-0 bottom-0 w-14 h-14 flex-center cursor-pointer z-10 rotate-0'
			style={{
				borderRadius: '28px',
			}}
		>
			<span
				className={`w-[40%] h-[2.5px] bg-zinc absolute rounded-full`}
			></span>
			<span
				className={`w-[40%] h-[2.5px] bg-zinc absolute rounded-full rotate-[90deg]`}
				style={{
					transition: 'transform 0.4s ease',
				}}
			></span>
		</button>
	)
})

export default AddButton
