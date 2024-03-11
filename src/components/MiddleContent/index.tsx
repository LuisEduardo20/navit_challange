import { CreatePost, FeedContent, FeedOptions } from "@/components";

const MiddleContent = () => {
  return (
    <div>
      <section>
        <CreatePost />

        <FeedOptions />

        <FeedContent />
      </section>
    </div>
  );
};

export default MiddleContent;
