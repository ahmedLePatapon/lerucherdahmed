import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/PageHeader";
import { getProductBySlug } from "@/lib/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductTabs from "@/components/product/ProductTabs";

interface Params {
    params: { slug: string };
}

export default function ProductPage({ params }: Params) {
    const product = getProductBySlug(params.slug);

    if (!product) {
        notFound();
    }

    return (
        <>
            <PageHeader badge="Produit" title={product!.name} description={product!.shortDescription} />

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <ProductGallery images={[product!.image]} alt={product!.name} />
                        </div>

                        <aside className="lg:col-span-1">
                            <div className="sticky top-24 bg-white p-6 rounded-md shadow">
                                <ProductInfo name={product!.name} price={product!.price} rating={product!.rating} weight={product!.weight} />
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-background-light">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="bg-white p-6 rounded-md shadow">
                        <ProductTabs apiculteurNote={product!.apiculteurNote} specs={product!.specs} nutrition={product!.nutrition} productName={product!.name} />
                    </div>
                </div>
            </section>
        </>
    );
}
