import { Github } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="pt-20 p-4 max-w-7xl mx-auto min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-medium mb-8">ABOUT ME</h1>
        <div className="space-y-4 opacity-80">
          <h2 className="text-3xl"><u>WHO AM I?</u></h2> 
          <p>
          {'>'} Hello, I&apos;m Aravind. I am currently a college undergrad pursuing a bachelor's in Computer Science at
            <a href="https://saveetha.ac.in/" target="_blank" className="text-blue-500"> Saveetha Engineering College</a>.
          </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4 mb-4">
            <img src="/me_kid.jpg" className="w-80 sm:w-64 h-auto rounded-md opacity-100" alt="Aravind as a kid" />
            <img src="/my_pic.jpg" className="w-80 sm:w-64 h-auto rounded-md opacity-100" alt="Aravind now" />
          </div>
          <div className="space-y-4 opacity-80">
          <p className="text-justify">
          {'>'} I started taking coding and Computer Science seriously after I started my college. And after trying out a wide range of domains within
            the field, I finally decided with AI and ML. More specifically, I am interested in how the core mechanisms of stuff like neural networks or
            transformers work, rather than just using them to build other applications. And that involves a lot of complex math stuff that some would find tiring
            (myself included), but it's super interesting! 10/10 would recommend.
          </p>
          </div>
          <div className="space-y-4 opacity-80 mt-2">
          <p className="text-justify">
          {'>'} Apart from tech, my interest lies in public speaking. I've been the master of ceremonies for formal events in my college, as well as the informal 
            host for cultural events. Here are some of the extra curricular activities that I have been a part of in my college.
          </p>
          </div>
          <div className="text-justify">
          <ul className="list-disc ml-10 mt-2">
            <li className="opacity-100 mb-2"><div className="opacity-80"><u><div className="font-bold mb-2">Co-Chair of student club</div></u> I am the co-chair of the health vertical in <a href= "https://youngindians.net/yuva/" className="text-blue-500" target="_blank">YUVA Young Indians</a>
              , a student club that focuses on national development in fields such as Health, Road safety, Child safety, etc.</div></li>
            
            <li className="opacity-100 mb-2"><div className="opacity-80"><u><div className="font-bold mb-2">Documentation Head</div></u> I was the head of documentation for <a href="https://drestein.in/" target="_blank" className="text-blue-500">Drestein'24</a>
            , a national level inter college technical symposium that was 7 days long. I prepared a comprehensive report of all the events and workshops, a total of over 20, that happened in the duration
            of the symposium.</div></li>
            
            <li className="opacity-100 mb-2"><div className="opacity-80"><u><div className="font-bold mb-2">Event Organizing</div></u> I was one of the organizers of the Inauguration week 2024
            held in our college to welcome the 24th batch of learners. The Inauguration week involved activities, club introductions, movies and other games.</div></li>

            <li className="opacity-100 mb-2"><div className="opacity-80"><u><div className="font-bold mb-2">Member of the content team</div></u> I am currently a member of the
            content team in <a href="https://techsociety.saveetha.in/" target="_blank" className="text-blue-500">Tech Society</a>, Saveetha Engineering College, where I helped with
            preparing a report of Hack Hustle, a national level hackathon that was held in our college.</div></li>

          </ul>
          </div>  
        <div className="space-y-4 mt-4 opacity-80">
          <h2 className="text-3xl"><u>MY CAT</u></h2> 
          <p>
          {'>'} This is a dedicated section showcasing Pringles, my 1 year old tabby cat :)
          </p>
          </div>
          <img src="/pringles_des.png" className="flex justify-center mt-2 mb-2" alt = "Pringles Collage"></img>
      </div>
    </main>
  );
}
  