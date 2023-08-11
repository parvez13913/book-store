import BookCard from "../components/BookCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { useGetBooksQuery } from "../redux/api/apiSlice";
import { IBook } from "../types/types";

const Home = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h1 className="ml-4 text-3xl font-mono text-blue-900 border-b-2 border-spacing-y-32 border-info">
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
