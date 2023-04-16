import React from "react";
import { getDatabase } from "@/lib/notion";

import {
  NotionAPIProps,
  NotionPost,
} from "@/components/interface/NotionInterface";
import SkillPannel from "@/components/organisms/SkillPannel";

const Skills = (props: NotionAPIProps) => {
  const { posts } = props;
  const _posts = posts as NotionPost[];

  const frontPosts: NotionPost[] = [];
  const backPosts: NotionPost[] = [];
  const devOpsPosts: NotionPost[] = [];
  const otherPosts: NotionPost[] = [];
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
    if (tag === "Front") {
      frontPosts.push(post);
    } else if (tag === "Back") {
      backPosts.push(post);
    } else if (tag === "DevOps") {
      devOpsPosts.push(post);
    } else if (tag === "Others") {
      otherPosts.push(post);
    }
  });

  return (
    <>
      <div className="mx-4 text-center md:mx-16 2xl:mx-32">
        <SkillPannel title={"frontend"} posts={frontPosts} />
        <SkillPannel title={"backend"} posts={backPosts} />
        <SkillPannel title={"devops"} posts={devOpsPosts} />
        <SkillPannel title={"others"} posts={otherPosts} />
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
