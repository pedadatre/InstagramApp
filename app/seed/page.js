import { sql } from "@vercel/postgres"

export default async () => {

    await sql`DROP TABLE IF EXISTS sa_users, sa_posts`
    
    await sql`CREATE TABLE IF NOT EXISTS sa_users(
        user_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY, 
        username TEXT, 
        name TEXT, 
        picture TEXT, 
        email TEXT UNIQUE
    )`;
    
    await sql`CREATE TABLE IF NOT EXISTS sa_posts(
        post_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        content TEXT,
        url TEXT
    )`

    // TODO: FOREIGN KEY
    await sql`CREATE TABLE sa_likes(
        user_id UUID,
        post_id UUID
    )`

    return <p>Database seed the guay</p>
}