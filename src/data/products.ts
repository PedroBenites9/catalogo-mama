export interface Product {
    id: string;
    brand: 'FuXion' | 'Millanel' | 'Millanel Cosmética';
    category: 'fuxion' | 'perfumes' | 'cosmetica';
    name: string;
    subtitle: string;
    price: number;
    image: string;
    badges?: string[];
    fuxionDetails?: {
        benefit: string;
        howToUse: string;
        keyIngredients: string;
    };
    fragranceDetails?: {
        topNotes: string;
        heartNotes: string;
        baseNotes: string;
        occasion: string;
        season: string;
    };
    disclaimer?: string;
}

export const PRODUCTS: Product[] = [
    {
        id: "fx-vita",
        brand: "FuXion",
        category: "fuxion",
        name: "Vita Xtra T+",
        subtitle: "Bebida funcional energizante en stick",
        price: 18500,
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
        badges: ["Sin Azúcar", "Antioxidante"],
        fuxionDetails: {
            benefit: "Aumenta la vitalidad y energía física/mental sin taquicardias.",
            howToUse: "Disolver 1 stick en 200 ml de agua fresca por la mañana.",
            keyIngredients: "Ginseng, Camu Camu, Maca, Acai Berry"
        }
    },
    {
        id: "fx-thermo",
        brand: "FuXion",
        category: "fuxion",
        name: "Thermo T3",
        subtitle: "Té termogénico reductor en stick",
        price: 19200,
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
        badges: ["Quemador", "Metabolismo"],
        fuxionDetails: {
            benefit: "Favorece la transformación de reservas lipídicas en energía.",
            howToUse: "Tomar caliente 15 minutos antes de entrenar o luego del almuerzo.",
            keyIngredients: "Té verde, Té negro, Té rojo, Cetonas de frambuesa"
        }
    },
    {
        id: "fx-prunex",
        brand: "FuXion",
        category: "fuxion",
        name: "Prunex 1",
        subtitle: "Té herbal desintoxicante y digestivo en stick",
        price: 17800,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
        badges: ["Detox", "Digestión"],
        fuxionDetails: {
            benefit: "Limpia y regula el tránsito intestinal de manera natural.",
            howToUse: "Disolver medio o 1 stick en una taza de agua caliente antes de acostarse.",
            keyIngredients: "Ciruela, Psyllium, Mucílago de linaza, Kelp"
        }
    },
    {
        id: "mil-142",
        brand: "Millanel",
        category: "perfumes",
        name: "Alternativa N° 142 (Inspiración Good Girl)",
        subtitle: "Eau de Parfum 100ml · Familia Ámbar Floral",
        price: 14500,
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
        badges: ["Más vendido"],
        disclaimer: "Fragancia de inspiración olfativa. No guarda vínculo comercial con marcas de diseñador registradas.",
        fragranceDetails: {
            topNotes: "Almendra, café, bergamota, limón",
            heartNotes: "Nardo, jazmín sambac, flor de azahar",
            baseNotes: "Haba tonka, cacao, vainilla, sándalo",
            occasion: "Noche, cenas y eventos formales",
            season: "Otoño / Invierno"
        }
    },
    {
        id: "mil-220",
        brand: "Millanel",
        category: "perfumes",
        name: "Alternativa N° 220 (Inspiración Sauvage)",
        subtitle: "Eau de Parfum 100ml · Familia Aromática Fougère",
        price: 14500,
        image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
        badges: ["Masculino"],
        disclaimer: "Fragancia de inspiración olfativa. No guarda vínculo comercial con marcas de diseñador registradas.",
        fragranceDetails: {
            topNotes: "Bergamota de Calabria, pimienta de Sichuan",
            heartNotes: "Lavanda, pimienta rosa, vetiver",
            baseNotes: "Ambroxan, cedro, ládano",
            occasion: "Uso diario, oficina, reuniones",
            season: "Todo el año"
        }
    }
];