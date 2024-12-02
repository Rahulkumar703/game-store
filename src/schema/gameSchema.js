import z from "zod"

export const formSchema = z.object({
    title: z.string().min(1, "Title is required"),
    slug: z.string().min(1, "Slug is required"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    genre: z.string().min(1, "Genre is required"),
    coverImage: z.string().url("Must be a valid URL"),
    tags: z.string().min(1, "At least one tag is required"),
    downloadSize: z.string().min(1, "Download size is required"),
    version: z.string().min(1, "Version is required"),
    rating: z.string().min(0).max(5),
    downloads: z.string().min(0).max(10),
    downloadLink: z.string().url("Must be a valid URL"),
})