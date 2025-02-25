'use client'

import { useRouter } from "next/navigation";
import { createPost } from "../lib/actions"
import ImageSelector from "../ui/image-selector"
import { useActionState, useEffect } from 'react';

export default () => {
    const router = useRouter();
    const [formState, formAction] = useActionState(createPost, { success: null, message: null, errors: {} });

    useEffect(() => {
        if (!formState.errors) {
            router.back();
        }
    },[formState.success])

    return (
        <form action={formAction} className="flex flex-col gap-8">
            <ImageSelector />
            <input name="content" className="text-black" required/>
            <input className="rounded bg-teal-800 p-2" type="submit" value="Publicar" />
        </form>
    )
}