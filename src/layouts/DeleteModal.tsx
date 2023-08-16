import { useNavigate, useParams } from "react-router-dom";
import { useDeleteBookMutation } from "../redux/api/apiSlice";
import swal from "sweetalert";
import { useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const Modal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [deleteBook, { isSuccess, error, isLoading }] = useDeleteBookMutation();
  const handelDelete = (id: string) => {
    deleteBook(id);
  };

  useEffect(() => {
    if (isSuccess) {
      swal("Delete", "Book deleted successfully", "success");
      navigate("/home");
    }
  }, [isSuccess, navigate]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    swal("Opps!!", "Forbidden", "error");
    return;
  }

  return (
    <div>
      <div className="modal" id="my_modal_8">
        <div className="modal-box">
          <p className="text-center font-bold text-red-600">
            Do you want to delete! Press Ok
          </p>
          <p className="text-center font-bold text-green-600">
            Do you want to cancel ! Press Cancel
          </p>
          <div className="space-x-12 text-center space-y-6">
            <a className="btn btn-error" onClick={() => handelDelete(id || "")}>
              Ok
            </a>
            <a href="#" className="btn btn-success">
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
