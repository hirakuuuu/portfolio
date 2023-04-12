import Header from "@/components/organisms/Header";
import React from "react";
import {
  NotionAPIProps,
  NotionPost,
  NotionAPIPost,
} from "@/components/interface/NotionInterface";
import SkillCard from "@/components/organisms/SkillCard";

import { getDatabase } from "@/lib/notion";
import TitleBanner from "@/components/organisms/TitleBanner";

const Skills = (props: NotionAPIProps) => {
  const { posts } = props;
  const _posts = posts as NotionPost[];

  const frontPosts: NotionPost[] = [];
  const backPosts: NotionPost[] = [];
  const devOpsPosts: NotionPost[] = [];
  _posts.map((post: NotionPost) => {
    if (
      post.properties.publish.type === "checkbox"
        ? !post.properties.publish.checkbox
        : true
    )
      return;
    const tag =
      post.properties.tag.type === "multi_select"
        ? post.properties.tag.multi_select[0].name
        : "NaN";
    if (tag === "front") {
      frontPosts.push(post);
    } else if (tag === "back") {
      backPosts.push(post);
    } else if (tag === "devops") {
      devOpsPosts.push(post);
    }
  });

  return (
    <>
      <div className="mx-4 text-center md:mx-16">
        <TitleBanner title="FrontEnd" />
        <div className="mb-16 grid grid-cols-1 gap-y-16  md:grid-cols-2 md:gap-x-8">
          {frontPosts.map((post: NotionPost) => {
            const postName =
              post.properties.name.type === "title"
                ? post.properties.name.title[0].plain_text
                : "NaN";
            const postImage =
              post.properties.image.type === "rich_text"
                ? post.properties.image.rich_text[0].plain_text
                : "NaN";
            const postDetail =
              post.properties.detail.type === "rich_text"
                ? post.properties.detail.rich_text[0].plain_text
                : "NaN";

            return (
              <SkillCard
                key={post.id}
                name={postName}
                image={postImage}
                detail={postDetail}
              />
            );
          })}
        </div>
        <div>Back End</div>
        <div className="mb-32 grid grid-cols-1 gap-y-16  md:grid-cols-2 md:gap-x-8">
          {backPosts.map((post: NotionPost) => {
            const postName =
              post.properties.name.type === "title"
                ? post.properties.name.title[0].plain_text
                : "NaN";
            const postImage =
              post.properties.image.type === "rich_text"
                ? post.properties.image.rich_text[0].plain_text
                : "NaN";
            const postDetail =
              post.properties.detail.type === "rich_text"
                ? post.properties.detail.rich_text[0].plain_text
                : "NaN";

            return (
              <SkillCard
                key={post.id}
                name={postName}
                image={postImage}
                detail={postDetail}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const databaseId = process.env.NOTION_SKILLS_DATABASE;
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

export default Skills;
