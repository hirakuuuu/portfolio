import { Client } from "@notionhq/client";

const client = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (databaseId: string) => {
  const response = await client.databases.query({
    database_id: databaseId,
  });
  return response.results;
};

export const getPage = async (pageId: string) => {
  const response = await client.pages.retrieve({ page_id: pageId });
  return response;
};
