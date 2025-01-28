import NavLink from '@/app/ui/nav-link'
import { HomeIcon, MagnifyingGlassIcon, PlusCircleIcon, UserIcon } 
from '@heroicons/react/24/solid'


export default () => {
    
    return (
        <nav className="flex flex-col gap-4 h-dvh border-e p-2" >
            <p className='hidden sm:block'>SocialApp</p>
            
            <NavLink ruta="/" texto="Home" icono={<HomeIcon />}></NavLink>
            <NavLink ruta="/search" texto="Search" icono={<MagnifyingGlassIcon />}></NavLink>
            <NavLink ruta="/create" texto="Create" icono={<PlusCircleIcon />}></NavLink>
            <NavLink ruta="/profile" texto="Profile" icono={<UserIcon />}></NavLink>
        </nav>
    )

}