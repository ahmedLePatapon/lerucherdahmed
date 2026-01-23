import Link from "next/link";

export default function Custom404() {
    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>404 - Page Not Found</h1>
            <p>Oups ! La page que vous recherchez n'existe pas.</p>
            <Link href="/" className="text-primary font-bold hover:underline">Retourner à l'accueil</Link>
        </div>
    );
}
