export interface Experience {
    id: string;
    role: string;
    company: Company;
    duration: string;
    startMonth: string;
    endMonth: string;
    description: string;
    location: string;
}

export interface Company {
    id: number;
    slug: string;
    name: string;
    rating: number;
}
