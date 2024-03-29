export type SiteConfig = {
    name: string
    description: string
    url: string
    ogImage: string
    links: {
        twitter?: string
        github?: string
        youtube?: string
        steam?: string
    },
    keywords: string[]
    creator: string
    appType: "website" | "article" | "book" | "profile" | undefined
    locale: string
}

export type SiteData = {
    name: string
    games: {
        title: string
        video: string
        description: string
        engine: string
        genre: string
        platform: string
        position: string
        release: string
        steam: string
        gallery: string[]
        steamWidget: string
    }[]
    about: {
        title: string
        description: string
        photo: string
    }
    grants: {
        title: string
        date: string
        description: string
    }[]
    contact: {
        email: string
        steam: string
        youtube: string
        itch: string
    }
    pathToCV: string
    portfolioPhotos: string[]
    published: {
        title: string
        date: string
        description: string
    }[]
    prints: string[]
    pressReleases: {
        title: string
        date: string
    }[]
    reviews: {
        content: string
        author: string
        game: string
    }[]
}