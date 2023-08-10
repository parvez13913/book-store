import BookCard from "../components/BookCard";

const Home = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-mono text-blue-900 border-b-4 border-spacing-4">
        Welcome to our Book Verse
      </h1>

      <div className="grid grid-cols-5 gap-4 px-4 my-2">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
};

export default Home;
