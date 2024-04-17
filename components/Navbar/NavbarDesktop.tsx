"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { appConfig } from '@/config/config';
import { usePathname } from 'next/navigation';




export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State pour déterminer si la page est défilée
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0); // Si la position de défilement est supérieure à 0, la page est défilée
    };

    window.addEventListener('scroll', handleScroll); // Ajoute un écouteur d'événements de défilement

    return () => {
      window.removeEventListener('scroll', handleScroll); // Nettoie l'écouteur d'événements lors du démontage
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`sticky top-0 z-40 transition-all duration-300 bg-opacity-60 ${isScrolled ? 'bg-white duration-300  backdrop-blur-md' : ''}`}>
      <div className={`bg-transparent  ${isScrolled ? "shadow-lg " : "shadow-md "}`}>
        <div className="w-full lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between lg:justify-center items-center h-16 lg:h-24">
            <div className="flex items-center justify-center md:justify-start">
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-3">
                  <NavItem href="/" text="Accueil" isActive={pathName === '/'} />
                  <NavItemDropDown href="/cours" text="Cours" isActive={pathName === '/cours'} />
                  <NavItem href="/publications" text="Publications" isActive={pathName === '/publications'} />
                  <NavItemDropDown href="/appui-au-developpement" text="Appui au Développement" isActive={pathName === '/appui-au-developpement'} />
                  <NavItemDropDown href="/epreuves" text="Épreuves" isActive={pathName === '/epreuves'} />
                  <NavItem href="/gallerie" text="Galerie" isActive={pathName === '/gallerie'} />
                  <NavItem href="/a-propos-de-moi" text="À Propos de Moi" isActive={pathName === '/a-propos-de-moi'} />
                  <div className='mr-5'></div>
                  <Button className='px-10 bg-orange-500'>Me contacter</Button>
                </div>
              </div>
            </div>

            {/* mobile */}
            <div className="flex -mr-2  justify-between items-center w-full   md:hidden">
              <div className='block'>
                <h1 className='font-semibold text-sm'>
                  {appConfig.nom}
                  <span className='font-bold pl-2 text-orange-500'>
                    {appConfig.prenom}
                  </span>
                </h1>
              </div>
              <button
                onClick={toggleMenu}
                type="button"
                className="mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-orange-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden duration-300 transition-opacity`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavItem href="/" text="Accueil" isActive={pathName === '/'} />
            <NavItemDropDown href="/cours" text="Cours" isActive={pathName === '/cours'} />
            <NavItem href="/publications" text="Publications" isActive={pathName === '/publications'} />
            <NavItemDropDown href="/appui-au-developpement" text="Appui au Développement" isActive={pathName === '/appui-au-developpement'} />
            <NavItemDropDown href="/epreuves" text="Épreuves" isActive={pathName === '/epreuves'} />
            <NavItem href="/gallerie" text="Galerie" isActive={pathName === '/gallerie'} />
            <NavItem href="/a-propos-de-moi" text="À Propos de Moi" isActive={pathName === '/a-propos-de-moi'} />
            <Button className='w-full'>Me contacter</Button>

          </div>
        </div>
      </div>


    </nav>
  );
};

interface NavItemProps {
  href: string;
  text: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, text, isActive }) => (
  <Link href={href} className={`${isActive ? 'text-orange-500 font-bold duration-300' : 'text-gray-500'} text-sm hover:text-orange-500 block px-3 py-2 rounded-md `}>
    {text}
  </Link>
);




const NavItemDropDown: React.FC<NavItemProps> = ({ href, text, isActive }) => (
  <button className={`flex items-center gap-x-1 ${isActive ? 'text-orange-500 font-bold duration-300' : 'text-gray-500'} text-sm hover:text-orange-500 block px-3 py-2 rounded-md `}>
    {text}<ChevronDown />
  </button>
);