import Link from 'next/link'
import { Github, Instagram, Music, FileText, Linkedin, Mail } from 'lucide-react'

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

export default function HomePage() {
  
  return (
    <main className="pt-16 p-6 sm:p-4 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col items-center justify-center h-[85vh] space-y-5">
        <h1 className="text-4xl md:text-7xl font-medium text-center">HEY THERE👋, I'M ARAVIND. </h1>
        <p className="text-center text-lg opacity-80">I love AI and I try to make cool stuff with it.</p>
        <div className="flex space-x-4">
          <Link href="https://github.com/aravind-808" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/shri-sai-aravind" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link href="https://instagram.com/aravinnddd_" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6" />
          </Link>
          <Link href="https://open.spotify.com/user/317b3fzhbjwryntwvqribmyremwu" target="_blank" rel="noopener noreferrer">
            <Music className="w-6 h-6" />
          </Link>
          <Link href="https://docs.google.com/document/d/1bcxfhaMrWhd3zqqsHvv8sw6CpM1nQr8z6YqXIedt3-E" target="_blank" rel="noopener noreferrer">
            <FileText className="w-6 h-6" />
          </Link>
        </div>
        <div className='absolute bottom-10 text-2xl opacity-100 text-center '>❤️✨</div>
      </div>
    </main>
  )
}

