"use client"
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";


import Logo from '../../public/assets/LogoBlack.svg';
import X from '../../public/assets/x-solid.svg';
import Bars from '../../public/assets/bars-solid.svg';

export default function Header() {
      // Estado para controlar o menu
      const [isOpen, setIsOpen] = useState(false);

      // Função para alternar o estado do menu
      const toggleMenu = () => {
            setIsOpen(!isOpen);
      };

      return (
            <header className="">
                  <div className="container mx-auto flex items-center justify-between p-4">
                        {/* Logo */}
                        <div className="text-2xl font-bold">
                              <Image src={Logo} alt="Logo" width={50} height={50} />
                        </div>

                        {/* Menu normal para telas grandes */}
                        <nav className="hidden md:flex gap-6 items-center text-sm">
                              <a href="#" className="hover:text-gray-500 text-xl">About Us</a>
                              <a href="#" className="hover:text-gray-500 text-xl">How it work</a>
                              <a href="#" className="hover:text-gray-500 text-xl">Pricing</a>
                              <a href="#" className="hover:text-gray-500 text-xl">FAQs</a>
                        </nav>

                        {/* Opções de login ou cadastro */}
                        <div className="hidden md:flex gap-4">
                              <Button className="bg-white text-black hover:bg-slate-50   rounded-none text-lg">Login</Button>
                              <Button className="bg-black text-white  rounded-none text-lg">Sign Up</Button>
                        </div>

                        {/* Botão do menu hambúrguer para dispositivos móveis */}
                        <button
                              onClick={toggleMenu}
                              className="md:hidden focus:outline-none"
                        >
                              {isOpen ? (
                                    <Image src={X} alt="Fechar menu" width={24} height={24} />
                              ) : (
                                    <Image src={Bars} alt="Abrir menu" width={24} height={24} />
                              )}
                        </button>
                  </div>

                  {/* Menu em dispositivos móveis (aparece apenas quando o estado isOpen é true) */}
                  {isOpen && (
                        <>
                        <nav className="md:hidden  py-2  flex flex-col items-end p-5 w-6/12 relative left-48 h-screen">
                              <a href="#" className="block py-2 px-4 text-xl ">About Us</a>
                              <a href="#" className="block py-2 px-4 text-xl ">How it work</a>
                              <a href="#" className="block py-2 px-4 text-xl">Pricing</a>
                              <a href="#" className="block py-2 px-4 text-xl">FAQs</a>
                        </nav>
            
                        <div className="hidden md:flex gap-4">
                              <Button className="bg-white text-black hover:bg-slate-50   rounded-none">Login</Button>
                              <Button className="bg-black text-white  rounded-none">Sign Up</Button>
                        </div>

                        </>
                  )}
            </header>
      );
}
