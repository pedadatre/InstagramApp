'use server'

import { put } from "@vercel/blob"
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function createPost(formData){
    const { url } = await put(
        'media', 
        formData.get("media"), 
        { access: 'public'}
    );
    const content = formData.get('content');
    await sql`INSERT INTO sa_posts(content, url) 
        VALUES(
            ${content},
            ${url}
        )`

        revalidatePath('/');
        redirect('/');
}

export async function insertLike(post_id, user_id){

    await sql`INSERT INTO sa_likes(post_id, user_id) VALUES (
        ${post_id},  
        ${user_id}
    )`
}

export async function removeLike(post_id, user_id){

    await sql`DELETE FROM sa_likes 
        WHERE post_id = ${post_id} AND user_id = ${user_id}
    `
}