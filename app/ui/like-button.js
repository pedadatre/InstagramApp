import { HeartIcon } from "@heroicons/react/24/solid"
import { insertLike } from "../lib/actions";

export default ({post_id, user_id}) => {

    const insertLikeConPostyUser = insertLike.bind(null, post_id, user_id);

    return (
        <HeartIcon onClick={insertLikeConPostyUser} className="w-8" />
    )
}