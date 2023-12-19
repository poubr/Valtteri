import { SiteConfig, SiteData } from "@/types"

export const siteConfig: SiteConfig = {
    name: "Portfolio",
    description: "Description of the portfolio",
    url: "https://localhost:3000",
    ogImage: "",
    links: {

    },
    keywords: [],
    creator: "build-a-portfolio",
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
            engine: "",
            genre: "Point & Click Adventure",
            platform: "PC",
            position: "Programmer & Artist",
            release: "28 April 2022",
            steam: "https://store.steampowered.com/app/1644080/Rock_n_Roll_Will_Never_Die/",
            gallery: [
                "https://placedog.net/500/280",
                "https://placedog.net/500/280",
                "https://placedog.net/500/280",
                "https://placedog.net/500/280",
                "https://placedog.net/500/280"
            ]
        }
    ],
    about: {
        title: "Technical Game & System Designer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus augue a cursus mattis. Aenean mollis scelerisque porta. Phasellus elementum leo at lacus aliquet, id interdum sem semper. Etiam ac lacus turpis. Sed vitae turpis id nisl porttitor condimentum et id velit. Pellentesque suscipit sapien diam, sed molestie felis egestas ut. Vivamus et erat in lorem tristique sodales. Mauris commodo nibh nisl, ac imperdiet urna ornare at. Vivamus sagittis felis vel placerat feugiat. Cras placerat lacus in libero accumsan efficitur. \nMaecenas molestie felis eu magna rutrum ultrices. Integer vitae lorem eu ante pulvinar venenatis id quis mauris. Nullam lorem risus, porta sit amet euismod quis, aliquet a massa. Maecenas sit amet nulla eget sem convallis venenatis vitae non nisi. Maecenas dictum aliquam risus, id efficitur tortor suscipit eu. Integer non neque pretium, pharetra nisi vel, eleifend nunc. Cras laoreet tincidunt mi non sagittis. Fusce et est ut magna accumsan aliquet. Phasellus consequat lectus eu risus volutpat tincidunt. Vestibulum sit amet enim magna. Pellentesque rutrum lectus et purus euismod, ut feugiat neque blandit.",
        photo: "https://placedog.net/310/500"
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

