'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { addGame } from "@/action/game"
import { toast } from "sonner"
import { formSchema } from "@/schema/gameSchema"
import { useState } from "react"


export default function NewGamePage() {
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            slug: "",
            description: "",
            genre: "",
            coverImage: "",
            tags: "",
            downloadSize: "",
            version: "1.0.0",
            rating: "0",
            downloads: "0",
            downloadLink: "",
        },
    })

    async function onSubmit(values) {

        try {
            const res = await addGame(values);

            toast[res.type](res.message);

            if (res.success) {
                router.push(`/game/${values.slug}`)
            }

        } catch (error) {
            toast.error(error.message)
        }
        finally {
            setLoading(false);
        }


    }

    return (
        <Form {...form} className='w-full' >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input disabled={loading} {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the Name of Game
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Slug</FormLabel>
                            <FormControl>
                                <Input disabled={loading} {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the URL-friendly version of the title
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea {...field} />
                            </FormControl>
                            <FormDescription>
                                This is about the game
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="genre"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Genre</FormLabel>
                            <FormControl>
                                <Input disabled={loading} {...field} type="text" />
                            </FormControl>
                            <FormDescription>
                                RPG, Action or Adventure, etc.
                                Provide any one genre
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="coverImage"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Cover Image URL</FormLabel>
                            <FormControl>
                                <Input disabled={loading} {...field} type="url" />
                            </FormControl>
                            <FormDescription>
                                This is the URL of the cover image of Game
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tags</FormLabel>
                            <FormControl>
                                <Input disabled={loading} {...field} type="text" />
                            </FormControl>
                            <FormDescription>
                                This is the Tags which is used to search the game.
                                Multiple tag can be added Seprated by comma.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="downloadSize"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Download Size</FormLabel>
                            <FormControl>
                                <Input disabled={loading} {...field} type="text" />
                            </FormControl>
                            <FormDescription>
                                Size of the Game eg: 200MB
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="version"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Version</FormLabel>
                            <FormControl>
                                <Input disabled={loading} {...field} type="text" />
                            </FormControl>
                            <FormDescription>
                                Version of the Game
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="rating"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Rating</FormLabel>
                            <FormControl>
                                <Input disabled={loading} {...field} type="number" min="0" max="5" step="0.1" />
                            </FormControl>
                            <FormDescription>
                                Rating of the Game
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="downloads"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Downloads</FormLabel>
                            <FormControl>
                                <Input disabled={loading} {...field} type="number" min="0" step="1" />
                            </FormControl>
                            <FormDescription>
                                Initial Number of downloads.
                                it is used to decide top games
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="downloadLink"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Download Link</FormLabel>
                            <FormControl>
                                <Input disabled={loading} {...field} type="url" />
                            </FormControl>
                            <FormDescription>
                                Download Link of the Game.(refferal link or direct download link)
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={loading} type="submit">Add Game</Button>
            </form>
        </Form>
    )
}
