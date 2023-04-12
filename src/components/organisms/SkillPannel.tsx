import SkillCard from "@/components/organisms/SkillCard";
import TitleBanner from "./TitleBanner";
import { NotionPost } from "../interface/NotionInterface";

type SkillPannelProps = {
  title: string;
  posts: NotionPost[];
};

const SkillPannel = (props: SkillPannelProps) => {
  const { title, posts } = props;

  return (
    <>
      <TitleBanner title={title} />
      <div className="mb-16 grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-8 2xl:grid-cols-3">
        {posts.map((post: NotionPost) => {
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
    </>
  );
};

export default SkillPannel;
