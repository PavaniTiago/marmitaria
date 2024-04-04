import Image from "next/image";
import background from "../../public/background.jpg"
import background2 from "../../public/background2.png"
import logo from "../../public/logo.png"
import { Button } from "@/components/ui/button";
import { FacebookLogo, Phone } from "@phosphor-icons/react/dist/ssr";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

import element from "../../public/element.png"
import element2 from "../../public/element2.png"
import element3 from "../../public/element3.png"
import element4 from "../../public/element4.png"
import element5 from "../../public/element5.png"
import nutricionista from "../../public/nutricionista.png"
import FoodCard from "@/components/ui/food-card";
import { BenefitsList } from "@/components/ui/benefits-list";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center overflow-hidden">
      <div className="w-full h-screen">
        <Image src={background} alt="background image" height={0} width={0} className="object-cover object-top w-full h-full"/>
      </div>
      <div className="w-full h-full flex flex-col items-start justify-start px-24 absolute top-[20rem] text-white gap-6">
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
      <div className="relative flex flex-col w-full h-full items-center justify-center bg-[#F3F4F4] pt-52 px-12">
        <div className="flex flex-col items-center justify-center relative">
          <Image alt="elemento" src={element2} width={0} height={0} className="object-cover absolute -top-12 right-[32rem]" />
          <Image alt="elemento" src={element} width={0} height={0} className="object-cover absolute -top-16 left-[28rem]" />
          <h2 className="text-6xl font-bold font-davidLibre pb-5">Cardápio Semanal</h2>
          <span className="text-md w-96 text-center text-[#5C6574] leading-7">Confira nosso cardápio semanal e clique no botão para realizar seu pedido.</span>
        </div>
        <div className="flex items-center justify-center w-full gap-16 pt-40">
          <FoodCard title="Segunda - Feira" price1={19} price2={21} price3={23} opcao1="strogonoff de frango" 
          description1="Acompanha batata palha e farofa" opcao2="carne moída c/ batata" description2="Acompanha batata palha e farofa" vegetable="Alface, tomate e cebola"/>
          <FoodCard title="Terça - Feira" price1={19} price2={21} price3={23} opcao1="virado á paulista" description1="Acompanha Tutu de feijão, Pernil grelhado, Linguiça Toscana, Ovo, frito, Couve refogada, Farofa e Banana à milanesa" vegetable="Alface, tomate e cebola"/>
          <FoodCard title="Quarta - Feira" price1={19} price2={21} price3={23} opcao1="frango à milanesa" description1="Acompanha farofa e legumes refogados" opcao2="nhoque a bolognesa" description2="Acompanha farofa e legumes refogados" vegetable="Alface, tomate e cebola"/>
          <FoodCard title="Quinta - Feira" price1={19} price2={21} price3={23} opcao1="costela bovina com mandioca" description1="Acompanha farofa" opcao2="nhoque a bolognesa" description2="Acompanha farofa e legumes refogados" opcao3="carne moída c/ batata" description3="Acompanha batata palha e farofa" vegetable="Alface, tomate e cebola"/>
        </div>
        <div className="w-full h-full flex items-center justify-evenly mt-64 mb-44">
          <div className="flex gap-12 z-10">
            <FoodCard title="Prato Diet" optionalDescription={["light", "Arroz integral", "1 proteína", "Refogados", "Salada", "1 sache de molho", "1 barra de cereal"]} price={25}/>
            <FoodCard title="Prato Diário" optionalDescription={["ovo frito", "frango grelhado", "bife grelhado", "omelete c/ queijo", "omelete c/ legumes", "omelete r&j queijo e goiabada", "omelete de calabresa"]} price1={19} price2={21} price3={23} vegetable="Alface, tomate e cebola"/>
          </div>
          <div className="relative flex flex-col h-full">
            <Image alt="elemento" src={element3} width={0} height={0} className="object-cover absolute top-16 -right-[16rem]" />
            <Image alt="elemento" src={element2} width={0} height={0} className="object-cover absolute -top-52 right-[16rem]" />
            <Image alt="elemento" src={element4} width={0} height={0} className="object-cover absolute -bottom-32 right-[24rem]" />
            <Image alt="elemento" src={element4} width={0} height={0} className="object-cover absolute bottom-0 -rotate-90 right-[32rem]" />
            <h2 className="text-6xl font-bold font-davidLibre pb-5">Faça seu Pedido!</h2>
            <span className="text-md w-96 text-[#5C6574] leading-7 pb-16">Acesse nosso cardápio e faça seu pedido em nosso cardápio online!</span>
            <div className="flex items-center justify-start gap-6">
              <Button size="lg" variant="secondary" className="rounded-tl-xl rounded-br-xl py-6 font-davidLibre text-md text-white">Menu</Button>
              <Button size="lg" className="rounded-tl-xl rounded-br-xl py-6 font-davidLibre text-md">Peça agora</Button>
            </div>
          </div>
        </div>
      </div>
        <div className="w-full h-full flex items-center justify-evenly bg-white px-12 mt-32">
          <div className="w-fit h-full flex flex-col justify-center items-center relative">
            <Image alt="elemento" src={element5} width={0} height={0} className="object-cover absolute -top-44 right-[28rem]" />
            <Image alt="elemento" src={element} width={0} height={0} className="object-cover absolute -bottom-12 left-[38rem]" />
            <h2 className="text-6xl font-bold self-start font-davidLibre pb-5">Nossa Nutricionista</h2>
            <span className="text-md max-w-2xl self-start text-[#5C6574] leading-7 pb-12">
              Nossas marmitas, criadas pela nossa experiente nutricionista, são a combinação perfeita entre sabor e saúde. 
              Com ingredientes frescos e balanceados, cada refeição é uma escolha inteligente para quem busca uma alimentação nutritiva e prática. 
              Deixe que nossa nutricionista cuide da sua saúde enquanto você aproveita o prazer de uma refeição deliciosa.
            </span>
            <div className="grid grid-cols-2 content-center gap-12">
              <BenefitsList title="Alimentação Sob Medida: Desfrute dos Benefícios da Nutrição Personalizada!"/>
              <BenefitsList title="Refeições Balanceadas: O Segredo da Nutricionista para uma Vida Saudável!"/>
              <BenefitsList title="Marmitas Funcionais: Nutrição Especializada ao Alcance de Todos!"/>
              <BenefitsList title="Energize seu Dia com as Marmitas Nutritivas da Nossa Nutricionista!"/>
              <BenefitsList title="Sabor e Saúde em Cada Refeição: Descubra os Privilégios da Orientação Nutricional!"/>
              <BenefitsList title="Nutrição Sob Medida: Sinta-se Melhor com as Marmitas da Nossa Especialista!"/>
            </div>
            <div className="flex items-center justify-start gap-6 mt-11">
              <Button size="lg" variant="secondary" className="rounded-tl-xl rounded-br-xl py-6 font-davidLibre text-md text-white">Menu</Button>
              <Button size="lg" className="rounded-tl-xl rounded-br-xl py-6 font-davidLibre text-md">Peça agora</Button>
            </div>
          </div>
          <Image alt="imagem da nossa nutriocionista" src={nutricionista} width={0} height={0} className="object-cover"/>
        </div>
        <div className="w-full h-full flex items-center justify-center bg-white px-12 mt-40">
          <div className="flex items-center justify-center w-fit">
            <Image alt="background" src={background2} width={0} height={0} className="object-cover relative rounded-[2rem] brightness-75" />
            <div className="flex flex-col items-center justify-center absolute">
              <h2 className="text-5xl font-bold text-center font-davidLibre pb-14 text-white max-w-3xl">Fique por dentro das novidades da nossa marmitaria!</h2>
              <div className="flex items-center justify-center gap-3 w-full max-w-2xl">
                <Input placeholder="Digite aqui a sua mensagem" className="py-7 rounded-xl bg-white"/>
                <Button size="lg" className="py-6 font-davidLibre text-md text-white">Enviar</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-5xl h-full items-center justify-center mt-32">
          <div className="flex flex-col w-full h-full text-black">
            <div className="flex items-center">
              <Image src={logo} alt="marmitaria logo" height={0} width={0} className="object-cover w-20 h-20" />
              <span className="text-lg font-bold">Sabor ao Ponto</span>
            </div>
            <span className="text-md uppercase font-bold mb-6 mt-6">Horário de Funcionamento</span>
            <div className="flex gap-16 justify-start items-center">
              <div className="flex flex-col gap-1 items-start justify-start">
                <span className="text-md text-[#5C6574]">Segunda - Sexta</span>
                <span className="text-md text-[#5C6574]">08:00 - 16:00</span>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center">
                <span className="text-md text-[#5C6574]">Sábado</span>
                <span className="text-md text-[#5C6574]">08:00 - 15:00</span>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center">
                <span className="text-md text-[#5C6574]">Domingo</span>
                <span className="text-md text-[#5C6574]">FECHADO</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-md font-bold uppercase">Sigas nos nas Redes Sociais</span>
            <div className="flex gap-3 items-center justify-start">
              <Button className="rounded-full h-10 w-10 p-1"><InstagramLogoIcon width={24} height={24}/></Button>
              <Button className="rounded-full h-10 w-10 p-1"><FacebookLogo width={24} height={24}/></Button>
              <Button className="rounded-full h-10 w-10 p-1"><Phone width={24} height={24}/></Button>
            </div>
          </div>
        </div>
          <div className="flex flex-col w-full max-w-5xl h-full items-center justify-center my-10 relative">
            <Image alt="elemento" src={element2} width={0} height={0} className="object-cover absolute -top-72 -left-[16rem]" />
            <Image alt="elemento" src={element3} width={0} height={0} className="object-cover absolute -top-52 -right-[26rem]" />
            <Separator className="w-full mb-8"/>
            <span className="text-md text-[#5C6574]">© 2024 Sabor ao Ponto. Todos os direitos reservados. Gerenciado por JN Comunicação.</span>
          </div>
    </main>
  );
}
