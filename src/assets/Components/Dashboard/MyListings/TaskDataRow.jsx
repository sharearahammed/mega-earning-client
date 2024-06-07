/* eslint-disable react/prop-types */
import { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";
import UpdateModal from "../../Modal/UpdateModal";



const TaskDataRow = ({task,handleDelete,refetch}) => {
      // for delete modal
  const [isOpen, setIsOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const closeModal = () => {
    setIsOpen(false)
  }
    return (
        <tr>
      
      <td className='px-5 py-5 border-b border-gray-200  text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{task?.task_title}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200  text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{task?.task_quantity}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200  text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${task?.payable_amount}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200  text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{task?.timestamp}</p>
      </td>
      
      <td className='px-5 py-5 border-b border-gray-200  text-sm'>
        <button
          onClick={() => setIsEditModalOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Update</span>
        </button>
        {/* Update Modal */}
        <UpdateModal
          isOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          task={task}
          refetch={refetch}
        />
      </td>
      <td className='px-5 py-5 border-b border-gray-200  text-sm'>
        <button
          onClick={() => setIsOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-500 opacity-50 rounded-full'
          ></span>
          <span className='relative text-white'>Delete</span>
        </button>
        {/* Delete modal */}
        <DeleteModal
          isOpen={isOpen}
          closeModal={closeModal}
          handleDelete={handleDelete}
          id={task?._id}
        />
      </td>
    </tr>
    );
};

export default TaskDataRow;