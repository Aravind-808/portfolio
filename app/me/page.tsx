import { Github, Code2 } from "lucide-react"
import Link from "next/link"
export default function ProjectPage() {
  return (
    <main className="pt-20 p-4 max-w-7xl mx-auto min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-medium mb-8">PROJECTS</h1>
        <p className="opacity-70 text-justify">
          {'>'} I believe that the best way to learn new stuff is by making a cool project out of it. These are some stuff that I've made
          while and after learning things.
        </p>
        <hr className="my-2 border-t border-gray-800"></hr>
        <p className="text-2xl mt-4 opacity-100 mb-4 underline">{'> '}SONG RECOMMENDATION SYSTEM</p>
        <p className="opacity-70 text-justify mb-2">
         {'>'} Apart from making regressors and classifiers using datasets like california housing, or the iris dataset,
           this was my first proper experience making a machine learning model with an online dataset.<br></br>
        </p>
        <p className="opacity-70 text-justify mb-2">
         {'>'} I found an online dataset that had around 100,000 songs in a .csv file. All those songs were classified into different subgenres with repetition
          of a few songs in places. I took that dataset, cleaned it with basic EDA techniques and then used AnnoyIndex by spotify to make a mini song rec 
          system myself. <br></br>
        </p>
        <div className="flex justify-center items-center">
        <p className="opacity-100 text-justify mb-2 mt-5 flex items-center gap-2">
          <Link href="https://github.com/Aravind-808/annoy-song-reccomendation" target="_blank" rel="noopener noreferrer" className="flex items-center">
          {'>>>>>>>>>>'}<span className="underline ml-2">Code</span><Code2 className="w-6 h-6 ml-2 mr-2" />{' <<<<<<<<<<'} 
          </Link>
        </p>
        </div>
        <div className="flex flex-wrap justify-center"><img src="/spotifyproj.png" className="h-auto mt-2 mb-2 max-w-full"></img></div>
        <hr className="my-2 border-t border-gray-800"></hr>
        <p className="text-2xl mt-4 opacity-100 mb-4 underline">{'> '} ASL DETECTION USING YOLOv5</p>
        <p className="opacity-70 text-justify mb-2">
        {'>'} This project was a result of my interest in computer vision integrated with AI. <br></br>
        </p>
        <p className="opacity-70 text-justify mb-2">
        {'>'} Using a dateset of around 2000 images from Roboflow and then the yolov5 model trained on a modest gpu, I was able to make the model detect some 18 
          out of the 26 alphabets in the English language.<br></br>
        </p>
        <div className="flex justify-center items-center">
        <p className="opacity-100 text-justify mb-2 mt-5 flex items-center gap-2">
          <Link href="https://github.com/Aravind-808/Sign-Language-Detection-yolov5" target="_blank" rel="noopener noreferrer" className="flex items-center">
          {'>>>>>>>>>>'}<span className="underline ml-2">Code</span><Code2 className="w-6 h-6 ml-2 mr-2" />{' <<<<<<<<<<'} 
          </Link>
        </p>
        </div>
        <div className="flex justify-center"><video src="/ASLproj.mp4" controls className="mb-2 mt-4 max-w-full rounded">s</video></div>
        <hr className="my-2 border-t border-gray-800"></hr>
        <p className="text-2xl mt-4 opacity-100 mb-4 underline">{'> '} NEURAL NETWORK FROM SCATCH</p>
        <p className="opacity-70 text-justify mb-2">
          {'>'} This is not a project, but something that im currently working on to learn more about how neural networks work.<br></br>
        </p>
        <p className="opacity-70 text-justify mb-2">
         {'>'} With my understanding of calculus, I started learning the math behind neural networks. This includes core concepts like Forward Propagation, Backpropagation,
          and activation functions. So, I used what i learned to implement a very simple neural network which includes a Fully Connected layer and activation functions.
          This was done in python from scratch usng only the numpy library.<br></br>
        </p>
        <div className="flex justify-center items-center">
        <p className="opacity-100 text-justify mb-2 mt-5 flex items-center gap-2">
          <Link href="https://github.com/Aravind-808/neural-network-from-scratch" target="_blank" rel="noopener noreferrer" className="flex items-center">
          {'>>>>>>>>>>'}<span className="underline ml-2">Code</span><Code2 className="w-6 h-6 ml-2 mr-2" />{' <<<<<<<<<<'} 
          </Link>
        </p>
        </div>
        <div className="flex justify-center"><img src="/nnetwork.png " className="mb-2 mt-4 max-w-full rounded"></img></div>
        <hr className="my-2 border-t border-gray-800"></hr>
        <p className="text-2xl mt-4 opacity-100 mb-4 underline">{'> '} FINE TUNED GPT-2 MODEL</p>
        <p className="opacity-70 text-justify mb-2">
         {'>'} This is probably the most fun I had while making a project.<br></br>
        </p>
        <p className="opacity-70 text-justify mb-2">
         {'>'} This was a random idea that came to my mind - what if I fine tuned an LLM so that it could answer questions about me, and then add it as a cool feature in my websote?
          So I went straight to work, created a jsonl file containing 500 questions and answers about myself, and used it to fine tune a gpt-2 model. The results were good.
          Although I went ahead with using Groq's api for this website, making that project allowed me to understand core LLM concepts like tokenization, fine tuning, etc.<br></br>
        </p>
        <div className="flex justify-center items-center">
        <p className="opacity-100 text-justify mb-2 mt-5 flex items-center gap-2">
          <Link href="https://github.com/Aravind-808/GPT2-Fine-Tuned" target="_blank" rel="noopener noreferrer" className="flex items-center">
          {'>>>>>>>>>>'}<span className="underline ml-2">Code</span><Code2 className="w-6 h-6 ml-2 mr-2" />{' <<<<<<<<<<'} 
          </Link>
        </p>
        </div>
        <div className="flex justify-center"><img src="/chat_meme.jpeg " className="mb-2 mt-4 max-w-full rounded"></img></div>
        <hr className="my-2 border-t border-gray-800"></hr>
        <p className="opacity-70 text-justify mb-2">
         {'>'} And That's it for now! If you're still reading, thank you for taking your time to go through my projects! I will be adding more stuff when I make them, so stay tuned!<br></br>
        </p>
      </div>
    </main>
  )
}

