import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { StarFilledIcon } from "@radix-ui/react-icons";
import Image, { StaticImageData } from "next/image";
interface FeedBacks {
    title: string;
    description?: string;
    photo: StaticImageData;
    name: string;
    audioSrc?: string;
}
export function FeedBacks({ title, description, name, photo, audioSrc }: FeedBacks){
    return (
        <div className="relative flex flex-col items-start justify-around w-full lg:w-[28rem] h-80 px-6 bg-white lg:rounded-tl-[3rem] lg:rounded-br-[3rem] rounded-xl shadow-xl text-secondary">
            <Image src={photo} width={0} height={0} className="self-center object-cover w-28 h-28 absolute -top-20 rounded-full" alt="user photo"/>
            <Quotes className="w-10 h-10"/>
            <div className="flex flex-col w-full items-center justify-center gap-2 text-center">
                <div className="flex gap-2 mb-6 items-center justify-center">
                <StarFilledIcon width={20} height={20} className="text-yellow-500"/>
                <StarFilledIcon width={20} height={20} className="text-yellow-500"/>
                <StarFilledIcon width={20} height={20} className="text-yellow-500"/>
                <StarFilledIcon width={20} height={20} className="text-yellow-500"/>
                <StarFilledIcon width={20} height={20} className="text-yellow-500"/>
                </div>
                <h2 className="text-2xl font-semibold">{title}</h2> 
                <span className="text-md mb-3 px-12">{description}</span>
                {audioSrc && 
                <>
                    <h2>Clique para ouvir o feedback</h2>
                    <audio controls>
                        <source src={audioSrc} type="audio/mpeg"/>
                    </audio>
                </>
                }
            </div>
            <div className="flex  gap-3 self-center mb-2">
                <div className="flex flex-col self-center">
                    <span className="text-lg font-semibold text-center">{name}</span>
                    <span className="text-md text-[#5C6574]">Cliente do Sabor ao Ponto</span>
                </div>
            </div>
        </div>
    )
}