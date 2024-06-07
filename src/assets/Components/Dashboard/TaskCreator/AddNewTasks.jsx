/* eslint-disable react/prop-types */

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ImSpinner9 } from "react-icons/im";

const AddNewTasks = ({
  setStartDate,
  startDate,
  imagePreview,
  handleSubmit,
  handleImage,
  imageText,
  loading,
}) => {
  return (
    <div className="">
      <h1 className="lg:text-2xl font-bold">Add Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Task Title
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#2de576] focus:outline-[#22AB59] rounded-md "
                name="task_title"
                id="name"
                type="text"
                placeholder="Task Title"
                required
              />
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="payable_amount" className="block text-gray-600">
                  Payable Amount
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-[#2de576] focus:outline-[#22AB59] rounded-md "
                  name="payable_amount"
                  id="payable_amount"
                  type="number"
                  placeholder="Payable Amount"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="guest" className="block text-gray-600">
                  Task Quantity
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-[#2de576] focus:outline-[#22AB59] rounded-md "
                  name="task_quantity"
                  id="guest"
                  type="number"
                  placeholder="Task Quantity"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="submission_info"
                  className="block text-gray-600"
                >
                  Submission Info
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-[#2de576] focus:outline-[#22AB59] rounded-md "
                  name="submission_info"
                  id="submission_info"
                  type="text"
                  placeholder="Submission Info"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label
                  htmlFor="completion_date"
                  className="block text-gray-600"
                >
                  Completion Date
                </label>

                <DatePicker
                  className="w-full px-4 py-3 text-gray-800 border border-[#2de576] focus:outline-[#22AB59] rounded-md"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="task_detail" className="block text-gray-600">
                Task Detail
              </label>

              <textarea
                id="task_detail"
                className="block rounded-md focus:[#2de576] w-full h-32 px-4 py-3 text-gray-800  border border-[#2de576] focus:outline-[#22AB59] "
                name="task_detail"
                required
              ></textarea>
            </div>
            <div className=" p-4 bg-white w-full  m-auto rounded-lg">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      onChange={e=>handleImage(e.target.files[0])}
                      hidden
                      required
                    />
                    
                    <div className='bg-[#22AB59] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-[#22AB59]'>
                      {/* {imageText} */}
                      {imageText.length > 20
                        ? imageText.split('.')[0].slice(0, 15) +
                          '....' +
                          imageText.split('.')[1]
                        : imageText}
                    </div>
                  </label>
                </div>
              </div>
              <div className='h-16 w-16 object-cover overflow-hidden flex items-center'>
                {imagePreview && <img src={imagePreview} />}
              </div>
            </div>
          </div>
        </div>

        <button
          disabled={loading}
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#22AB59]'
        >
          {loading ? (
            <ImSpinner9 className='animate-spin m-auto' />
          ) : (
            ' Add Task'
          )}
        </button>
      </form>
    </div>
  );
};

export default AddNewTasks;
