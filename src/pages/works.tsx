import React from "react";
import { getDatabase } from "@/lib/notion";
import {
  NotionAPIProps,
  NotionPost,
} from "@/components/interface/NotionInterface";
import WorkCard from "@/components/organisms/WorkCard";
import TitleBanner from "@/components/organisms/TitleBanner";

const Works = (props: NotionAPIProps) => {
  const { posts } = props;
  const _posts = posts as NotionPost[];
  let publishedPosts: NotionPost[] = [];

  _posts.map((post: NotionPost) => {
    if (
      post.properties.publish.type === "checkbox"
        ? !post.properties.publish.checkbox
        : true
    )
      return;
    publishedPosts.push(post);
  });

  return (
    <>
      <div className="mx-4 text-center md:mx-16 2xl:mx-32">
        <TitleBanner title="works" />
        <div className="mb-16 grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-8 2xl:grid-cols-3">
          {publishedPosts.map((post: NotionPost) => {
            const postName =
              post.properties.name.type === "title"
                ? post.properties.name.title[0].plain_text
                : "NaN";
            const postTags =
              post.properties.tag.type === "multi_select"
                ? post.properties.tag.multi_select.map((tag) => tag.name)
                : [];
            const postDetail =
              post.properties.detail.type === "rich_text"
                ? post.properties.detail.rich_text[0].plain_text
                : "NaN";
            const postURL =
              post.properties.URL.type === "url" ? post.properties.URL.url : "";

            return (
              <WorkCard
                key={post.id}
                name={postName}
                image={"/img/" + postName + ".png"}
                tags={postTags}
                detail={postDetail}
                url={postURL as string}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const databaseId = process.env.NOTION_WORKS_DATABASE;
  if (databaseId) {
    const database = await getDatabase(databaseId);
    return {
      props: {
        posts: database,
      },
      revalidate: 1,
    };
  }
};

export default Works;
