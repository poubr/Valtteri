"use client"

import { MdEmail } from "react-icons/md"
import { ImSteam2, ImYoutube } from "react-icons/im"
import { BsSteam } from "react-icons/bs"
import { FaItchIo } from "react-icons/fa"

import localFont from 'next/font/local'
import { useState } from "react"
const theFont = localFont({ src: '../fonts/TheFont.ttf' })

import { siteData } from '@/config/site'

export default function Home() {
  const [showGalleryImage, setShowGalleryImage] = useState<string | undefined>(undefined)
  
  return (
    <>
      {/* Games */}
      <section className="flex flex-col max-w-5xl w-full mt-12">
        <h2 className={`text-5xl uppercase text-gray-800 ${theFont.className} font-bold`}>Games</h2>
        <section className="z-10 w-full grid grid-cols-1 gap-20 bg-gray-800 shadow-hard p-4 lg:p-8">
          {siteData.games.map((game, i) => (
            <article className="flex flex-col" key={i}>
              <h3 className={`text-white text-3xl text-center ${theFont.className}`}>{game.title}</h3>
              <div className="grid gap-8 mt-8 grid-cols-1 lg:grid-cols-2">
                <div><iframe className="w-full h-48 md:h-80 lg:h-80" src={game.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
                <div className="flex flex-col">
                  <iframe src="https://store.steampowered.com/widget/1644080/" height="190"></iframe>
                  <p className="mt-3 text-sm text-white"><span className="font-bold">Engine: </span>{game.engine}</p>
                  <p className="mt-3 text-sm text-white"><span className="font-bold">Genre: </span>{game.genre}</p>
                  <p className="mt-3 text-sm text-white"><span className="font-bold">Position: </span>{game.position}</p>
                  <p className="mt-3 text-sm text-white"><span className="font-bold">Release: </span>{game.release}</p>
                </div>
              </div>
              <div className="mt-8">
                <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {game.gallery.map((gallery, g) => (
                    <article className="h-28 bg-black w-full border-4 border-gray-700 border-solid cursor-pointer" key={g} onClick={() => setShowGalleryImage(gallery)}>
                      <img src={gallery} alt={`${game.title} gallery item`} className="object-cover w-full h-full" />
                    </article>
                  ))}
                </section>
              </div>
            </article>
          ))}
        </section>
      </section>
     
      {/* About */}
      <section className="flex flex-col max-w-5xl w-full mt-12">
        <h2 className={`text-5xl uppercase text-gray-800 ${theFont.className} font-bold`}>About</h2>
        <section className="z-10 w-full items-center justify-between bg-gray-800 shadow-hard grid grid-cols-1 lg:grid-cols-2 p-4 lg:p-8 gap-8">
          <div>
            <h3 className={`text-white text-4xl ${theFont.className}`}>{siteData.name}</h3>
            <h4 className="text-fuchsia-400 text-xl my-4">{siteData.about.title}</h4>
            <p className={`text-white my-4`} dangerouslySetInnerHTML={{__html: siteData.about.description}} />
          </div>
          <div className="flex justify-center items-center">
            <img src={siteData.about.photo} alt={siteData.name} className="border-white border-8 border-solid shadow-hard"/>
          </div>
        </section>
      </section>

      {/* Contact */}
      <section className="flex flex-col max-w-5xl w-full mt-12">
        <h2 className={`text-5xl uppercase text-gray-800 ${theFont.className} font-bold`}>Contact</h2>
        <section className="z-10 w-full bg-gray-800 shadow-hard p-4 lg:p-8">
          <div className="flex text-white justify-center">
            <a href={`mailto:${siteData.contact.email}`} className="mx-8"><MdEmail size={42} /></a>
            <a href={siteData.contact.steam} className="mx-8"><ImSteam2 size={42} /></a>
            <a href={siteData.contact.youtube} className="mx-8"><ImYoutube size={42} /></a>
            <a href={siteData.contact.itch} className="mx-8"><FaItchIo size={42}/></a>
          </div>
        </section>
      </section>

      {showGalleryImage && (
        <section className="h-screen w-full fixed z-10 top-0 flex justify-center items-center">
          <div className="bg-black/75 w-full h-full absolute" onClick={() => setShowGalleryImage(undefined)}></div>
          <div className="absolute flex justify-center items-center bg-black w-full md:w-4/5">
            <img src={showGalleryImage} alt="gallery item"/>
          </div>
        </section>
      )}
    </>
  )
}
