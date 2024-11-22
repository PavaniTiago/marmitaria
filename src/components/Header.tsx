"use client"

import Image from "next/image";
import logo from "../../public/logo2.png"
import Link from "next/link";
import { Button } from "./ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { HamburgerMenuIcon } from "@radix-ui/react-icons"
  
export function Header(){
    return (
        <header className="flex absolute w-full items-center backdrop-blur-xl justify-between px-12 lg:px-24 h-28 lg:h-40">
            <div className="flex items-center justify-center w-24 h-24 lg:w-[102px] lg:h-[100px] rounded-full bg-white">
                <Image src={logo} alt="marmitaria logo" height={0} width={0} className="object-cover w-32 h-32 lg:w-36 lg:h-36 mt-[2.5px]"></Image>
            </div>
            <div className="hidden lg:block">
                <div className="flex  gap-8 text-white">
                    <Link href="#menu">Menu</Link>
                    <Link href="#sobre">Sobre</Link>
                    <Link href="https://linktr.ee/saboraoponto_">Contato</Link>
                </div>
            </div>
            <Link href="https://whatsmenu.com.br/saboraoponto" className="hidden lg:block"><Button size="lg" className="rounded-tl-xl rounded-br-xl py-6 text-md">Peça agora</Button></Link>
            <div className="block lg:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button><HamburgerMenuIcon width={20} height={20}/></Button>
                    </SheetTrigger>
                    <SheetContent>
                    <SheetHeader className="lg:ml-4 mt-6 lg:pl-6 pt-6 space-y-0">
                        <SheetTitle className="text-lg text-foreground/60 pt-3">Acesse nosso menu</SheetTitle>
                        <SheetTrigger className="text-md text-black font-medium hover:bg-gray-200 transition-colors cursor-pointer"><Link href="#menu">Menu</Link></SheetTrigger>
                        <SheetTitle className="text-lg text-foreground/60 pt-3">Sobre</SheetTitle>
                        <SheetTrigger className="text-md text-black font-medium hover:bg-gray-200 transition-colors cursor-pointer"><Link href="#sobre">Nossa nutricionista</Link></SheetTrigger>
                        <SheetTitle className="text-lg text-foreground/60 pt-3">Contato</SheetTitle>
                        <SheetTrigger className="text-md text-black font-medium hover:bg-gray-200 transition-colors cursor-pointer"><Link href="https://linktr.ee/saboraoponto_">Fale conosco</Link></SheetTrigger>
                    </SheetHeader>
                    <SheetFooter>
                        <Link target="_blank" className="absolute bottom-6 font-semibold text-md" href="https://whatsmenu.com.br/saboraoponto"><Button className="w-64 py-6">Peça agora</Button></Link>
                    </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}