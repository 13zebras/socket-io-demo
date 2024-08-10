export default function DaisyDialog() {
	return (
		<div className=''>
			{/* You can open the modal using document.getElementById('ID').showModal() method */}
			<button
				type='button'
				className='btn btn-outline btn-sm'
				onClick={() => {
					const dialog = document.getElementById('my_modal_3') as HTMLDialogElement
					dialog.showModal()
				}}
			>
				open modal
			</button>
			<dialog id='my_modal_3' className='modal'>
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
