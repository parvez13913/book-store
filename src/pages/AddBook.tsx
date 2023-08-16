import { genres } from "../constants/genre";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateBookMutation } from "../redux/api/apiSlice";
import swal from "sweetalert";
import { parseAccessToken } from "../constants/parseAccessToken";
import LoadingSpinner from "../components/LoadingSpinner";
import { useEffect } from "react";

const AddBook = () => {
  const [createBook, { isSuccess, isLoading }] = useCreateBookMutation();

  type Inputs = {
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
    imageURL: string;
    owner: string;
  };
  type IUser = {
    userId: string;
    userEmail: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const accessToken = localStorage.getItem("accessToken");
  const user: IUser = parseAccessToken(accessToken!) as IUser;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    createBook(data);
  };

  useEffect(() => {
    if (isSuccess) {
      swal("Good job!", "Book Created Successfully", "success");
    }
  }, [isSuccess]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex justify-center my-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-info shadow-lg mx-8 w-1/2 mb-8 rounded-lg px-9 py-4"
      >
        <h6 className="text-center my-6 text-xl font-bold border-b-2 border-spacing-3 border-info">
          Add Book
        </h6>
        <div>
          {/* title */}
          <label className="block font-medium mb-1 text-left">Title</label>
          <input
            className="border border-info py-2 px-4 rounded-lg my-2 w-full"
            {...register("title", {
              required: {
                value: true,
                message: "Title is Required",
              },
            })}
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
          {/* author */}
          <label className="block font-medium mb-1 text-left">Author</label>
          <input
            className="border border-info py-2 px-4 rounded-lg my-2 w-full"
            {...register("author", {
              required: {
                value: true,
                message: "Author is Required",
              },
            })}
          />
          {errors.author && (
            <p className="text-red-500">{errors.author.message}</p>
          )}

          {/* genre */}
          <label className="block font-medium mb-1 text-left">Genre</label>
          <select
            className="select select-info py-2 px-4 rounded-lg my-2 w-full font-semibold"
            {...register("genre", {
              required: {
                value: true,
                message: "Genre is Required",
              },
            })}
          >
            <option disabled>Select Genres</option>
            {genres.map((genre) => (
              <option value={genre} key={genre}>
                {genre}
              </option>
            ))}
          </select>
          {errors.genre && (
            <p className="text-red-500">{errors.genre.message}</p>
          )}
        </div>
        <div>
          {/* publicationDate*/}
          <label className="block font-medium mb-1 text-left">
            publication Year
          </label>
          <input
            className="border border-info py-2 px-4 rounded-lg my-2 w-full"
            {...register("publicationDate", {
              required: {
                value: true,
                message: "Publication Year is Required",
              },
            })}
          />
          {errors.publicationDate && (
            <p className="text-red-500">{errors.publicationDate.message}</p>
          )}
          {/* owner*/}
          <label className="block font-medium mb-1 text-left">owner</label>
          <input
            defaultValue={user.userId}
            readOnly
            className="border border-info py-2 px-4 rounded-lg my-2 w-full"
            {...register("owner")}
          />

          {/* imageURL*/}
          <label className="block font-medium mb-1 text-left">Image URL</label>
          <input
            className="border border-info py-2 px-4 rounded-lg my-2 w-full"
            {...register("imageURL", {
              required: {
                value: true,
                message: "Image URL is Required",
              },
            })}
          />
          {errors.imageURL && (
            <p className="text-red-500">{errors.imageURL.message}</p>
          )}
        </div>

        {/* submit */}
        <input
          className="bg-blue-900 text-white p-2 rounded-lg w-full mt-2"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddBook;
