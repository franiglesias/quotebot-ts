/*
This simulates a very slow database connection

You are not supposed to touch this file
 */

import {sleep} from "./Sleep";

export class TechBlogs {

    static listAllBlogs() {
        try {
            sleep(5000);
        } catch (e) {
            throw e;
        }

        return [
            "HackerNews",
            "Reddit",
            "TechCrunch",
            "BuzzFeed",
            "TheHuffPost",
            "TMZ",
            "GigaOM"
        ];
    }
}
