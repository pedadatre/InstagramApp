'use client';

import { useState } from 'react';
import { searchPosts } from '../lib/actions';
import PostShort from '../ui/post-short';
import { getLikes } from "../lib/data";
import { auth0 } from "../lib/auth0";
import LikeButton from '../ui/like-button';


// export async function Likes() {
// const user_id = (await auth0.getSession()).user.user_id;
// const likes = await getLikes(user_id);
// return likes;
// }


export  default  function SearchPage() {

    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault()
        const posts = await searchPosts(searchTerm);
        setResults(posts);
    };
    
    // const mr = Si();

    return (
        <div>
            <h1>Search Posts</h1>
            <LikeButton/>
            <form onSubmit={ handleSearch}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search posts..."/>
                <button type="submit">Search</button>
            </form>
<br></br>
            <div>
                { results.map((post) => (
                    <>
                     <PostShort
                     key={post.post_id}
                     post={post}
                     user_id={post.user_id} 
                    //  isLikedInitial={likes.find(like =>like.post_id === post.post_id)} 
                    isLikedInitial={false}
                 />
                 <br></br>
                 </>
                ))}
            </div>
        </div>
    );
}