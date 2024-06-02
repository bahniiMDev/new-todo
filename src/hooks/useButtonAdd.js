import gsap from 'gsap'
import { useState } from 'react'

export const useButtonAdd = () => {
	const [open, setOpen] = useState(false)

	const fun = () => {
		//dispatch(addItem(prompt()))
		if (open) {
			gsap
				.timeline()
				.to('#cont-add', {
					overflow: 'visible',
				})
				.to(
					'#item-add',
					{
						opacity: 0,
						scale: 0,
						duration: 0.6,
						y: '2.5rem',
						ease: 'back.in(0.5)',
						stagger: 0.1,
					},
					'<'
				)
				.to(
					'#cont',
					{
						height: '3.5rem',
						duration: 0.6,
						ease: 'back.in(0.5)',
					},
					'-=0.5'
				)
				.to(
					'#cont',
					{
						width: '3.5rem',
						duration: 0.6,
						ease: 'back.in(0.5)',
					},
					'-=0.4'
				)
		} else {
			gsap
				.timeline()
				.to(
					'#cont',
					{
						width: '500px',
						duration: 0.6,
						ease: 'back.out(0.5)',
					},
					'<'
				)
				.to(
					'#cont',
					{
						height: '320px',
						duration: 0.6,
						ease: 'back.out(0.5)',
					},
					'-=0.5'
				)
				.to(
					'#item-add',
					{
						opacity: 1,
						scale: 1,
						duration: 0.6,
						y: 0,
						ease: 'back.out(0.5)',
						stagger: 0.1,
					},
					'-=0.5'
				)
		}
		setOpen(prev => !prev)
	}
	return [fun, open, setOpen]
}
