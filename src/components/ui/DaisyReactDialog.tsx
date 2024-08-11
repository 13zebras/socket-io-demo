import { Modal, Button } from 'react-daisyui'
import { useCallback, useRef } from 'react'

export default function DaisyReactDialog() {
	const ref = useRef<HTMLDialogElement>(null)
	const handleShow = useCallback(() => {
		ref.current?.showModal()
	}, [])
	return (
		<div className='font-sans'>
			<Button onClick={handleShow}>Open Modal</Button>
			<Modal ref={ref}>
				<Modal.Header className='font-bold'>Hello!</Modal.Header>
				<Modal.Body>
					Press ESC key or click the button below to close
				</Modal.Body>
				<Modal.Actions>
					<form method='dialog'>
						<Button>Close</Button>
					</form>
				</Modal.Actions>
			</Modal>
		</div>
	)
}
