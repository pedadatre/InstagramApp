import PostList from "@/app/ui/post-list";
import { getLikes, getPosts } from "./lib/data";
import { auth0 } from "./lib/auth0";

export default async function Home() {
  const user_id = (await auth0.getSession()).user.user_id;

  // TODO: lanzar las dos consultas a la vez
  const posts = await getPosts();    
  const likes = await getLikes(user_id);

  console.log(posts)

  return <PostList user_id={user_id} posts={posts} likes={likes} />
}
