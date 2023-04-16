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
  const _posts = [...posts].reverse() as NotionPost[];
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
      <div className="text-center">
        <TitleBanner title="experiences" />
      </div>

      <div className="experience-card mx-auto my-10 w-[90%] max-w-[1280px]">
        {publishedPosts.map((post, index) => {
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
              isRight={index % 2 == 0}
              title={postName}
              date={postDate}
              detail={postDetail}
            />
          );
        })}
        <div
          className="last-experience-pannel relative -translate-x-[1px]  border-l-2 border-solid border-[#4c5870] pb-6 pl-6
              pt-10 before:absolute before:left-6 before:top-1 before:block before:pt-2 before:text-sm 
                before:font-bold before:content-[attr(date-is)] md:ml-[50%] md:pr-6"
        ></div>
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
