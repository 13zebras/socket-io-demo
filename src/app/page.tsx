'use client'

import RadixDialog from '@/components/ui/RadixDialog'
import DaisyButtons from '@/components/ui/DaisyButtons'
import DaisyDialog from '@/components/ui/DaisyDialog'

export default function Home() {
	return (
		<div className='w-screen h-screen px-16 py-12 flex flex-col justify-start items-center gap-12 text-white border-2 border-violet-950'>
			<div className='flex flex-col items-center gap-12 w-full border-b-2 border-b-gray-700 pb-16'>
				<h2 className='text-2xl'>Daisy UI Buttons</h2>
				<DaisyButtons />
			</div>
			<div className='flex flex-col items-center gap-8 w-full border-b-2 border-b-gray-700 pb-16'>
				<h2 className='text-2xl'>Daisy UI Dialog</h2>
				<DaisyDialog />
			</div>
			<div className='inline-flex flex-col items-center gap-8 w-full border-b-2 border-b-gray-700 pb-16'>
				<h2 className='text-2xl'>Radix</h2>
				<div className=''>
					<RadixDialog />
				</div>
			</div>
		</div>
	)
}
