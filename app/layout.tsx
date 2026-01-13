import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KitchenFreak - Soul Food, Freaky Fast',
  description: 'Soul Food, Freaky Fast. KitchenFreak is your go-to spot for fried chicken dinners, crispy fish plates, and Freak sides served fast, hot, and consistent. The Chick-fil-A / Chipotle of soul food.',
  keywords: ['soul food', 'fried chicken', 'fast casual', 'Columbia Heights', 'KitchenFreak', 'soul food restaurant'],
  authors: [{ name: 'KitchenFreak' }],
  openGraph: {
    title: 'KitchenFreak - Soul Food, Freaky Fast',
    description: 'The Future of Soul Food. Freaky Fast. Fried chicken dinners, crispy fish plates, and Freak sides.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KitchenFreak - Soul Food, Freaky Fast',
    description: 'The Future of Soul Food. Freaky Fast.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

