import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex justify-center items-center flex-col">
    <h1 className="head_text text-center select-none">
      <span className="bg-gradient-to-r from-blue-500 via-indigo-800 to-blue-500 bg-clip-text text-transparent text-center select-none">
        Discover & Share
      </span>
    </h1>
    <p className="mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl text-center select-none">
      share your code、prompts、ideas
    </p>
    <Feed />
  </section>
);

export default Home;
