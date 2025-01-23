import Link from 'next/link'
import { Github, Instagram, Music, FileText, Linkedin, Mail } from 'lucide-react'

export default function HomePage() {
  
  return (
    <main className="pt-16 p-6 sm:p-4 max-w-7xl mx-auto min-h-screen">
      <img src = '/grey_arrow.png' className='relative mt-6 sm:mt-8 md:mt-12 lg:mt-16 w-[20vh] rotate-[-205deg]'></img>
      <div className="flex flex-col items-center justify-center h-[50vh] space-y-6">
        <h1 className="text-4xl md:text-7xl font-medium text-center">ARAVIND&apos;S PORTFOLIO</h1>
        <p className="text-center text-lg opacity-70">I like to make cool stuff involving AI sometimes.</p>
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
      </div>
    </main>
  )
}

