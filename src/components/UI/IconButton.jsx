import React from 'react'

const IconButton = ({ children, ...props }) => {
	return (
		<button {...props} ref={props.reficon}>
			{children}
		</button>
	)
}

export default IconButton
