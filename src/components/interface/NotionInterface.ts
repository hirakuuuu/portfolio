import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type NotionAPIProps = {
  posts: (PageObjectResponse | PartialPageObjectResponse)[];
};

export type NotionAPIPost = PageObjectResponse | PartialPageObjectResponse;
export type NotionPost = PageObjectResponse;
