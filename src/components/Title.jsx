import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom'

const Title = ({ text }) => {
	const params = useParams()
	return (
		<h1 className='text-3xl font-semibold mx-4 whitespace-nowrap '>
			{text ? text : params.text}
		</h1>
	)
}

export default Title
