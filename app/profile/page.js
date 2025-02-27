import PostList from "@/app/ui/post-list";
import { getUserPosts, getLikes, getUserInfo } from "@/app/lib/data";
import { auth0 } from "@/app/lib/auth0";
import Image from "next/image";
import Link from "next/link";

export default async function ProfilePage() {
  const session = await auth0.getSession();
  const user_id = session?.user?.user_id;

  if (!user_id) {
    return <p>No estás autenticado, inicia sesión para ver tu perfil espabilao</p>;
  }

  const posts = await getUserPosts(user_id);
  const likes = await getLikes(user_id);
  const userInfo = await getUserInfo(user_id);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-4">
        {userInfo.picture && (
          <Link href="/profile"><Image
            src={userInfo.picture}
            alt="Foto de perfil"
            className="rounded-full border-2 border-white"
            width={100}
            height={100}
          /></Link>
        )}
        <h1 className="text-2xl font-bold text-white">{userInfo.name}</h1>
        <p className="text-gray-400">@{userInfo.username}</p>
      </div>
      <h2 className="text-xl font-bold text-white">Tus Posts</h2>
      <PostList user_id={user_id} posts={posts} likes={likes} />
    </div>
  );
}