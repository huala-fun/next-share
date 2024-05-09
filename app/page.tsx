import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center select-none">
      Discover & Share
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center select-none">
        NextShare
      </span>
    </h1>
    <p className="desc text-center select-none">share your code、prompts、ideas</p>
    <Feed />
  </section>
);

export default Home;
