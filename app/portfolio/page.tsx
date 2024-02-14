"use client"

import { MdEmail } from "react-icons/md"
import { ImSteam2, ImYoutube } from "react-icons/im"
import { BsSteam } from "react-icons/bs";

import localFont from 'next/font/local'
import { useState } from "react"
const theFont = localFont({ src: '../../fonts/TheFont.ttf' })

import { siteData } from '@/config/site'

export default function Portfolio() {
    const [showGalleryImage, setShowGalleryImage] = useState<string | undefined>(undefined)
    
    return (
        <> 
            {/* CV */}
            <section className="flex flex-col max-w-5xl w-full mt-12">
                <h2 className={`text-5xl uppercase text-gray-800 ${theFont.className} font-bold`}>CV</h2>
                <section className="z-10 w-full bg-gray-800 shadow-hard p-4 lg:p-8 flex justify-center">
                    <a href={siteData.pathToCV} className="mt-4 bg-fuchsia-400 text-center py-2 shadow-hard active:shadow-none transition-all text-lg font-bold flex justify-center items-center lg:w-2/5 w-full"><p className="mr-2">Download CV</p></a>
                </section>
            </section>

            {/* Portfolio Photos */}
            <section className="flex flex-col max-w-5xl w-full mt-12">
                <h2 className={`text-5xl uppercase text-gray-800 ${theFont.className} font-bold`}>Photos</h2>
                <section className="z-10 w-full bg-gray-800 shadow-hard p-4 lg:p-8">
                    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {siteData.portfolioPhotos.map((photo, p) => (
                            <article className="h-28 bg-black w-full border-4 border-gray-700 border-solid cursor-pointer" key={p} onClick={() => setShowGalleryImage(photo)}>
                                <img src={photo} alt={photo} className="object-cover w-full h-full" />
                            </article>
                        ))}
                    </section>
                </section>
            </section>

            {/* Published */}
            <section className="flex flex-col max-w-5xl w-full mt-12">
                <h2 className={`text-5xl uppercase text-gray-800 ${theFont.className} font-bold`}>Published</h2>
                <section className="z-10 w-full bg-gray-800 shadow-hard p-4 lg:p-8 grid grid-cols-1 gap-8">
                    {siteData.published.map((publish, i) => (
                        <article className="text-white" key={i}>
                        <div className="flex lg:justify-between lg:items-center flex-col lg:flex-row">
                            <h4 className="text-xl uppercase">{publish.title}</h4>
                            <div className="h-px bg-gray-400 flex-grow my-2 lg:mx-8 lg:my-0"></div>
                            <p className="">{publish.date}</p>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">{publish.description}</p>
                        </article>
                    ))}
                </section>
            </section>

            {/* Grants */}
            <section className="flex flex-col max-w-5xl w-full mt-12">
                <h2 className={`text-5xl uppercase text-gray-800 ${theFont.className} font-bold`}>Grants</h2>
                <section className="z-10 w-full bg-gray-800 shadow-hard p-4 lg:p-8 grid grid-cols-1 gap-8">
                {siteData.grants.map((grant, i) => (
                    <article className="text-white" key={i}>
                    <div className="flex lg:justify-between lg:items-center flex-col lg:flex-row">
                        <h4 className="text-xl uppercase">{grant.title}</h4>
                        <div className="h-px bg-gray-400 flex-grow my-2 lg:mx-8 lg:my-0"></div>
                        <p className="">{grant.date}</p>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">{grant.description}</p>
                    </article>
                ))}
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