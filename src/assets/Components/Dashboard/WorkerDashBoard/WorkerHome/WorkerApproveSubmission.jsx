/* eslint-disable react/prop-types */

const WorkerApproveSubmission = ({approvedSubmission,idx}) => {
    return (
        <tr>
        <th>
          <label>
            {idx+1}
          </label>
        </th>
        <td>
          {approvedSubmission?.task_title}
        </td>
        <td>
        ${approvedSubmission?.payable_amount}
        </td>
        <td>{approvedSubmission?.creator_email}</td>
        <td>
        {approvedSubmission?.status}
        </td>
        
      </tr>
    );
};

export default WorkerApproveSubmission;