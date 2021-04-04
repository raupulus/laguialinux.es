export interface MenuCollection {
    id: number;
    title: string;
    name: string;
    group?: string | null;
    sections?: SubmenuCollection[] | null;
    template?: string | 'generic',
}

export interface SubmenuCollection {
    id: number;
    title: string;
    name: string;
}

export interface BreadCrumbInterface {
    name: string;
    active?: boolean | false;
}