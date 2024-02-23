"use client"

import { MdEmail } from "react-icons/md"
import { ImSteam2, ImYoutube } from "react-icons/im"
import { BsSteam } from "react-icons/bs";

import localFont from 'next/font/local'
import { useState } from "react"
const theFont = localFont({ src: '../../fonts/TheFont.ttf' })

import { siteData } from '@/config/site'

export default function Press() {
    const [showGalleryImage, setShowGalleryImage] = useState<string | undefined>(undefined)
    
    return (
        <> 
            {/* Prints */}
            <section className="flex flex-col max-w-5xl w-full mt-2">
                <h2 className={`text-5xl uppercase text-gray-800 ${theFont.className} font-bold`}>Prints</h2>
                <section className="z-10 w-full bg-gray-800 shadow-hard p-4 lg:p-8">
                    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {siteData.prints.map((print, p) => (
                            <article className="h-28 bg-black w-full border-4 border-gray-700 border-solid cursor-pointer" key={p} onClick={() => setShowGalleryImage(print)}>
                                <img src={print} alt={print} className="object-cover w-full h-full" />
                            </article>
                        ))}
                    </section>
                </section>
            </section>

            {/* Press Release */}
            <section className="flex flex-col max-w-5xl w-full mt-12">
                <h2 className={`text-5xl uppercase text-gray-800 ${theFont.className} font-bold`}>Press Release</h2>
                <section className="z-10 w-full bg-gray-800 shadow-hard p-4 lg:p-8 grid grid-cols-1 gap-8">
                {siteData.pressReleases.map((pr, i) => (
                    <article className="text-white" key={i}>
                    <div className="flex lg:justify-between lg:items-center flex-col lg:flex-row">
                        <h4 className="text-xl uppercase">{pr.title}</h4>
                        <div className="h-px bg-gray-400 flex-grow my-2 lg:mx-8 lg:my-0"></div>
                        <p className="">{pr.date}</p>
                    </div>
                    </article>
                ))}
                </section>
            </section>

            {/* Reviews */}
            <section className="flex flex-col max-w-5xl w-full mt-12">
            <h2 className={`text-5xl uppercase text-gray-800 ${theFont.className} font-bold`}>Reviews</h2>
                <section className="z-10 w-full bg-gray-800 shadow-hard p-4 lg:p-8 grid grid-cols-1 gap-8">
                {siteData.reviews.map((review, i) => (
                    <article className="text-white" key={i}>
                    <div className="flex lg:justify-between lg:items-center flex-col lg:flex-row">
                        <h4 className="text-xl uppercase">{review.game}</h4>
                        <div className="h-px bg-gray-400 flex-grow my-2 lg:mx-8 lg:my-0"></div>
                        <p className="">{review.author}</p>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">{review.content}</p>
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