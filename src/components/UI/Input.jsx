import React, { forwardRef } from 'react'

const Input2 = forwardRef((props, ref) => {
	return <input ref={ref} {...props} />
})

export default Input2
