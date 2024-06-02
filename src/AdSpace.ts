import {TechBlogs} from "./TechBlogs";

export class AdSpace {
    private static cache: string[] = [];

    static getAdSpaces(): string[] {
        if (this.cache.length > 0) {
            return this.cache;
        }

        this.cache = TechBlogs.listAllBlogs();
        return this.cache;
    }
}
