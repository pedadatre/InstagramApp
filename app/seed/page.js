import { sql } from "@vercel/postgres"

export default async () => {

    await sql`CREATE TABLE POSTS(
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        content TEXT,
        url TEXT
    )`

    return <p>Database seed the guay</p>
}