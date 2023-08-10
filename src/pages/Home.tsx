import BookCard from "../components/BookCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { useGetBooksQuery } from "../redux/api/apiSlice";
import { IBook } from "../types/types";

const Home = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);

  if (isLoading) {
    <LoadingSpinner />;
  }

  return (
    <div>
      <h1 className="text-center text-4xl font-mono text-blue-900 border-b-4 border-spacing-4">
        Welcome to our Book Verse
      </h1>

      <div className="grid grid-cols-5 gap-4 px-4 mb-2 mt-6">
        {data?.data?.map((book: IBook) => (
          <BookCard book={book} key={book?._id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
