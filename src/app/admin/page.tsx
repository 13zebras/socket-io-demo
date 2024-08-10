'use client'
import { useEffect, useState, useRef } from 'react'

export default function Admin() {
	const [roomUrl, setRoomUrl] = useState('')
	const [domain, setDomain] = useState('')
	const [disabled, setDisabled] = useState(false)
	const roomUrlRef = useRef<HTMLSpanElement>(null)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const hostname = window.location.hostname
			const http = hostname === 'localhost' ? 'http' : 'https'
			const port = window.location.port ? `:${window.location.port}` : ''
			setDomain(`${http}://${hostname}${port}`)
		}
	}, [])

	function generateHex() {
		return Math.random().toString(16).substring(4)
	}

	function generateAlphaNumeric() {
		return Math.random().toString(36).substring(3)
	}

	function copyToClipboard() {
		if (roomUrlRef.current) {
			navigator.clipboard.writeText(roomUrlRef.current.textContent || '')
			alert('Room URL copied to clipboard!')
		}
		setDisabled(false)
	}

	function handleRoom() {
		const hexRoom = generateHex() + generateHex()
		const aNumRoom = generateAlphaNumeric() + generateAlphaNumeric()
		setRoomUrl(`${domain}/${aNumRoom}`)
		setDisabled(true)
		console.log('%c>>> hex room:', 'color: #f40', hexRoom, hexRoom.length)
		console.log('%c>>> alphaNum room:', 'color: #f40', aNumRoom, aNumRoom.length)
		console.log('%c>>> room:', 'color: #5f0', domain)
	}

	return (
		<div className='px-16 py-10 inline-flex flex-col'>
			<h1 className='text-3xl text-gray-300 pb-12'>Host Create Room</h1>
			<div className='w-full h-12 max-w-[700px] flex flex-row items-center justify-start gap-4'>
				<span ref={roomUrlRef} className='text-gray-300 font-mono text-lg'>
					{roomUrl}
				</span>
			</div>
			<div className='w-full h-12 max-w-[700px] flex flex-row items-center justify-start py-4 mb-4'>
				{roomUrl && (
					<button
						type='button'
						onClick={copyToClipboard}
						className='w-48 px-4 py-1 border-2 border-green-700 text-zinc-300 text-sm rounded-xl bg-green-800 hover:bg-green-700 hover:text-zinc-100 active:border-green-600 active:bg-green-800 '
					>
						Copy Room URL
					</button>
				)}
			</div>
			<button
				type='submit'
				onClick={handleRoom}
				disabled={disabled}
				className='w-48 py-1 border-2 border-violet-800 rounded-xl bg-violet-950 hover:bg-violet-900 active:border-violet-600 text-zinc-300 text-sm disabled:bg-violet-950/60 disabled:text-zinc-300/40 disabled:border-violet-950/30'
			>
				Create New Room
			</button>
		</div>
	)
}
