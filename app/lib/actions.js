'use server'

import { put } from "@vercel/blob"
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth0, uid } from "./auth0";


export async function createPost(formData){

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
        redirect('/');
}

export async function insertLike(post_id, user_id){

    await sql`INSERT INTO sa_likes(post_id, user_id) VALUES (
        ${post_id},  
        ${user_id}
  )`;
}

export async function removeLike(post_id, user_id){

    await sql`DELETE FROM sa_likes 
        WHERE post_id = ${post_id} AND user_id = ${user_id}
    `
}
export async function searchPosts(searchTerm) {
    const result = await sql`
        SELECT 
            p.*, 
            (SELECT COUNT(*) FROM sa_likes l WHERE l.post_id = p.post_id) AS num_likes
        FROM sa_posts p
        WHERE p.content ILIKE ${'%' + searchTerm + '%'}
    `;
    return result.rows;
}

export async function insertCommentLike(comment_id, user_id) {
    const existingLike = await sql`
        SELECT comment_id 
        FROM sa_comment_likes 
        WHERE comment_id = ${comment_id} AND user_id = ${user_id}
    `;

    if (existingLike.rows.length === 0) {
        await sql`INSERT INTO sa_comment_likes(comment_id, user_id) VALUES (
            ${comment_id},
            ${user_id}
        )`;
    }
}


export async function removeCommentLike(comment_id, user_id) {
    await sql`DELETE FROM sa_comment_likes 
        WHERE comment_id = ${comment_id} AND user_id = ${user_id}
    `
}

export async function addComment(formData) {
    const user_id = (await auth0.getSession()).user.user_id;
    const content = formData.get('content');
    const post_id = formData.get('post_id');

    await sql`INSERT INTO sa_comments(post_id, user_id, content) VALUES (
      ${post_id},  
      ${user_id},
      ${content}
  )`
  }