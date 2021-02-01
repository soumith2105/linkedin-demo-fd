export interface Skill {
    id: number;
    language: Language;
    level: number;
    user: string;
}

export interface Language {
    id: number;
    slug: string;
    name: string;
    type: string;
}
