export interface Program {
    id: string;
    title: string;
    description: string;
    difficulty: string;
    rating: number;
    image: string;
    type: "training" | "nutrition";
    price: number;
    isFree?: boolean;
    isComingSoon?: boolean;
} 