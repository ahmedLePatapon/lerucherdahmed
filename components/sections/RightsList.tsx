// Composant réutilisable pour la liste des droits RGPD
const rights = [
    "Droit d'accès à vos données",
    "Droit de rectification",
    "Droit à l'effacement (\"Droit à l'oubli\")",
    "Droit à la limitation du traitement",
    "Droit à la portabilité des données",
    "Droit d'opposition",
];

export function RightsList() {
    return (
        <div>
            <div className="mb-6 border-l-4 border-primary pl-4">
                <h2 className="text-2xl font-bold text-brand-black">4. Vos droits (RGPD)</h2>
            </div>
            <p className="mb-6 text-gray-700">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {rights.map((right) => (
                    <li key={right} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors border border-transparent hover:border-surface-border">
                        <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                        <span className="text-brand-black text-sm font-medium">{right}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
