/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const AdminWithdrawReqTable = ({ withdraw, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const handleSubmit = async () => {
    console.log(withdraw);
    try {
      Swal.fire({
        title: "Are you sure?", 
        text: "If you confirm then payment successfull",
        icon: "",
        showCancelButton: true,
        confirmButtonColor: "#22AB59",
        cancelButtonColor: "#d33",
        confirmButtonText: " confirm",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axiosSecure.delete(`/withdraw/${withdraw._id}`);
          await axiosSecure.patch(`/user/coin`, withdraw);
          toast.success("Payment Successfull!");
          refetch();
        }
      });
    } catch (error) {
      console.error("Failed to delete user", error);
      toast.error(`Failed to delete user for ${withdraw.worker_name}`);
    }
  };

  return (
    <tr>
      <th></th>
      <td>{withdraw?.worker_name}</td>
      <td>{withdraw?.withdraw_coin}</td>
      <td>${withdraw?.withdraw_amount}</td>
      <td>{withdraw?.account_number}</td>
      <td>{withdraw?.payment_system}</td>
      <td>{withdraw?.withdraw_time}</td>
      <td>
        <button
          onClick={handleSubmit}
          className="bg-green-300 flex justify-center items-center px-3 py-1 rounded-xl"
        >
          Payment
        </button>
      </td>
    </tr>
  );
};

export default AdminWithdrawReqTable;
