/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { compareAsc, format, parseISO } from "date-fns";
const PaymentHistoryTable = ({cart,idx}) => {
  const date = cart?.date ? parseISO(cart.date) : null;
    return (
        <tr>
        <th>{idx+1}</th>
        <td>{cart?.cart?.description}</td>
        <td>${cart?.cart?.price}</td>
        <td>{cart?.cart?.coins}</td>
        <td>{date ? format(date,'MMMM do, yyyy h:mm a'):"Invalid date"}</td>
      </tr>
    );
};

export default PaymentHistoryTable;