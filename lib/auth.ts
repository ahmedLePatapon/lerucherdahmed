// lib/auth.ts
export function isAuthenticated(): { authenticated: boolean; user?: { id: string; name: string } } {
    // Placeholder simple — remplacer par intégration réelle (middleware/session/JWT)
    return { authenticated: false };
}
