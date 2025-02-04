'use client'

import NavLink from '@/app/ui/nav-link'
import { HomeIcon, MagnifyingGlassIcon, PlusCircleIcon, UserIcon } 
from '@heroicons/react/24/solid'


export default () => {
    
    return (
        <nav className="flex flex-col gap-4 h-dvh border-e p-2" >
            <p className='hidden sm:block'>SocialApp</p>
            
            <NavLink ruta="/" texto="Home" icon={ HomeIcon }></NavLink>
            <NavLink ruta="/search" texto="Search" icon={MagnifyingGlassIcon}></NavLink>
            <NavLink ruta="/create" texto="Create" icon={PlusCircleIcon}></NavLink>
            <NavLink ruta="/profile" texto="Profile" icon={UserIcon}></NavLink>
        </nav>
    )

}