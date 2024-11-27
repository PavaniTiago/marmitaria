import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "./button";

interface FoodCardProps {
  title: string;
  img: StaticImageData;
  img2?: StaticImageData;
  img3?: StaticImageData;
  opcao1?: string;
  opcao2?: string;
  opcao3?: string; // nova opção
  price?: number;
  price1?: number;
  price2?: number;
  price3?: number;
  price4?: number; // novo preço
  price5?: number; // novo preço
  price6?: number; // novo preço
  description?: string;
  description2?: string;
  description3?: string; // nova descrição
}

export default function FoodCard({
  title,
  price,
  price1,
  price2,
  price3,
  price4,
  price5,
  price6, // incluindo os novos preços
  description,
  opcao1,
  opcao2,
  opcao3, // incluindo nova opção
  description2,
  description3, // incluindo nova descrição
  img,
  img2,
  img3,
}: FoodCardProps) {
  return (
    <div className="relative flex flex-col items-center justify-center bg-white w-72 h-[32rem] rounded-xl rounded-tl-[4rem] rounde-br-[4rem] shadow-xl">
      <div className="absolute -top-20">
        {img && img2 && img3 ? (
          <div className="flex justify-center items-center">
            <Image
              src={img}
              alt="prato da marmitaria"
              width={0}
              height={0}
              className="object-contain w-40 h-40"
            />
            <Image
              src={img2}
              alt="prato da marmitaria"
              width={0}
              height={0}
              className="object-contain absolute right-28 top-20 w-28 h-28"
            />
            <Image
              src={img3}
              alt="prato da marmitaria"
              width={0}
              height={0}
              className="object-contain absolute left-28 top-20 w-[120px] h-[120px]"
            />
          </div>
        ) : (
          <Image
            src={img}
            alt="prato da marmitaria"
            width={0}
            height={0}
            className="object-contain w-44 h-44"
          />
        )}
        {price1 && title !== "Quinta - Feira" && (
          <>
            <div
              className={
                "flex items-center justify-center absolute rounded-full h-12 w-12 top-2 left-0 bg-primary text-white shadow-lg shadow-black/60"
              }
            >
              <span className="text-sm font-bold">R$ {price1}</span>
              <span className="absolute -top-8 text-primary text-xl font-bold">
                P
              </span>
            </div>
            <div className="flex items-center justify-center absolute rounded-full h-12 w-12 top-0 right-[37%] translate-y-[-50%] bg-primary text-white shadow-lg shadow-black/60">
              <span className="text-sm font-bold">R$ {price2}</span>
              <span className="absolute -top-8 text-primary text-xl font-bold">
                M
              </span>
            </div>
            <div className="flex items-center justify-center absolute rounded-full h-12 w-12 top-2 right-0 bg-primary text-white shadow-lg shadow-black/60">
              <span className="text-sm font-bold">R$ {price3}</span>
              <span className="absolute -top-8 text-primary text-xl font-bold">
                G
              </span>
            </div>
          </>
        )}
      </div>
      <span className="text-2xl font-bold absolute top-28 font-davidLibre">
        {title}
      </span>
      <div className="flex flex-col w-full absolute px-6 top-40">
        <div className="flex flex-col w-full h-full mb-2">
          <span className="text-lg font-semibold text-start first-letter:uppercase">
            {opcao1}
          </span>
          <span className="text-sm font-light text-[#5C6574]">
            {description}
          </span>
          {title === "Quinta - Feira" && (
            <div className="flex justify-center space-x-3">
              {price1 && (
                <div className="flex items-center border-red-900 shadow-md border justify-center rounded-full h-8 w-20 bg-primary text-white">
                  <span className="text-sm font-bold">P: R$ {price1}</span>
                </div>
              )}
              {price2 && (
                <div className="flex items-center border-red-900 shadow-md border justify-center rounded-full h-8 w-20 bg-primary text-white">
                  <span className="text-sm font-bold">M: R$ {price2}</span>
                </div>
              )}
              {price3 && (
                <div className="flex items-center border-red-900 shadow-md border justify-center rounded-full h-8 w-20 bg-primary text-white">
                  <span className="text-sm font-bold">G: R$ {price3}</span>
                </div>
              )}
            </div>
          )}
          {opcao2 && (
            <>
              <span className="text-lg font-semibold text-start first-letter:uppercase mt-2">
                {opcao2}
              </span>
              <span className="text-sm font-light text-[#5C6574]">
                {description2}
              </span>
            </>
          )}
          {opcao3 && (
            <>
              <span className="text-lg font-semibold text-start first-letter:uppercase mt-2">
                {opcao3}
              </span>
              <span className="text-sm font-light text-[#5C6574]">
                {description3}
              </span>
            </>
          )}
        </div>
      </div>
      <div className="absolute bottom-[80px] flex justify-center space-x-2">
        {price4 && (
          <div className="flex items-center border-red-900 shadow-md border justify-center rounded-full h-8 w-20 bg-primary text-white">
            <span className="text-sm font-bold">P: R$ {price4}</span>
          </div>
        )}
        {price5 && (
          <div className="flex items-center border-red-900 shadow-md border justify-center rounded-full h-8 w-20 bg-primary text-white">
            <span className="text-sm font-bold">M: R$ {price5}</span>
          </div>
        )}
        {price6 && (
          <div className="flex items-center border-red-900 shadow-md border justify-center rounded-full h-8 w-20 bg-primary text-white">
            <span className="text-sm font-bold">G: R$ {price6}</span>
          </div>
        )}
      </div>
      <Link
        target="_blank"
        className="flex justify-end h-full items-end mb-3 font-semibold text-md"
        href="https://whatsmenu.com.br/saboraoponto"
      >
        <Button className="w-64 py-6">Peça agora</Button>
      </Link>
    </div>
  );
}
