import React from "react";
import { getDatabase } from "@/lib/notion";

import {
  NotionAPIProps,
  NotionPost,
} from "@/components/interface/NotionInterface";
import ExperiencePannel from "@/components/organisms/ExperiencePannel";
import TitleBanner from "@/components/organisms/TitleBanner";

const Experiences = (props: NotionAPIProps) => {
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
    console.log(post.properties);
  });

  return (
    <>
      <div className="text-center">
        <TitleBanner title="Experiences" />
      </div>

      <div className="mx-auto my-10 w-[90%] max-w-[1024px]">
        {publishedPosts.map((post) => {
          const postName =
            post.properties.name.type === "title"
              ? post.properties.name.title[0].plain_text
              : "NaN";
          const postDate =
            post.properties.date.type === "rich_text"
              ? post.properties.date.rich_text[0].plain_text
              : "NaN";
          const postDetail =
            post.properties.detail.type === "rich_text"
              ? post.properties.detail.rich_text[0].plain_text
              : "NaN";
          return (
            <ExperiencePannel
              key={post.id}
              title={postName}
              date={postDate}
              detail={postDetail}
            />
          );
        })}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const databaseId = process.env.NOTION_EXPERIENCES_DATABASE;
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

export default Experiences;
