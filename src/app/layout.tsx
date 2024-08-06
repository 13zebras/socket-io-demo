import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Socket.io Test',
	description: 'playground for socket.io',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className='bg-[#020307]'>{children}</body>
		</html>
	)
}
