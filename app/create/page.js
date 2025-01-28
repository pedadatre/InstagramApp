import { createPost } from "../lib/actions"
import ImageSelector from "../ui/image-selector"

export default () => {
    return (
        <form action={createPost} className="flex flex-col gap-8">
            <ImageSelector />
            <input type="submit" value="Publicar" />
            <input name="content" className="text-black" required/>
        </form>
    )
}