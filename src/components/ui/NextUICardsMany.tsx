import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Image,
	Button,
} from '@nextui-org/react'

export default function NextUICardsMany() {
	return (
		<div className='max-w-[500px] gap-8 grid grid-cols-12 grid-rows-1 px-8'>
			<Card
				isFooterBlurred
				className='col-span-12 sm:col-span-4 h-[200px] border border-gray-700'
			>
				<Image
					removeWrapper
					alt='Card background'
					className='z-0 w-full h-full object-cover'
					src='https://nextui.org/images/card-example-4.jpeg'
				/>
				<CardFooter className='absolute z-10 bottom-0 flex-col items-center gap-2 pt-1'>
					<h4 className='text-white font-medium text-3xl'>2</h4>
					<p className='text-tiny text-stone-300 uppercase font-bold'>Meagan</p>
				</CardFooter>
			</Card>
			<Card
				isFooterBlurred
				className='col-span-12 sm:col-span-4 h-[200px] border border-gray-700'
			>
				<Image
					removeWrapper
					alt='Card background'
					className='z-0 w-full h-full object-cover'
					src='https://nextui.org/images/card-example-3.jpeg'
				/>
				<CardFooter className='absolute z-10 bottom-0 flex-col items-center gap-2 pt-1'>
					<h4 className='text-white font-medium text-3xl'>3</h4>
					<p className='text-tiny text-stone-300 uppercase font-bold'>Raja</p>
				</CardFooter>
			</Card>
			<Card
				isFooterBlurred
				className='col-span-12 sm:col-span-4 h-[200px] border border-gray-700'
			>
				<Image
					removeWrapper
					alt='Card background'
					className='z-0 w-full h-full object-cover'
					src='https://nextui.org/images/card-example-2.jpeg'
				/>
				<CardFooter className='absolute z-10 bottom-0 flex-col items-center gap-2 pt-1'>
					<h4 className='text-white font-medium text-3xl'>5</h4>
					<p className='text-tiny text-stone-300 uppercase font-bold'>Mariah</p>
				</CardFooter>
			</Card>
		</div>
	)
}
