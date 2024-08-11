import { MdiStarOutline } from '@/components/icons/MdiStarIcon'

export default function DaisyCard() {
	return (
		<div className='card relative bg-base-100 w-24 shadow-xl rounded-lg border-2 border-gray-600 overflow-hidden'>
			<figure className='z-0 w-full h-full object-cover'>
				<img
					src='https://picsum.photos/id/84/192/217.webp'
					alt='Shoes'
					className=''
				/>
			</figure>
			<div className='card-body absolute z-50 py-3 px-6 gap-3 bg-black/20 justify-end items-center w-full h-full'>
				{/* <MdiStarOutline className='absolute left-[25%] top-6 text-red-500 text-xl' /> */}
				<h2 className='card-title text-3xl'>8</h2>
				<p className='font-mono tracking-wider grow-0'>Tom</p>
				<div className='card-actions hidden'>
					<button type='button' className='btn btn-outline'>
						Buy Now
					</button>
				</div>
			</div>
		</div>
	)
}
