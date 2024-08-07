import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../redux/api/apiSlice";
import LoadingSpinner from "../components/LoadingSpinner";
import DeleteModal from "../layouts/DeleteModal";
import EditModal from "../layouts/EditModal";
import UserReview from "../layouts/UserReview";

const BookDetails = () => {
  const { id } = useParams();
  const { data: book, isLoading } = useGetSingleBookQuery(id || "");

  if (isLoading) {
    return <LoadingSpinner />;
  }
  const firstName = book?.data?.owner?.firstName;
  const lastName = book?.data?.owner?.lastName;
  const name = `${firstName} ${lastName}`;

  return (
    <div className="">
      <div>
        <h1 className="ml-4 text-3xl font-mono text-[#8cc090] border-b-2 border-spacing-y-32 border-info">
          Book Details
        </h1>
        <div className="flex justify-center">
          <div className="card lg:card-side bg-base-100 shadow-xl mt-8  p-4 border border-info">
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
              <h2>
                This book is added by: <span className="text-info">{name}</span>
              </h2>
              <div className="space-x-10 space-y-10">
                <a href="#my_modal_6" className="btn btn-info">
                  Edit
                </a>

                <a href="#my_modal_8" className="btn btn-error">
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
        <DeleteModal />
        <EditModal />
      </div>
      <UserReview />
    </div>
  );
};

export default BookDetails;
