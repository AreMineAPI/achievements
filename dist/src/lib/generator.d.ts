export declare class Generator {
    title: string;
    description: string;
    icon: string;
    icons: {
        [key: string]: string;
    };
    constructor({ title, description, icon }: {
        title: string;
        description: string;
        icon: string;
    });
    create(): Promise<any>;
    static getIcons(): Object;
}
