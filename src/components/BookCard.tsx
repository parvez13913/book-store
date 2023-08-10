import { Link } from "react-router-dom";

const BookCard = () => {
  return (
    <Link
      to=""
      className="card bg-base-100 shadow-xl flex flex-col border border-gray-200 cursor-pointer"
    >
      <figure>
        <img
          src="https://i.ibb.co/wYfGHrC/41hnl4-MN0p-L-AC-UF1000-1000-QL80.jpg"
          alt="book"
          style={{ aspectRatio: "300 / 200" }}
          className=" w-[300px] h-[200px]"
        />
      </figure>
      <div className="card-body">
        <h2 className=" text-sm md:text-md lg:text-xl">
          title <span className="badge badge-xs badge-warning">genre</span>
        </h2>
        <p className="text-sm text-gray-400">by </p>
        <p className="text-sm text-gray-400">year: </p>
      </div>
    </Link>
  );
};

export default BookCard;
