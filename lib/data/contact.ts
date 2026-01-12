export interface ContactInfo {
    phone: string;
    email: string;
    address: {
        street: string;
        city: string;
        postalCode: string;
        country: string;
    };
    social: {
        facebook?: string;
        instagram?: string;
    };
    mapEmbedUrl: string;
}

export const contactInfo: ContactInfo = {
    phone: "+33 6 52 79 12 29",
    email: "contact@lerucherdahmed.fr",
    address: {
        street: "123 Route des Fleurs",
        city: "Cherves-Richemont",
        postalCode: "16370",
        country: "France",
    },
    social: {
        facebook: "https://facebook.com/lerucherdahmed",
        instagram: "https://instagram.com/lerucherdahmed",
    },
    mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44832.75668773898!2d-0.2833333!3d45.7166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48007e8e8e8e8e8e%3A0x8e8e8e8e8e8e8e8e!2s16370%20Cherves-Richemont!5e0!3m2!1sfr!2sfr!4v1234567890",
};
