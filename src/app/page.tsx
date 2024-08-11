'use client'

import RadixDialog from '@/components/ui/RadixDialog'
import DaisyButtons from '@/components/ui/DaisyButtons'
import RadioButtons from '@/components/ui/RadioButtons'
import DaisyDialog from '@/components/ui/DaisyDialog'
import DaisyDialogModified from '@/components/ui/DaisyDialogModified'
import DaisyReactDialog from '@/components/ui/DaisyReactDialog'
import DaisyCard from '@/components/ui/DaisyCard'
import NextUIModal from '@/components/ui/NextUIModal'

export default function Home() {
	return (
		<div className='w-screen h-full px-16 py-12 flex flex-col justify-start items-center gap-12 text-white border-2 border-violet-950'>
			<div className='flex flex-col items-center gap-12 w-full border-b-2 border-b-gray-700 pb-16'>
				<h2 className='text-2xl'>Daisy UI Buttons</h2>
				<DaisyButtons />
			</div>
			<div className='flex flex-col items-center gap-12 w-full border-b-2 border-b-gray-700 pb-16'>
				<h2 className='text-2xl'>Daisy Radio Buttons</h2>
				<RadioButtons />
			</div>
			<div className='flex flex-col items-center gap-8 w-full border-b-2 border-b-gray-700 pb-16'>
				<h2 className='text-2xl'>Daisy Modified Dialog</h2>
				<DaisyDialogModified />
			</div>
			<div className='flex flex-col items-center gap-8 w-full border-b-2 border-b-gray-700 pb-16'>
				<h2 className='text-2xl'>Daisy UI Dialog</h2>
				<DaisyDialog />
			</div>
			<div className='flex flex-col items-center gap-8 w-full border-b-2 border-b-gray-700 pb-16'>
				<h2 className='text-2xl'>Daisy React Modal</h2>
				<DaisyReactDialog />
			</div>
			<div className='flex flex-col items-center gap-8 w-full border-b-2 border-b-gray-700 pb-16'>
				<h2 className='text-2xl'>Daisy UI Card</h2>
				<DaisyCard />
			</div>
			<div className='flex flex-col items-center gap-8 w-full border-b-2 border-b-gray-700 pb-16'>
				<h2 className='text-2xl'>Next UI Modal</h2>
				<NextUIModal />
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
