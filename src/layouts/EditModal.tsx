import { useForm, SubmitHandler } from "react-hook-form";
import { genres } from "../constants/genre";
const EditModal = () => {
  type Inputs = {
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
    imageURL: string;
    owner: string;
  };
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div>
      <div className="modal" id="my_modal_6">
        <div className="modal-box">
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="border border-info shadow-lg mx-8 w-1/7 mb-8 rounded-lg px-9 py-4"
            >
              <h6 className="text-center my-6 text-xl font-bold border-b-2 border-spacing-3 border-info">
                Edit Book
              </h6>

              <div className="flex space-x-6">
                {/* part-1 */}
                <div>
                  {/* title */}
                  <label className="block font-medium mb-1 text-left">
                    Title
                  </label>
                  <input
                    className="border border-info py-2 px-4 rounded-lg my-2 w-full"
                    {...register("title")}
                  />
                  {/* author */}
                  <label className="block font-medium mb-1 text-left">
                    Author
                  </label>
                  <input
                    className="border border-info py-2 px-4 rounded-lg my-2 w-full"
                    {...register("author")}
                  />

                  {/* genre */}
                  <label className="block font-medium mb-1 text-left">
                    Genre
                  </label>
                  <select className="select select-info py-2 px-4 rounded-lg my-2 w-full font-semibold">
                    <option disabled>Select Genres</option>
                    {genres.map((genre) => (
                      <option>{genre}</option>
                    ))}
                  </select>
                </div>

                {/* part-2 */}
                <div>
                  {/* publicationDate*/}
                  <label className="block font-medium mb-1 text-left">
                    publication Year
                  </label>
                  <input
                    className="border border-info py-2 px-4 rounded-lg my-2 w-full"
                    {...register("publicationDate")}
                  />
                  {/* imageURL*/}
                  <label className="block font-medium mb-1 text-left">
                    Image URL
                  </label>
                  <input
                    className="border border-info py-2 px-4 rounded-lg my-2 w-full"
                    {...register("imageURL")}
                  />
                  {/* owner*/}
                  <label className="block font-medium mb-1 text-left">
                    Owner
                  </label>
                  <input
                    className="border border-info py-2 px-4 rounded-lg my-2 w-full"
                    {...register("owner")}
                    readOnly
                  />
                </div>
              </div>

              {/* submit */}
              <input
                className="bg-blue-900 text-white p-2 rounded-lg w-full mt-2"
                type="submit"
              />
            </form>
          </div>
          <a
            href="#"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </a>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
