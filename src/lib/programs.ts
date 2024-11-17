import { Program } from "@/types/program";

// This would eventually come from a database
const programs: Program[] = [
    {
        id: "ppl1",
        title: "Push Pull Legs Standard",
        description: "My most popular program, designed to build muscle and strength",
        price: 0,
        difficulty: "Beginner",
        rating: 5,
        image: "/program-2.jpg",
        type: "training",
        isFree: true,
    },
    {
        id: "1",
        title: "Beginner 5 Day Split",
        description: "A 5 day split designed for beginners to learn the basics of training",
        price: 0,
        difficulty: "Beginner",
        rating: 5,
        image: "/program-2.jpg",
        type: "training",
        isFree: true,
        isComingSoon: true,
    }, {
        id: "1",
        title: "Women's Strength Program",
        description: "A program designed for women to build strength and confidence",
        price: 0,
        difficulty: "Beginner",
        rating: 5,
        image: "/program-2.jpg",
        type: "training",
        isFree: true,
        isComingSoon: true,
    },
    {
        id: "1",
        title: "Strength Supercharge",
        description: "A program designed to supercharge your strength. Input your 1 rep max for each exercise and your program will be customized to your strength level.",
        price: 0,
        difficulty: "Intermediate",
        rating: 5,
        image: "/program-2.jpg",
        type: "training",
        isFree: true,
        isComingSoon: true,
    },

];

export function getAllPrograms(): Program[] {
    return programs;
}

export function getProgram(id: string): Program | undefined {
    return programs.find(program => program.id === id);
}

export function getTrainingPrograms(limit?: number): Program[] {
    const trainingPrograms = programs.filter(program => program.type === "training");
    if (limit) {
        return trainingPrograms.slice(0, limit);
    }
    return trainingPrograms;
}

export function getNutritionPrograms(): Program[] {
    return programs.filter(program => program.type === "nutrition");
} 