import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/UI/Button'
import Input2 from '../components/UI/Input'
import Select from '../components/UI/Select'
import { addItem, addItemShow } from '../store/listReducer'
import { changeInput, changeSelect } from '../store/taskCreateReducer'

const CreateForm = ({ onClickButton, inputRef, errors, setErrors }) => {
	const { groups, items, group, inputSearch } = useSelector(state => state.list)
	const { inputValue, selectValue } = useSelector(state => state.taskCreate)
	const dispatch = useDispatch()

	const onSub = e => {
		e.preventDefault()
		if (inputValue === '') {
			setErrors(prev => ({
				...prev,
				input: true,
			}))
		}
		if (selectValue === '') {
			setErrors(prev => ({
				...prev,
				select: true,
			}))
		}
		if (inputValue !== '' && selectValue !== '') {
			dispatch(
				addItemShow({
					id: Date.now(),
					group: selectValue,
					body: inputValue,
					isSucsses: false,
				})
			)
			dispatch(
				addItem({
					id: Date.now(),
					group: selectValue,
					body: inputValue,
					isSucsses: false,
				})
			)

			onClickButton()
			setTimeout(() => {
				dispatch(changeInput(''))
				dispatch(changeSelect(''))
			}, 500)
		}
	}
	return (
		<div id='cont-add' className={`w-full h-full   bg-transparent `}>
			<form
				className='bg-transparent overflow-hidden p-6'
				action=''
				onSubmit={e => onSub(e)}
			>
				<Input2
					ref={inputRef}
					className={`input-add ${errors.input && 'error'}`}
					id='item-add'
					placeholder='write a text your task...'
					value={inputValue}
					onChange={e => {
						if (e.target.value.trim()) {
							setErrors(prev => ({
								...prev,
								input: false,
							}))
						}
						dispatch(changeInput(e.target.value))
					}}
				/>
				<p className={`label-error input-label ${errors.input && 'activ'}`}>
					you can't create task if input empty
				</p>
				<Select
					className={`select-add ${errors.select && 'error'}`}
					id='item-add'
					array={groups}
					value={selectValue}
					onChange={e => {
						if (e.target.value.trim()) {
							setErrors(prev => ({
								...prev,
								select: false,
							}))
							dispatch(changeSelect(e.target.value))
						}
					}}
				/>
				<p className={`label-error ${errors.select && 'activ'}`}>
					you can't create task if drop list no selected
				</p>
				<Button className='button-add' id='item-add'>
					Add
				</Button>
			</form>
		</div>
	)
}

export default CreateForm
