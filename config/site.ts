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
            ],
            steamWidget: "https://store.steampowered.com/widget/1644080/"
        }
    ],
    about: {
        title: "Game developer & narrative designer",
        description: "Valtteri is a (mostly) solo game developer who found his niche in retro style point-and-click adventures. Making the games from start to finish, he does many things: writing, programming, graphics, animation and such. Music and sound design too.<br>The debut and magnum opus Rock 'n' Roll Will Never Die! (2022), is a musical comedy inspired by his love for heavy metal and 90s games he played in his childhood.<br>A new untitled project promises a cold-blooded, yet funny murder mystery set in Finland.<br>He's allergic to cats but doesn't care. Rock!",
        photo: "/me.jpeg"
    },
    grants: [
        {
            title: "Grafia",
            date: "May 2023",
            description: "Awarded for the development of an untitled new game."
        },
        {
            title: "Taike",
            date: "August 2021",
            description: "Awarded for the development of Rock'n'Roll Will Never Die!"
        },
        {
            title: "Grafia",
            date: "April 2020",
            description: "Awarded for the development of graphics for Rock'n'Roll Will Never Die!"
        }
    ],
    contact: {
        email: "",
        steam: "https://store.steampowered.com/app/1644080/Rock_n_Roll_Will_Never_Die/",
        youtube: "https://www.youtube.com/channel/UCbHUtRWdeG8sJ7oSB2M5rCQ",
        itch: "https://bestgames.itch.io/"
    },
    pathToCV: "",
    portfolioPhotos: [
        "/game-1/game-1-screen-1.jpeg",
        "/game-1/game-1-screen-2.jpeg",
        "/game-1/game-1-screen-3.jpeg",
        "/game-1/game-1-screen-4.jpeg",
        "/game-1/game-1-screen-5.jpeg",
        "/game-1/game-1-screen-6.jpeg"
    ],
    published: [
        {
            title: "Publication Number One",
            date: "November 2022",
            description: "A brief description of why this was published and the importance."
        },
        {
            title: "Publication Number Two",
            date: "November 2022",
            description: "A brief description of why this was pubished and the importance."
        }
    ],
    prints: [],
    pressReleases: [],
    reviews: [
        {
            content: "A mighty fine game for anyone who likes their rock music, adventure games, and dad jokes. And who doesn't?",
            author: "Napalm Life",
            game: "Rock 'n' Roll Will Never Die!",
        }
    ]
}

