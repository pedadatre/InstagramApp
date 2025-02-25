'use server'

import { put } from "@vercel/blob"
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache";
import { auth0 } from "./auth0";


export async function createPost(prevState, formData){

    const user_id = (await auth0.getSession()).user.user_id;

    const { url } = await put(
        'media', 
        formData.get("media"), 
        { access: 'public'}
    );
    const content = formData.get('content');
    await sql`INSERT INTO sa_posts(content, url, user_id) 
        VALUES(
            ${content},
            ${url},
            ${user_id}
        )`

    revalidatePath('/');
    return { success: true };
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