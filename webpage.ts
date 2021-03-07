export class Webpage {
    address: string;
    title: string;

    getWebpageName(): string {
        return `Webpage Title: ${this.title} URL: ${this.address}`;
    }

    constructor(title: string, address: string) {
        this.address = address;
        this.title = title;
    }
}

