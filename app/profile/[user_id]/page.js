import PostList from "@/app/ui/post-list";
import { getUserPosts, getLikes, getUserInfo } from "@/app/lib/data";
import { auth0 } from "@/app/lib/auth0";
import Image from "next/image";

export default async function ProfilePage({ params }) {
  const { user_id } = params;
  const session = await auth0.getSession();;
  const current_user_id = session?.user?.user_id;

  const posts = await getUserPosts(user_id);
  const likes = await getLikes(current_user_id);
  const userInfo = await getUserInfo(user_id);


  return (
    <div className="flex flex-col items-center gap-8 p-4">
      <div className="w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center gap-4">
          {userInfo.picture && (
            <Image
              src={userInfo.picture}
              alt="Foto de perfil"
              className="rounded-full border-2 border-white"
              width={100}
              height={100}
            />
          )}
          <h1 className="text-2xl font-bold text-white">{userInfo.name}</h1>
          <p className="text-gray-400">@{userInfo.username}</p>
          <p className="text-gray-400">{posts.length} posts</p>
        </div>
      </div>

      <h2 className="text-xl font-bold text-white">Posts de {userInfo.username}</h2>
      <PostList user_id={current_user_id} posts={posts} likes={likes} />
    </div>
  );
}