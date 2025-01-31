"use client";
import Link from 'next/link'
import { Github, Instagram, Music, FileText, Linkedin, Mail } from 'lucide-react'
import {ReactTyped, Typed} from "react-typed"
import { useEffect, useState } from 'react';

export default function FadeIconsIn() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(()=> {
    const timer = setTimeout(()=>{
      setIsVisible(true);
  }, 3000);
  
  return ()=> clearTimeout(timer);
}, []);
  
  return (
    <main className="pt-16 p-6 sm:p-4 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col items-center justify-center h-[85vh] space-y-5">
        <h1 className="text-4xl md:text-7xl font-medium text-center"><ReactTyped strings = {["HEY THERE :) I'M ARAVIND.", "WELCOME TO MY WEBSITE!"]} typeSpeed = {75} cursorChar='_'/></h1>
        <p className="text-center text-lg opacity-90"><ReactTyped strings ={["I love AI and I try to make cool stuff with it."]} typeSpeed = {60} startDelay={3500} cursorChar=''/></p>
        <div className={`${isVisible? 'opacity-100': 'opacity-0'} transition-opacity duration-1000 ease-in-out flex space-x-4`}>
          <Link href="https://github.com/aravind-808" target="_blank" rel="noopener noreferrer">
            <Github className="w-8 h-8" />
          </Link>
          <Link href="https://www.linkedin.com/in/shri-sai-aravind" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-8 h-8" />
          </Link>
          <Link href="https://instagram.com/aravinnddd_" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-8 h-8" />
          </Link>
          <Link href="https://open.spotify.com/user/317b3fzhbjwryntwvqribmyremwu" target="_blank" rel="noopener noreferrer">
            <Music className="w-8 h-8" />
          </Link>
          <Link href="https://docs.google.com/document/d/1bcxfhaMrWhd3zqqsHvv8sw6CpM1nQr8z6YqXIedt3-E" target="_blank" rel="noopener noreferrer">
            <FileText className="w-8 h-8" />
          </Link>
        </div>
        <footer className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-md text-center opacity-100">Now playing: "Can't Tell Me Nothing", Ye 🎧🎵</footer>
      </div>
    </main>
  )
}

