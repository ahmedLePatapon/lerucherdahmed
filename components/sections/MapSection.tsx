import Image from "next/image";

export function MapSection() {
    return (
        <section className="py-16 bg-white dark:bg-background-dark">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="mb-12 text-2xl font-bold text-secondary dark:text-white">Situé au cœur de la Charente</h2>
                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-inner bg-[#F5F2EB] dark:bg-white/5">
                    <Image src={"https://picsum.photos/seed/charente-map/1200/800"} alt="Carte de la Charente" fill className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute top-[30%] left-[40%] flex flex-col items-center group cursor-pointer">
                        <div className="bg-white px-2 py-1 rounded-md text-xs font-bold shadow-md mt-1">Cherves</div>
                    </div>

                    <div className="absolute top-[50%] left-[60%] flex flex-col items-center group cursor-pointer">
                        <div className="bg-white px-2 py-1 rounded-md text-xs font-bold shadow-md mt-1">St-Amant</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MapSection;
