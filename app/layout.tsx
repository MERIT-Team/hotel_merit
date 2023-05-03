import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/CilentOnly';
import { Modal } from './components/modals/Modal';
import './globals.css' 

export const metadata = {
  title: 'Merit Project',
  description: 'Merit Project',
}

const font = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal isOpen title='Hello World' actionLabel='Submit'/>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
