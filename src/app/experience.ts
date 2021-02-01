export interface Experience {
    id: number;
    role: string;
    company: Company;
    duration: string;
    startMonth: string;
    endMonth: string;
    description: string;
    location: string;
    user: string;
}

export interface Company {
    id: number;
    slug: string;
    name: string;
    rating: number;
}
