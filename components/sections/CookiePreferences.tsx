import { ToggleLeft, ToggleRight } from "lucide-react"

// Composant réutilisable pour la section Cookies & Traceurs
export function CookiePreferences() {
    return (
        <div className="rounded-xl bg-white border border-surface-border border-gray-200 overflow-hidden">
            <div className="p-6">
                <p className="text-gray-700 mb-6">
                    Nous utilisons des cookies pour améliorer votre expérience de navigation. Vous pouvez contrôler vos préférences à tout moment via notre gestionnaire de cookies.
                </p>
                <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-off-white border border-surface-border border-gray-200">
                        <ToggleRight className="text-primary mt-1" />
                        <div>
                            <h4 className="text-brand-black font-semibold">Cookies Essentiels</h4>
                            <p className="text-xs text-gray-600 mt-1">Nécessaires au fonctionnement du site (panier, connexion). Ils ne peuvent pas être désactivés.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-off-white border border-surface-border border-gray-200">
                        <ToggleLeft className="text-gray-400 mt-1" />
                        <div>
                            <h4 className="text-brand-black font-semibold">Cookies Analytiques</h4>
                            <p className="text-xs text-gray-600 mt-1">Nous aident à comprendre comment les visiteurs interagissent avec le site.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary/5 px-6 py-4 border-t border-surface-border border-gray-200 flex justify-between items-center">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Préférences</span>
                <button className="text-xs font-bold text-brand-black hover:text-primary transition-colors underline underline-offset-4">Gérer mes cookies</button>
            </div>
        </div>
    );
}
