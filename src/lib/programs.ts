import { Program } from "@/types/program";

// This would eventually come from a database
const programs: Program[] = [
    {
        id: "1",
        title: "Pure Bodybuilding Program",
        description: "Build muscle and strength with science-based training",
        price: 49.99,
        difficulty: "Intermediate/Advanced",
        rating: 5,
        image: "/program-2.jpg",
        type: "training",
    },
    {
        id: "2",
        title: "Hypertrophy Fundamentals",
        description: "Master the basics of muscle growth",
        price: 39.99,
        difficulty: "Beginner/Intermediate",
        rating: 4,
        image: "/program-1.jpg",
        type: "training",
    },
    {
        id: "3",
        title: "Ultimate Push Pull Legs",
        description: "Optimize your training split for maximum gains",
        price: 44.99,
        difficulty: "Intermediate/Advanced",
        rating: 5,
        image: "/program-3.jpg",
        type: "training",
    },
    {
        id: "4",
        title: "Full Body Frequency",
        description: "High-frequency training for rapid results",
        price: 39.99,
        difficulty: "Intermediate/Advanced",
        rating: 4,
        image: "/program-4.jpg",
        type: "training",
    },
];

export function getAllPrograms(): Program[] {
    return programs;
}

export function getProgram(id: string): Program | undefined {
    return programs.find(program => program.id === id);
}

export function getTrainingPrograms(): Program[] {
    return programs.filter(program => program.type === "training");
}

export function getNutritionPrograms(): Program[] {
    return programs.filter(program => program.type === "nutrition");
} 