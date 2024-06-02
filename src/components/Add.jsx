import React, { useRef, useState } from 'react'
import CreateForm from '../components/CreateForm'
import AddButton from '../components/UI/AddButton'
import { useButtonAdd } from '../hooks/useButtonAdd'

const Add = () => {
	const [onClickButton, open] = useButtonAdd()
	const inputRef = useRef(null)
	const [errors, setErrors] = useState({ input: false, select: false })

	return (
		<div
			id='cont'
			className={`bg-gray-200 backdrop-blur-md rounded-[28px] fixed md:bottom-6 md:right-6 w-14 h-14 right-4 bottom-4 z-[100]`}
		>
			<CreateForm
				errors={errors}
				setErrors={setErrors}
				inputRef={inputRef}
				onClickButton={onClickButton}
			/>
			<AddButton
				ref={inputRef}
				onClickButton={onClickButton}
				open={open}
				setErrors={setErrors}
			/>
		</div>
	)
}

export default Add
