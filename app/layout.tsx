import "@/app/globals.css"
import { Space_Grotesk } from 'next/font/google'
import { Navigation } from "@/components/navigation"

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta
            property="og:image"
            content="https://avdportfolio.vercel.app/site-image.jpg"
          />
      </head>
      <body className={spaceGrotesk.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}



import './globals.css'