import Image, { StaticImageData } from "next/image"
import prato from "../../../public/prato.png"
import { Button } from "./button";
import Link from "next/link";

interface FoodCardProps {
    title: string;
    img: StaticImageData;
    price?: number;
    price1?: number;
    price2?: number;
    price3?: number;
    opcao1?: string;
    opcao2?: string;
    opcao3?: string;
    description1?: string;
    description2?: string;
    description3?: string;
    vegetable?: string;
    optionalDescription?: string[];
}

export default function FoodCard({ title, price, price1, price2, price3, opcao1, opcao2, opcao3, description1, description2, description3, vegetable, optionalDescription, img} : FoodCardProps){
    return (
        <div className="relative flex flex-col items-center justify-center bg-white w-80 h-[34rem] rounded-xl rounded-tl-[4rem] rounde-br-[4rem] shadow-xl">
            <div className="absolute -top-20">
                <Image src={img} alt="prato da marmitaria" width={0} height={0} className="object-contain w-52 h-52"/>
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
                {optionalDescription && 
                    <>
                        <span className="text-lg font-semibold text-primary text-start">Opção 1</span>
                        {optionalDescription?.map((description, idx) => (
                            <div key={idx} className="flex flex-col w-full h-full ml-6">
                                <li className="text-lg font-semibold">{description}</li>
                            </div>
                        ))}
                    </>
                }
                {opcao1 && 
                    <>    
                        <span className="text-lg font-semibold text-primary text-start">Opção 1</span>
                        <div className="flex flex-col w-full h-full ml-6 mb-2">
                            <li className="text-lg font-semibold text-start">{opcao1}</li>
                            <span className="text-sm font-light text-[#5C6574] pr-8">{description1}</span>
                        </div>
                    </>
                }
                {opcao2 && 
                    <>
                        <span className="text-lg font-semibold text-primary text-start">Opção 2</span>
                        <div className="flex flex-col w-full h-full ml-6 mb-2">
                            <li className="text-lg font-semibold text-start">{opcao2}</li>
                            <span className="text-sm font-light text-[#5C6574]">{description2}</span>
                        </div>
                    </>
                }
                {opcao3 && 
                    <>
                        <span className="text-lg font-semibold text-primary text-start">Opção 3</span>
                        <div className="flex flex-col w-full h-full ml-6">
                            <li className="text-lg font-semibold text-start">{opcao3}</li>
                            <span className="text-sm font-light text-[#5C6574]">{description3}</span>
                        </div>
                    </>
                }
            </div>
            {vegetable && 
                <>
                    <div className="flex flex-col justify-end w-full pb-4 h-full ml-12 px-6">
                    <span className="text-lg font-semibold text-primary text-start">Também temos</span>
                        <li className="text-lg font-semibold text-start">Opções de salada</li>
                        <span className="text-sm font-light text-[#5C6574]">{vegetable}</span>
                    </div>
                </>
            }
            <Link target="_blank" className="absolute -bottom-10 font-semibold text-md" href="https://whatsmenu.com.br/saboraoponto"><Button className="w-64 py-6">Peça agora</Button></Link>
        </div>
    )
}