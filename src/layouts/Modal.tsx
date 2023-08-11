import { useNavigate, useParams } from "react-router-dom";
import { useDeleteBookMutation } from "../redux/api/apiSlice";
import { useEffect } from "react";

const Modal = () => {
  const { id } = useParams();
  const [deleteBook, { isSuccess }] = useDeleteBookMutation();

  const handelDelete = (id: string) => {
    deleteBook(id);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate("/home");
    }
  }, [isSuccess, navigate]);

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
