'use client'

import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

export default function RadixDialog() {
	const [open, setOpen] = useState(false)
	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger className='px-6 py-1 text-sm border-2 border-gray-700 rounded-xl'>
				Radix Dialog
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className='fixed inset-0 w-screen h-screen bg-gray-950/80 flex justify-center items-center overflow-hidden'>
					<Dialog.Content className='flex justify-center items-start w-5/6 h-[80%] p-12 border-2 border-red-950 rounded-xl bg-gray-900 relative'>
						<Dialog.Title className='text-3xl text-gray-300'>Radix Dialog</Dialog.Title>
						<Dialog.Description />
						<Dialog.Close className='absolute top-4 right-6 text-gray-200 text-xl'>x</Dialog.Close>
					</Dialog.Content>
				</Dialog.Overlay>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
