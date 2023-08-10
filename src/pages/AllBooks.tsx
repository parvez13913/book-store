import BookCard from "../components/BookCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { useGetBooksQuery } from "../redux/api/apiSlice";
import {
  setGenreFilter,
  setSearchQuery,
  setYearFilter,
} from "../redux/fetures/books/bookSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { IBook } from "../types/types";

const AllBooks = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  const { filterGenre, filterYear, searchQuery } = useAppSelector(
    (state) => state.book
  );
  const dispatch = useAppDispatch();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  // filtering
  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGenreFilter(e.target.value));
  };
  const handleYearsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setYearFilter(e.target.value));
  };
  // searching
  // const handleSearchChange = (e: { target: { value: string } }) => {
  //   dispatch(setSearchQuery(e.target.value));
  // };

  let books = data?.data;
  if (filterGenre) {
    books = data?.data?.filter(
      (book: { genre: string }) => book.genre === filterGenre
    );
  } else if (filterYear) {
    books = data?.data?.filter(
      (book: { publicationDate: string }) => book.publicationDate === filterYear
    );
  } else if (searchQuery) {
    books = books.filter(
      (book: { title: string; author: string; genre: string }) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <div>
      <h1 className="ml-4 text-3xl font-mono text-blue-900 border-b-4 border-spacing-y-32">
        All Books
      </h1>
      <div>
        <div className="p-4 space-x-10">
          <select
            className="select select-info w-36 max-w-xs"
            value={filterGenre}
            onChange={handleGenreChange}
          >
            <option disabled>All Genres</option>
            {data?.data?.map((book: IBook) => (
              <option key={book._id}>{book?.genre}</option>
            ))}
          </select>

          <select
            className="select select-info w-36 max-w-xs"
            value={filterYear}
            onChange={handleYearsChange}
          >
            <option disabled>All Years</option>
            {data?.data?.map((book: IBook) => (
              <option key={book._id}>{book?.publicationDate}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-info w-36 max-w-xs"
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 px-4 mb-2 mt-6">
        {books?.map((book: IBook) => (
          <BookCard book={book} key={book?._id} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;