import { useCallback, useRef } from 'react'

export default function DaisyDialogModified() {
	const ref = useRef<HTMLDialogElement>(null)
	const handleShow = useCallback(() => {
		ref.current?.showModal()
	}, [])
	return (
		<div className=''>
			{/* You can open the modal using document.getElementById('ID').showModal() method */}
			<button
				type='button'
				className='btn btn-primary btn-sm'
				onClick={handleShow}
			>
				open modal
			</button>
			<dialog ref={ref} className='modal'>
				<div className='modal-box w-5/6 max-w-5xl h-5/6 bg-slate-900'>
					<form method='dialog'>
						{/* if there is a button in form, it will close the modal */}
						<button
							type='submit'
							className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
						>
							✕
						</button>
					</form>
					<h3 className='font-bold text-lg'>Hello!</h3>
					<p className='py-4'>Press ESC key or click on ✕ button to close</p>
				</div>
			</dialog>
		</div>
	)
}
