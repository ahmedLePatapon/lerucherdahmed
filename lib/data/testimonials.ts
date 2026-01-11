export interface Testimonial {
    id: string;
    name: string;
    initial: string;
    role: string;
    text: string;
    rating: number;
    product?: string;
}

export const testimonials: Testimonial[] = [
    {
        id: "1",
        name: "Sophie Martin",
        initial: "S",
        role: "Cliente vérifiée",
        text: "Un miel incroyable. J'ai commandé le miel de châtaignier et le goût est incomparable avec ce qu'on trouve en supermarché. Bravo !",
        rating: 5,
        product: "Miel de Châtaignier",
    },
    {
        id: "2",
        name: "Thomas Dubois",
        initial: "T",
        role: "Client vérifié",
        text: "Livraison rapide et emballage soigné (zéro plastique !). Le miel d'Acacia est d'une douceur... mes enfants l'adorent.",
        rating: 5,
        product: "Miel d'Acacia",
    },
    {
        id: "3",
        name: "Marie Leroy",
        initial: "M",
        role: "Cliente vérifiée",
        text: "J'ai eu la chance de visiter le rucher lors d'une porte ouverte. Ahmed est passionnant et son miel respire l'authenticité.",
        rating: 5,
    },
];
