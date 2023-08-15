import { Link } from "react-router-dom";
import { IBook } from "../types/types";

interface IProps {
  book: IBook;
}

const BookCard = ({ book }: IProps) => {
  const { _id, title, author, genre, imageURL, publicationDate } = book;

  return (
    <Link
      to={`/books/${_id}`}
      className="card bg-base-100 shadow-xl flex flex-col border border-info cursor-pointer"
    >
      <figure>
        <img
          src={imageURL}
          alt="book"
          style={{ aspectRatio: "300 / 200" }}
          className=" w-[300px] h-[200px]"
        />
      </figure>
      <div className="card-body">
        <h2 className=" text-sm md:text-md lg:text-xl">
          {title} <span className="badge badge-xs badge-warning">{genre}</span>
        </h2>
        <p className="text-sm text-gray-400">by: {author}</p>
        <p className="text-sm text-gray-400">year: {publicationDate}</p>
      </div>
    </Link>
  );
};

export default BookCard;
