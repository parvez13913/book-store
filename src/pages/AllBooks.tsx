import BookCard from "../components/BookCard";
import SearchAndFilter from "../components/searchAndFilter";
import { useGetBooksQuery } from "../redux/api/apiSlice";
import { IBook } from "../types/types";

const AllBooks = () => {
  const { data } = useGetBooksQuery(undefined);
  return (
    <div>
      <h1 className="ml-4 text-3xl font-mono text-blue-900 border-b-4 border-spacing-y-32">
        All Books
      </h1>
      <div>
        <SearchAndFilter />
      </div>

      <div className="grid grid-cols-5 gap-4 px-4 mb-2 mt-6">
        {data?.data?.map((book: IBook) => (
          <BookCard book={book} key={book?._id} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
