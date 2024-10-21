
type MicroCMSEyeCatch = {
    url: string
    width: number
    height: number
}

export type MicroCMSCategory = {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    category: string
}

export type MicroCMSNews = {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    title: string
    writer: string
    body: string
    category: MicroCMSCategory
}

export type MicroCMSBlog = {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    writer: string
    title: string
    content: string
    eyecatch: MicroCMSEyeCatch
    categories: MicroCMSCategory[]
}