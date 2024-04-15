import Image, { StaticImageData } from "next/image"
import { Button } from "./button";
import Link from "next/link";

interface FoodCardProps {
    title: string;
    img: StaticImageData;
    opcao1?: string;
    opcao2?: string;
    price?: number;
    price1?: number;
    price2?: number;
    price3?: number;
    description?: string;
    description2?: string;
}

export default function FoodCard({ title, price, price1, price2, price3, description, opcao1, opcao2, description2, img} : FoodCardProps){
    return (
        <div className="relative flex flex-col items-center justify-center bg-white w-72 h-96 rounded-xl rounded-tl-[4rem] rounde-br-[4rem] shadow-xl">
            <div className="absolute -top-20">
                <Image src={img} alt="prato da marmitaria" width={0} height={0} className="object-cover rounded-full w-44 h-44 shadow-lg"/>
                {price && 
                    <>
                        <div className="flex items-center justify-center absolute rounded-full h-12 w-12 top-0 right-[39%] translate-y-[-50%] bg-secondary text-white shadow-lg shadow-black/60">
                            <span className="text-sm font-bold">R$ {price}</span>
                        </div>
                    </>
                }
                {price1 &&
                    <>
                        <div className="flex items-center justify-center absolute rounded-full h-12 w-12 top-2 left-0 bg-secondary text-white shadow-lg shadow-black/60">
                            <span className="text-sm font-bold">R$ {price1}</span>
                            <span className="absolute -top-8 text-primary text-xl font-bold">P</span>
                        </div>
                        <div className="flex items-center justify-center absolute rounded-full h-12 w-12 top-0 right-[37%] translate-y-[-50%] bg-secondary text-white shadow-lg shadow-black/60">
                            <span className="text-sm font-bold">R$ {price2}</span>
                            <span className="absolute -top-8 text-primary text-xl font-bold">M</span>
                        </div>
                        <div className="flex items-center justify-center absolute rounded-full h-12 w-12 top-2 right-0 bg-secondary text-white shadow-lg shadow-black/60">
                            <span className="text-sm font-bold">R$ {price3}</span>
                            <span className="absolute -top-8 text-primary text-xl font-bold">G</span>
                        </div>
                    </>
                }
            </div>
            <span className="text-2xl font-bold absolute top-28 font-davidLibre">{title}</span>
            <div className="flex flex-col w-full absolute px-6 top-40">  
                <div className="flex flex-col w-full h-full mb-2">
                    <span className="text-lg font-semibold text-start first-letter:uppercase">{opcao1}</span>
                    <span className="text-sm font-light text-[#5C6574]">{description}</span>
                    {opcao2 && 
                        <>
                            <span className="text-lg font-semibold text-start first-letter:uppercase mt-2">{opcao2}</span>
                            <span className="text-sm font-light text-[#5C6574]">{description2}</span>
                        </>
                    }
                </div>
            </div>
            <Link target="_blank" className="flex justify-end h-full items-end mb-3 font-semibold text-md" href="https://whatsmenu.com.br/saboraoponto"><Button className="w-64 py-6">Peça agora</Button></Link>
        </div>
    )
}