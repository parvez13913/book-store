import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../redux/api/apiSlice";
import LoadingSpinner from "../components/LoadingSpinner";

const BookDetails = () => {
  const { id } = useParams();

  const { data: book, isLoading } = useGetSingleBookQuery(id);
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h1 className="ml-4 text-3xl font-mono text-blue-900 border-b-2 border-spacing-y-32 border-info">
        Book Details
      </h1>
      <div className="flex items-center justify-center">
        <div className="card lg:card-side bg-base-100 shadow-xl my-8  p-4 border border-info">
          <figure>
            <img
              style={{ aspectRatio: "300 / 200" }}
              className=" w-[500px] h-[400px]"
              src={book?.data?.imageURL}
              alt="book image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Title: {book?.data?.title}</h2>
            <h2>Athuhor: {book?.data?.author}</h2>
            <h2>Publication Year: {book?.data?.publicationDate}</h2>
            <h2>Genre: {book?.data?.genre}</h2>
            <div>
              <div className="">
                <button>Edit</button>
              </div>
              <div className="">
                <button>Delete</button>
              </div>
              git add
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
