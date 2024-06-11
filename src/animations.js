import gsap from 'gsap'

export const animBackClose = d => {
	gsap
		.timeline()
		.to('#cont-all', {
			duration: 0,
			pointerEvents: 'none',
			delay: d ? d : 0,
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
			'#button-add-g',
			{
				borderBottomLeftRadius: '8px',
				duration: 0.6,
				ease: 'ease.inOut',
			},
			'<'
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
}

export const animOpenClose = () => {
	gsap.to('#button', {
		rotate: '0deg',
		ease: 'back.inOut(2)',
		duration: 0.6,
	})

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
	gsap
		.timeline()
		.to('#cont-all', {
			duration: 0,
			pointerEvents: 'all',
		})
		.to('#cont-2', {
			backdropFilter: 'blur(12px)',
			background: 'rgba(118, 118, 128, 0.24)',
			duration: 0.6,
			ease: 'back.out(0.5)',
		})
		.to(
			'#cont-2',
			{
				width: window.matchMedia('(width < 400px').matches
					? 'calc(100vw - 5rem)'
					: '400px',
				duration: 0.6,
				ease: 'back.out(0.5)',
			},
			'-=0.4'
		)
		.to(
			'#cont-2',
			{
				height: '240px',
				duration: 0.6,
				ease: 'back.out(0.5)',
			},
			'-=0.5'
		)
		.to(
			'#cont-2',
			{
				borderRadius: '28px',
				duration: 0.6,
				ease: 'ease.inOut',
			},
			'-=0.6'
		)
		.to(
			'#button-add-g',
			{
				borderBottomLeftRadius: '28px',
				duration: 0.6,
				ease: 'ease.inOut',
			},
			'<'
		)
		.to(
			'#item-add-2',
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
