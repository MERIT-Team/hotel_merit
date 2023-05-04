import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/CilentOnly';
import './globals.css' 
import { RegisterModal } from './components/modals/RegisterModal';

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
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
