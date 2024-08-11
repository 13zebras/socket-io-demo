export default function RadioButtons() {
	return (
		// <div data-theme='halloween' className='flex gap-4'>
		<div className='flex gap-4'>
			<input
				type='radio'
				aria-label='radio'
				className='btn btn-outline btn-points'
				value='1'
				name='storypoints'
			/>
			<input
				type='radio'
				aria-label='radio'
				className='btn btn-outline btn-points'
				value='2'
				name='storypoints'
			/>
			<input
				type='radio'
				aria-label='radio'
				className='btn btn-outline btn-points'
				value='3'
				name='storypoints'
			/>
			<input
				type='radio'
				aria-label='radio'
				className='btn btn-outline btn-points'
				value='5'
				name='storypoints'
			/>
			<input
				type='radio'
				aria-label='radio'
				className='btn btn-outline btn-points'
				value='8'
				name='storypoints'
			/>
		</div>
	)
}
