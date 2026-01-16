// Composant réutilisable pour la section Contact DPO
export function ContactDPO() {
    return (
        <div className="rounded-2xl bg-linear-to-br from-surface-dark to-background-dark border border-surface-border p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-brand-main mb-2">Une question sur vos données ?</h2>
                    <p className="text-gray-400 text-sm max-w-md">
                        Notre Délégué à la Protection des Données (DPO) est à votre disposition pour toute demande relative à la confidentialité.
                    </p>
                </div>
                <a
                    className="flex items-center justify-center rounded-lg h-12 bg-primary px-6 text-background-dark text-sm font-bold shadow-lg hover:bg-[#ffe04d] transition-all transform hover:-translate-y-0.5"
                    href="mailto:privacy@rucherdahmed.fr"
                >
                    <span className="material-symbols-outlined mr-2">mail</span>
                    Contacter le DPO
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-surface-border pt-6">
                <div className="flex flex-col gap-1 py-2 pr-2 border-r border-transparent md:border-surface-border">
                    <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Responsable du traitement</p>
                    <p className="text-brand-main text-base font-bold">Le Rucher d'Ahmed SARL</p>
                    <p className="text-gray-500 text-sm">12 Chemin des Abeilles, 84000 Avignon</p>
                </div>
                <div className="flex flex-col gap-1 py-2 md:pl-8">
                    <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Email Direct</p>
                    <p className="text-brand-main text-base font-bold">privacy@rucherdahmed.fr</p>
                    <p className="text-gray-500 text-sm">Réponse sous 48h ouvrées</p>
                </div>
            </div>
        </div>
    );
}
