const { Client } = require("@notionhq/client");

const { NOTION_KEY, NOTION_DB } = process.env;

const notion = new Client({
    auth: NOTION_KEY,
});

exports.handler = async function(event, context) {
    try {
        const response = await notion.databases.query({
            database_id: NOTION_DB,
        });

        return {
            statusCode: 200,
            body: JSON.stringify(response),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "An error occurred",
                error: error.message,
            }),
        };
    }
};
