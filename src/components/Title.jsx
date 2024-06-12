import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom'

const Title = ({ text, clas }) => {
	const params = useParams()
	return (
		<h1 className={`text-3xl font-semibold mx-4 whitespace-nowrap relative`}>
			{text ? text : params.text}
			{clas ? (
				<span
					className={`content-normal h-1 w-100% rounded-full absolute block bottom-[-4px] right-0 left-0`}
					style={{
						backgroundColor: clas,
					}}
				></span>
			) : (
				''
			)}
		</h1>
	)
}

export default Title
