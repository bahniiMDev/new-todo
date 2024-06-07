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
			gsap.to('#button', {
				rotate: '0deg',
				ease: 'back.inOut(2)',
				duration: 0.6,
			})
		} else {
			gsap
				.timeline()
				.to('#cont-all', {
					duration: 0,
					pointerEvents: 'none',
				})
				.to('#cont-add-2', {
					overflow: 'visible',
				})
				.to(
					'#item-add-2',
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
					'#cont-2',
					{
						height: '100%',
						duration: 0.6,
						ease: 'back.in(0.5)',
					},
					'-=0.4'
				)

				.to(
					'#cont-2',
					{
						width: '100%',
						duration: 0.6,
						ease: 'back.in(0.5)',
					},
					'-=0.4'
				)
				.to(
					'#cont-2',
					{
						borderRadius: '8px',
						duration: 0.6,
						ease: 'ease.inOut',
					},
					'-=0.3'
				)
				.to(
					'#cont-2',
					{
						backdropFilter: 'blur(0px)',
						background: 'rgba(118, 118, 128, 0)',
						duration: 0.6,
						ease: 'back.out(0.5)',
					},
					'-=0.2'
				)
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

			gsap.to('#button', {
				rotate: '135deg',
				ease: 'back.inOut(2)',
				duration: 0.6,
			})
		}
		setOpen(prev => !prev)
	}
	return [fun, open, setOpen]
}
