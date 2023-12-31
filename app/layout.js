import './globals.css'
import { ToastContainer } from 'react-toastify'
import CartProvider from './context/cart'
import 'react-toastify/dist/ReactToastify.css'
import UseProvider from './context/user'

export const metadata = {
  title: 'eBay Clone',
  description: 'eBay Clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />

        <UseProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </UseProvider>
        </body>
    </html>
  )
}
