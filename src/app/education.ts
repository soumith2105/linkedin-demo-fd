export interface Education {
    id: number;
    institute: Institute;
    duration: string;
    startMonth: string;
    endMonth: string;
    description: string;
    location: string;
    course: string;
    user: string;
}

export interface Institute {
    id: number;
    slug: string;
    name: string;
    rating: number;
}
