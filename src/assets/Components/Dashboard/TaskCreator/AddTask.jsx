import { useNavigate } from "react-router-dom";
import AddNewTasks from "./AddNewTasks";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useState } from "react";
import useAuth from "../../Hook/useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { imageUpload } from "../../api/utils";

const AddTask = () => {
    const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()
  const [imagePreview, setImagePreview] = useState()
  const [imageText, setImageText] = useState('Upload Image')
  const [startDate, setStartDate] = useState(new Date());


  const { mutateAsync } = useMutation({
    mutationFn: async taskdata => {
      const { data } = await axiosSecure.post(`/addTask`, taskdata)
      return data
    },
    onSuccess: () => {
      console.log('Data Saved Successfully')
      toast.success('Task Added Successfully!')
      navigate('/dashboard/my-listings')
      setLoading(false)
    },
  })

  const { data : loginUser = [],refetch } = useQuery({
    queryKey: ['user'],
    queryFn: async()=>{
        const {data} = await axiosSecure.get(`/users/${user.email}`)
        return data
    }
})
const availableCount = parseFloat(loginUser?.coins)
console.log(availableCount)

  //   Form handler
  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const form = e.target
    const task_title = form.task_title.value
    const payable = form.payable_amount.value
    const payable_amount = parseFloat(payable)
    const quantity = form.task_quantity.value
    const task_quantity = parseFloat(quantity)
    const date = startDate
    const currentTime  = new Date()
    const submission_info = form.submission_info.value
    const task_detail = form.task_detail.value
    const image = form.image.files[0]

    

    const taskCreator = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    }

    try {
      const image_url = await imageUpload(image)
      const taskdata = {
        task_title,
        payable_amount,
        task_quantity,
        date,
        currentTime,
        submission_info,
        task_detail,
        image: image_url,
        taskCreator
      }
      console.table(taskdata)

      if(payable_amount*task_quantity > availableCount){
        return toast.error('Not available Coin. Purchase Coin')
    }
      //   Post request to server
      await mutateAsync(taskdata)
      refetch()
    } catch (err) {
      console.log(err)
      toast.error(err.message)
      setLoading(false)
    }
  }

  //   handle image change
  const handleImage = image => {
    setImagePreview(URL.createObjectURL(image))
    setImageText(image.name)
  }


    return (
        <>
        <AddNewTasks
        setStartDate={setStartDate}
        startDate={startDate}
        handleImage={handleImage}
        handleSubmit={handleSubmit}
        imagePreview={imagePreview}
        imageText={imageText}
        loading={loading}
         />
        </>
    );
};

export default AddTask;