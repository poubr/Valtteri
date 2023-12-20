import { SiteConfig, SiteData } from "@/types"

export const siteConfig: SiteConfig = {
    name: "Valtteri Tavast's Portfolio",
    description: "Valtteri is the bestest indie game developer of all the developers.",
    url: "https://valtteritavast.com",
    ogImage: "",
    links: {

    },
    keywords: [],
    creator: "Valtteri Tavast",
    appType: "website",
    locale: "en_US"
}

export const siteData: SiteData = {
    name: "Valtteri Tavast",
    games: [
        {
            title: "Rock 'n' Roll Will Never Die!",
            video: "https://www.youtube.com/embed/--rKONUxDuM?si=OkKPb5mFbVn7r8WH",
            description: "Hair metal's not dead, it just smells funny! Get your denim vest, bandana and makeup, and dive into a point-and-click adventure as a middle-aged teddy bear planning a comeback with his old glam metal band – in a world where glam metal has been dead and buried for decades.",
            engine: "Adventure Studios",
            genre: "Point & Click Adventure",
            platform: "PC",
            position: "Programmer & Artist",
            release: "28 April 2022",
            steam: "https://store.steampowered.com/app/1644080/Rock_n_Roll_Will_Never_Die/",
            gallery: [
                "/game-1/game-1-screen-1.jpeg",
                "/game-1/game-1-screen-2.jpeg",
                "/game-1/game-1-screen-3.jpeg",
                "/game-1/game-1-screen-4.jpeg",
                "/game-1/game-1-screen-5.jpeg",
                "/game-1/game-1-screen-6.jpeg"
            ]
        }
    ],
    about: {
        title: "Technical Game & System Designer",
        description: "Valtteri is the bestest indie game developer of all the developers. He is making amazing games like Bear In Venice, or the instant million classic Rock'n'Roll Will Never Die! (whose title was famously stolen by Neil Young). Cats love him and dogs want to be him. Stay tuned for the next great adventure. Coming to you soon maybe eventually!",
        photo: "/me.jpeg"
    },
    grants: [
        {
            title: "Grant Number One",
            date: "November 2022",
            description: "A brief grant description of why this was awarded and the importance."
        },
        {
            title: "Grant Number Two",
            date: "November 2022",
            description: "A brief grant description of why this was awarded and the importance."
        }
    ],
    contact: {
        email: "",
        steam: "https://store.steampowered.com/app/1644080/Rock_n_Roll_Will_Never_Die/",
        youtube: "https://www.youtube.com/channel/UCbHUtRWdeG8sJ7oSB2M5rCQ"
    }
}

