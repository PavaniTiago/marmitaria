import Image from "next/image";
import background from "../../public/background.jpg"
import { Button } from "@/components/ui/button";
import { FacebookLogo } from "@phosphor-icons/react/dist/ssr";
import { InstagramLogoIcon } from "@radix-ui/react-icons";


export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="w-full">
        <Image src={background} alt="background image" height={0} width={0} className="object-cover w-full h-full"/>
      </div>
      <div className="w-full flex flex-col items-start justify-start px-24 absolute text-white gap-6">
        <h2 className="text-5xl font-medium font-davidLibre max-w-2xl">Bem-vindo ao Sabor ao Ponto. Onde Cada Marmita é uma Experiência Única e Deliciosa</h2>
        <span className="text-lg max-w-md font-light leading-snug">Desde 2009, utilizando produtos de excelente qualidade, de marcas tradicionais e renomadas, trazendo o melhor sabor e uma expêriencia única aos nossos clientes.</span>
        <div className="flex gap-4">
          <Button size="lg" variant="secondary" className="rounded-tl-xl rounded-br-xl py-6 font-davidLibre text-md text-white">Menu</Button>
          <Button size="lg" className="rounded-tl-xl rounded-br-xl py-6 font-davidLibre text-md">Peça agora</Button>
        </div>
        <div className="flex gap-2">
          <Button className="rounded-full h-10 w-10 p-1"><FacebookLogo size={32}/></Button>
          <Button className="rounded-full h-10 w-10 p-1"><InstagramLogoIcon width={26} height={26}/></Button>
        </div>
      </div>
    </main>
  );
}
