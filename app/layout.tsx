import "@/app/globals.css"
import { Space_Grotesk } from 'next/font/google'
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "My Portfolio",
  description: "Hey y'all! I am Aravind and this is my portfolio. Feel free to check it out!!",
  openGraph: {
    title: "My portfolio B)",
    description: "Take a look at my portfolio!!",
    image: "https://avdportfolio.vercel.app/site-image.jpg",
    icons: {
      icon: "favicon.ico",
    },
    url: "https://avdportfolio.vercel.app",
  },
};

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