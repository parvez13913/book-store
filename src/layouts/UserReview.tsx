import { SubmitHandler, useForm } from "react-hook-form";
import {
  useGetSingleBookQuery,
  useUserReviewMutation,
} from "../redux/api/apiSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import swal from "sweetalert";
import LoadingSpinner from "../components/LoadingSpinner";

const UserReview = () => {
  type Inputs = {
    review: string;
  };
  const { id } = useParams();
  const { data: book } = useGetSingleBookQuery(id || "");
  const [userReview, { isSuccess, isLoading }] = useUserReviewMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    userReview({ id, data });
  };

  useEffect(() => {
    if (isSuccess) {
      swal("Yes!", "Review added successfully!", "success");
      reset();
    }
  }, [isSuccess]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <form
        className="my-2 w-1/2 container mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Review*/}
        <label className="block font-medium mb-1 text-left">Review</label>
        <input
          className="border py-2 px-4 rounded-lg my-2 w-full"
          {...register("review", {
            required: {
              value: true,
              message: "Review is Required",
            },
          })}
        />
        {errors.review && (
          <p className="text-red-500">{errors.review.message}</p>
        )}
        <input
          className="bg-blue-900 text-white p-2 rounded-lg w-full mt-2"
          type="submit"
        />
      </form>
      {book?.data?.reviews?.map((review: { review: string }, index: number) => (
        <p
          key={index}
          className="my-2 mx-auto p-2 border border-info w-72 rounded-lg"
        >
          {review.review}
        </p>
      ))}
    </div>
  );
};

export default UserReview;
