'use client'

import { cn } from "../../lib/utils";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

const MainNav = ({ data }) => {
    const pathName = usePathname();
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(state => !state);
    };

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathName === `/category/${route.id}`,
    }));

    return (
        <>
            <nav className="mx-6 md:flex hidden items-center space-x-4 lg:space-x-6">
                {routes.map((route) => (
                    <Link key={route.href} href={`${route.href}`} className={cn(
                        'text-sm font-medium transition-colors hover:text-black',
                        route.active ? 'text-black' : 'text-neutral-500'
                    )}>
                        {route.label}
                    </Link>
                ))
                }
            </nav>
            <div>
                <Menu className="md:hidden h-6 w-6 ml-4" onClick={toggleMenu} />
                {open &&
                    (
                        <ul className="flex flex-col gap-3 justify-center items-center rounded-md w-44 px-4   
                        bg-[#eee] absolute transition-all translate-y-5 z-50 shadow-xl py-1 md:hidden">
                            {
                                routes.map((route) => (
                                    <li className="text-center w-full">
                                        <Link 
                                        key={route.href} 
                                        href={`${route.href}`} 
                                        onClick={toggleMenu}
                                        className={'text-sm font-medium transition-colors text-muted-foreground'}
                                        >
                                            {route.label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }
            </div>
        </>
    );
}

export default MainNav;