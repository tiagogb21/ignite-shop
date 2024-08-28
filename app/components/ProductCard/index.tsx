import Image from "next/image";
import Link from "next/link";

export const ProductCard = () => {
    return (
        <Link
            href="/products/1"
            className="keen-slider__slide w-[43.5rem] flex flex-col items-center justify-center bg-gradient-to-r from-brand-green to-brand-purple group p-1 overflow-hidden"
        >
            <Image
                src="/PLUS-T-shirttransparente1.png"
                width={520}
                height={480}
                alt="camiseta preta com o logo de beyond the limits"
                className="object-cover"
            />
            <div className="relative w-full flex items-center justify-center">
                <div className="absolute w-full bottom-0 right-0 flex items-center justify-between bg-gray-elements p-5 transition-all duration-300 ease-out translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0 rounded-md">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-white font-bold text-xl">
                            Camiseta Beyond the Limits
                        </h2>
                        <p className="text-green-light text-2xl font-bold">
                            R$ 79,90
                        </p>
                    </div>
                    <button className="bg-green-light p-3 hover:bg-green-principal rounded-md">
                        <Image
                            src="/Handbag-Bold.png"
                            width={32}
                            height={32}
                            alt="bolsa de mão"
                        />
                    </button>
                </div>
            </div>
        </Link>
    );
};
