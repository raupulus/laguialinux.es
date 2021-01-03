export interface MenuCollection {
    id: number;
    title: string;
    name: string;
    url: string | null;
    sections: SubmenuCollection[] | null;
}

export interface SubmenuCollection {
    id: number;
    title: string;
    name: string;
    url: string | null;
}