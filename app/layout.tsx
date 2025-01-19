import './globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from './components/AuthProvider'
import { ThemeProvider } from './components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'task manag.r',
  description: 'modern minimalist app for managing daily tasks',
  icons: {
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-touch-icon-ehlQ5f4ASXGsLFVCnRZFpfpmTwneEB.png',
    icon: [
      { url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-16x16-MmwuunDsatFdOQVxwemSXD0eHUt329.png', sizes: '16x16', type: 'image/png' },
      { url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32-XBO49DSMJqpUfPg9qog52crL4CZsGQ.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32-XBO49DSMJqpUfPg9qog52crL4CZsGQ.png',
    android: [
      { url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-192x192-uNojwWK3lrn0BwvEWiPuNBvb4NlB5I.png', sizes: '192x192', type: 'image/png' },
      { url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-512x512-kvo3DuVxlVEJTYfeM69KtqgnyYKcUR.png', sizes: '512x512', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-touch-icon-ehlQ5f4ASXGsLFVCnRZFpfpmTwneEB.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32-XBO49DSMJqpUfPg9qog52crL4CZsGQ.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-16x16-MmwuunDsatFdOQVxwemSXD0eHUt329.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

