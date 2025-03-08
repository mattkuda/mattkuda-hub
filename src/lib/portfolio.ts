
export interface PortfolioProject {
    title: string;
    description: string;
    image: string;
    year: number;
    demoUrl?: string;
    technologies: string[];
    codeUrl?: string;
    videoUrl?: string;
}

export const portfolioProjects: PortfolioProject[] = [
    {
        title: "FlowThread",
        description: "An AI-powered SaaS platform that streamlines communication workflows. Features include AI-assisted thread replies, documentation generation, ticket creation, and tone conversion. Built with a focus on developer experience and team collaboration.",
        image: "/portfolio/flowthread.png",
        demoUrl: "https://flowthread.xyz",
        technologies: [
            "NextJS",
            "OpenAI",
            "Supabase",
            "Stripe",
            "Clerk",
            "Vercel"
        ],
        // codeUrl: "https://github.com/mattkuda/flowthread",
        videoUrl: "https://www.youtube.com/watch?v=pIovglIrWME",
        year: 2025,
    },
    {
        title: "TabaFit",
        description: "iOS app for Tabata workouts. Features include customizable workout timers, exercise libraries, workout tracking, and social sharing capabilities.",
        image: "/portfolio/tabafit.png",
        demoUrl: "https://tabafit.com",
        technologies: [
            "React Native",
            "Node.js",
            "Express",
            "Expo",
            "MongoDB",
            "Google Cloud",
            "Railway"
        ],
        videoUrl: "https://www.youtube.com/shorts/D-Khjeua1q8",
        codeUrl: "https://github.com/mattkuda/tabafit",
        year: 2024,
    },
    {
        title: "Bad Call AI",
        description: "Web app that uses GPT-4o Vision to analyze sports highlights and identify egregious calls made by referees. Features include real-time highlights, fan voting, and a ref accuracy leaderboard.",
        image: "/portfolio/bad-call-ai.png",
        technologies: [
            "GPT-4o Vision",
            "NextJS",
        ],
        videoUrl: "https://youtu.be/eQvBilQL-XM?si=RdBCsGdb-beQvACP",
        year: 2025,
    },
    {
        title: "RecruitBase",
        description: "A platform designed for recruiters to track candidates and manage applications and interviews. Features trello-like boards, candidate profiles, resume analysis, note keeping, and interview scheduling.",
        image: "/portfolio/recruitbase.png",
        technologies: [
            "NextJS",
            "Supabase",
            "Stripe",
            "Clerk",
            "Vercel"
        ],
        demoUrl: "https://recruitbase.vercel.app",
        year: 2025,
    },
    {
        title: "Satellite Visualizer",
        description: "3D visualization tool for tracking and displaying satellite positions in real-time. Generates dynamic satellite positionsing based on customer geolocation.",
        image: "/portfolio/satellite-visualizer.png",
        technologies: [
            "React",
            "Three.js",
            "TypeScript",
            "Material UI"
        ],
        codeUrl: "https://github.com/mattkuda/betcha",
        year: 2023,
    },
    {
        title: "Austin Civic Impact Platform",
        description: "An LLM-backed engagement platform that connects Austin citizens with the local government. Users submit requests for city services, and the platform uses LLM to generate community events and initiatives.",
        image: "/portfolio/acip.png",
        technologies: [
            "NextJS",
            "Llama LLM",
            "Google Maps",
            "Tailwind CSS",
            "Vercel"
        ],
        codeUrl: "https://github.com/mattkuda/austin-civic-impact-platform",
        year: 2024,
    },
    {
        title: "Betcha Sports",
        description: "Social sports betting platform that allows users to create and participate in friendly wagers with their friends. Features real-time odds updates, live game tracking, and social interaction features.",
        image: "/portfolio/betcha.png",
        technologies: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Google Cloud",
        ],
        codeUrl: "https://github.com/mattkuda/betcha",
        year: 2020,
    },
];