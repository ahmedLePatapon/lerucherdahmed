import React from 'react';

const products = [
    {
        id: 'p1', name: 'Miel de lavande', price: '12€', stock: 24, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJxieGe_JTKdpNvaz6Nhb0mC7vSMnPQiMYkmpRUC_QheMMNGnsVB7Y7s7-gY1OnVbm4xR-wMNTKncBDMRMai6hADwyAuRUsno_RRYnkYqFTEZjfWPX9SZaJuSQnUvmfazw3OG3G2ZRmK6KtCvrrMTfcGBssAeLNrLyKDPOiKitikNrh6dC2QPpCjMX7I9ONVKvldL_fhPSIZKv7MbjR0eGcuZkfQAkHKEaIq_hN3vcb1zmEA3hSngt2OmDtdFOQFeRbxTOey57vG0"
    },
    {
        id: 'p2', name: 'Miel de châtaignier', price: '14€', stock: 0, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADhaGfu5v2PMalNfOgXHuCn5CrDdvTA79bi1APQRen9WhmqMkbvUT-5qYTTDTkpkWxYK1UcWq7Nv6BAN8AH2lzC_tqmJ1b6417-9sl8tbGMCH62WHGuvYX-7iOt_B4NbDXKva-dF8hQsoLTNIbgy802pKl1iHE47FRpSsrbqns1uBmEWysoK-LwTv1v5O1m_UKgMGDDgG6xnbt5inxETYTHxeduZgj2sJDQtRSfb8tAjI4urmZ1tU4KkekPznTc7MOENgovuTieH8"
    },
    {
        id: 'p3', name: 'Miel toutes fleurs', price: '10€', stock: 42, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_vjHRVQOZsUbhyxJYpyAbWav6cN954wKkJ6cyUnqjFFzA8Iz2VL5dEcGRgIaE4lOsn2UR13qtJWrgpkR2DOBJgjkUXQxdbuQwisON6axgTkHLW30zs0rFA9UWCMtSKFX7xNsRNq_pz4pPpFIRuKXLtOqM3vG8PPZh8krk5SgHgwY-3ozX2HRt7gYlDLhNn5yRB75Fock7w-jjmv7MjAzgUhXcf7nenm4YOMEPQN4D4ffng6RtcRpLmCFbiohBdOi85WoZQjvbFIg"
    },
];

type PageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ProductAdminPage({ params }: PageProps): Promise<React.ReactElement> {
    const { id } = await params;

    const product = products.find((p) => p.id === id);

    return (
        <div className="p-6 lg:p-10 space-y-8 max-w-5xl mx-auto w-full">
            <div className="flex-1 flex flex-col min-w-0">
                {product ? (
                    <div className="flex flex-wrap justify-between items-end gap-4">
                        <div className="space-y-1">
                            <h1 className="text-3xl lg:text-4xl font-black tracking-tight leading-tight">Miel de Jujubier (Sidr)
                            </h1>
                            <p className="text-slate-500 dark:text-[#bcb69a]">Mettez à jour les détails, les spécifications et
                                les notes d'apiculture.</p>
                        </div>
                    </div>


                ) : (
                    <p>Produit non trouvé.</p>
                )}
            </div>
        </div>
    );
}
