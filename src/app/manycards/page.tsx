'use client'

import NextUICardsMany from '@/components/ui/NextUICardsMany'

export default function ManyCards() {
	return (
		<div className='w-screen h-screen px-16 py-16 flex flex-col justify-start items-center gap-12 text-white border-2 border-violet-950'>
			<div className='flex flex-col items-center gap-12 w-full border-b-2 border-b-gray-700 pb-16'>
				<h2 className='text-3xl pb-8'>Lots of Next UI Cards</h2>
				<NextUICardsMany />
			</div>
		</div>
	)
}
