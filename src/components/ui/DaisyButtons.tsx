export default function DaisyButtons() {
	return (
		<div className='flex flex-row gap-4'>
			<button type='button' className='btn btn-primary'>
				Primary
			</button>
			<button type='button' className='btn btn-secondary'>
				Secondary
			</button>
			<button type='button' className='btn btn-accent'>
				Accent
			</button>
			<button type='button' className='btn btn-neutral'>
				Neutral
			</button>
			<button type='button' className='btn btn-outline'>
				Outline
			</button>
			<button type='button' className='btn btn-ghost'>
				Ghost
			</button>
			<button type='button' className='btn btn-link'>
				Link
			</button>
		</div>
	)
}
