import type { ChatEvent } from '@/app/[room]/page'

export default function Events({ events }: { events: ChatEvent[] }) {
	return (
		<div className='w-full max-w-[700px] p-2 border-2 border-gray-700 rounded-md min-h-40 bg-gray-950 text-gray-300 font-mono'>
			<ul>
				{events.map((event) => {
					const roomAbbrev = event.room.slice(0, 4)
					return (
						<li key={event.timeStamp}>
							{event.message} ({roomAbbrev})
						</li>
					)
				})}
			</ul>
		</div>
	)
}
