import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Providers } from './providers'

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
		<html lang='en' className='dark'>
			<body className='bg-[#020307]'>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
