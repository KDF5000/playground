const { Client } = require("@notionhq/client")
import Notion from "@notion-cms/client";
const notion = new Notion({ auth: "secret_Jbt9BN8bFQ1UvYFtvoUFtkCZBsEdR9XBG45UI6kYmI6" });

// Initializing a client
const notion1 = new Client({
    auth: "secret_Jbt9BN8bFQ1UvYFtvoUFtkCZBsEdR9XBG45UI6kYmI6",
})

export async function queryDatabase(id, { limit = Infinity, pageSize = 100 }) {
    let pages = notion.loadDatabase(id, {});
    // let response = await notion.databases.query({
    //     database_id: id,
    // });
    // let pages = response.results;
    // // Un-paginate
    // while (response.has_more && pages.length < limit) {
    //     response = await this.databases.query({
    //         database_id: databaseId,
    //         page_size: pageSize,
    //         start_cursor: response.next_cursor,
    //     });
    //     pages = pages.concat(response.results);
    // }

    return pages;
}

export async function retrievePage(id) {
    return notion.loadPage(id);
}
