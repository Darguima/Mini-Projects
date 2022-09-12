import "./styles/main.css"

import logoImg from "./assets/logo-nlw-esports.svg"
import {MagnifyingGlassPlus} from "phosphor-react"

function App() {   
  return (
  <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
    <img src={logoImg} alt="Logo" />

    <h1 className="text-6xl text-white font-black mt-20">
      Seu <span className="bg-nlw-gradient bg-clip-text text-transparent" >duo</span> está aqui.
    </h1>

    <div className="grid grid-cols-6 gap-6 mt-16">
      
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/game-1.png" alt="game"/>

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block">Fortnite</strong>
          <span className="text-zinc-300 text-sm block">4 anúncios</span>
        </div>
      </a>
            
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/game-2.png" alt="game"/>

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block">Fortnite</strong>
          <span className="text-zinc-300 text-sm block">4 anúncios</span>
        </div>
      </a>
            
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/game-3.png" alt="game"/>

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block">Fortnite</strong>
          <span className="text-zinc-300 text-sm block">4 anúncios</span>
        </div>
      </a>
            
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/game-4.png" alt="game"/>

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block">Fortnite</strong>
          <span className="text-zinc-300 text-sm block">4 anúncios</span>
        </div>
      </a>
            
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/game-5.png" alt="game"/>

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block">Fortnite</strong>
          <span className="text-zinc-300 text-sm block">4 anúncios</span>
        </div>
      </a>
            
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="/game-6.png" alt="game"/>

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block">Fortnite</strong>
          <span className="text-zinc-300 text-sm block">4 anúncios</span>
        </div>
      </a>
      
    </div>

    <div className="self-stretch mt-8 pt-2 bg-nlw-gradient rounded-md overflow-hidden">
      <div className="bg-[#2A2634] py-6 px-8 flex flex-row justify-between items-center">
        <div>
          <strong className="text-2xl block text-white font-black">Não encontrou o seu duo?</strong>
          <span className="block text-zinc-400">Publique um anúncio para encontrar novos players!</span>
        </div>

        <button className="bg-violet-500 text-white py-3 px-4 rounded-md flex flex-row items-center hover:bg-violet-600">
          <MagnifyingGlassPlus className="mx-3" size={24} />
          Publicar anúncio
        </button>
      </div>
    </div>
  </div>
  )
}

export default App
