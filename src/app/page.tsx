'use client'

// Original page, not to be used since we want dynamic routes

import { useEffect, useState } from 'react'
import { socket } from '../socket'
import ConnectionManager from '@/app/components/ConnectionManager'
import Events from '@/app/components/Events'
import Form from '@/app/components/Form'

export type ChatEvent = {
	message: string
	timeStamp: string
	room: string
}

export default function Home() {
	const [isConnected, setIsConnected] = useState(false)
	const [transport, setTransport] = useState('N/A')
	const [roomId, setRoomId] = useState('')
	const [chatEvents, setChatEvents] = useState<ChatEvent[]>([])

	useEffect(() => {
		if (socket.connected) {
			onConnect()
		}

		function onConnect() {
			setIsConnected(true)
			setTransport(socket.io.engine.transport.name)

			socket.io.engine.on('upgrade', (transport) => {
				setTransport(transport.name)
			})
		}

		function onDisconnect() {
			setIsConnected(false)
			setTransport('N/A')
		}

		function onChatEvent(message: string, roomIdServer: string) {
			const unixTimestamp = Date.now().toString()
			setChatEvents((previous) => [...previous, { message: message, timeStamp: unixTimestamp, room: roomIdServer }])
		}

		socket.on('connect', onConnect)
		socket.on('disconnect', onDisconnect)
		socket.on('chat', onChatEvent)

		return () => {
			socket.off('connect', onConnect)
			socket.off('disconnect', onDisconnect)
			socket.off('chat', onChatEvent)
		}
	}, [])

	return (
		<div className='px-16 py-12 flex flex-col'>
			<Events events={chatEvents} />

			<Form room={roomId} />
			<div className='w-full max-w-[700px] flex flex-row items-center justify-start gap-4'>
				<span className='text-gray-300 w-16'>Room:</span>
				<span className='text-gray-300'>{roomId}</span>
			</div>
			<div className='pt-8 flex flex-col text-zinc-300'>
				<span className='font-bold pb-1'>Socket ID: {socket.id}</span>
				<span className=''>Status: {isConnected ? 'connected' : 'disconnected'}</span>
				<span className=''>Transport: {transport}</span>
			</div>
			<ConnectionManager />
		</div>
	)
}
