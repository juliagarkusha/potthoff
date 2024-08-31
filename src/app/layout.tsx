require.context('../media/icons', true, /.svg$/);
import './global.css';
import localFont from 'next/font/local';

const clashDisplay = localFont({
  src: [
    { path: '../media/fonts/ClashDisplay-Regular.woff2', weight: 'normal' },
    { path: '../media/fonts/ClashDisplay-Medium.woff2', weight: '500' },
    { path: '../media/fonts/ClashDisplay-Bold.woff2', weight: 'bold' },
  ],
  variable: '--font-clash-display'
})

const clashGrotesk = localFont({
  src: [
    { path: '../media/fonts/ClashGrotesk-Regular.woff2', weight: 'normal' },
    { path: '../media/fonts/ClashGrotesk-Medium.woff2', weight: '500' },
  ],
  variable: '--font-clash-grotesk'
})

export const metadata = {
  title: 'potthoff',
  description: 'CRM',
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${clashDisplay.variable} font-sans`}>{children}</body>
    </html>
  )
}
