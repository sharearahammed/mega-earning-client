/* eslint-disable react/prop-types */

const UpdateTaskForm = ({
  handleSubmit,
  taskData,
  setTaskData,
}) => {
  return (
    <div className='w-full flex flex-col  text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit}>
        <div className=''>
          
          <div className='space-y-1 text-sm'>
            <label htmlFor='title' className='block text-gray-600'>
              Task Title
            </label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-[#52e18b] focus:outline-[#22AB59] rounded-md '
              name='title'
              id='title'
              type='text'
              value={taskData?.task_title}
              onChange={e =>
                setTaskData({ ...taskData, task_title: e.target.value })
              }
              placeholder='Title'
              required
            />
          </div>
          <div className='space-y-1 text-sm'>
            <label htmlFor='title' className='block text-gray-600'>
            Task Detail
            </label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-[#52e18b] focus:outline-[#22AB59] rounded-md '
              name='title'
              id='title'
              type='text'
              value={taskData?.task_detail}
              onChange={e =>
                setTaskData({ ...taskData, task_detail: e.target.value })
              }
              placeholder='Title'
              required
            />
          </div>

          <div className='space-y-1 text-sm'>
            <label htmlFor='description' className='block text-gray-600'>
            Submission Info
            </label>

            <textarea
              id='description'
              value={taskData?.submission_info}
              onChange={e =>
                setTaskData({ ...taskData, submission_info: e.target.value })
              }
              className='block rounded-md focus:[#52e18b] w-full h-32 px-4 py-3 text-gray-800  border border-[#52e18b] focus:outline-[#22AB59] '
              name='description'
            ></textarea>
          </div>
        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#22AB59]'
        >
          Update
        </button>
      </form>
    </div>
  )
}

export default UpdateTaskForm