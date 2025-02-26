import Link from "next/link"

export default ({children}) => {
    return (
        <div>
            <div className="flex gap-4">
                <Link href="/profile">Profile</Link>
                <Link href="/profile/likes">Likes</Link>
                <Link href="/profile/comments">Comments</Link>
            </div>
            {children}
        </div>
    )
    

}