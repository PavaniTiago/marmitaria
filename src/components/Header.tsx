import Image from "next/image";
import logo from "../../public/logo.png"
import Link from "next/link";
import { Button } from "./ui/button";

export function Header(){
    return (
        <header className="flex absolute w-full items-center backdrop-blur-xl justify-between px-24 h-40">
            <div className="flex items-center justify-center w-28 h-28 rounded-full bg-white">
                <Image src={logo} alt="marmitaria logo" height={0} width={0} className="object-cover w-36 h-36 mt-[2.5px]"></Image>
            </div>
            <div className="flex gap-8 text-white">
                <Link href="/">Menu</Link>
                <Link href="/">Sobre</Link>
                <Link href="/">Contato</Link>
            </div>
            <Button size="lg" className="rounded-tl-xl rounded-br-xl py-6 font-davidLibre text-md">Peça agora</Button>
        </header>
    )
}