import {TechBlogs} from "./TechBlogs";

export class AdSpace {
    private static cache: string[] = [];

    static getAdSpaces(): string[] {
        if (this.cache.length > 0) {
            return this.cache;
        }

        // FIXME : only return blogs that start with a 'T'

        this.cache = TechBlogs.listAllBlogs();
        return this.cache;
    }
}
