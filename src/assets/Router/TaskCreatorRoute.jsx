
import PropTypes from 'prop-types'
import useRole from '../Components/Hook/userRole'
import LoadingSpinner from '../Components/Shareds/LoadingSpinner'
import { Navigate } from 'react-router-dom'


const TaskCreatorRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <LoadingSpinner />
  if (role === 'TaskCreator') return children
  return <Navigate to='/forbidden' />
}

export default TaskCreatorRoute

TaskCreatorRoute.propTypes = {
  children: PropTypes.element,
}