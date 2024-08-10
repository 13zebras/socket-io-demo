import { useEffect, useState } from 'react'

export default function Admin() {
	const [room, setRoom] = useState('')
	// const [isLoading, setIsLoading] = useState(false)
	// const roomRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		// function handleRoom() {
		const uuidRoom = uuidv4()
		setRoom(uuidRoom)
		// socket.emit('admin-room', uuidRoom)
		console.log('%c>>> room:', 'color: red', uuidRoom)
		// if (roomRef.current) roomRef.current.value = uuidRoom
	}, [])

	return (
		<div className='pt-24'>
			<h3 className='text-2xl text-gray-300 pb-6'>Admin</h3>
			{/* <form className='flex flex-col items-start gap-4'> */}
			<div className='w-full max-w-[700px] flex flex-row items-center justify-start gap-4'>
				<span className='text-gray-300 w-16'>Room:</span>
				<span className='text-gray-300'>{room}</span>
			</div>
			{/* </form> */}
		</div>
	)
}
