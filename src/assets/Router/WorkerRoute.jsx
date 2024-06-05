
import PropTypes from 'prop-types'
import useRole from '../Components/Hook/userRole'
import LoadingSpinner from '../Components/Shareds/LoadingSpinner'
import { Navigate } from 'react-router-dom'


const WorkerRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <LoadingSpinner />
  if (role === 'Worker') return children
  return <Navigate to='/forbidden' />
}

export default WorkerRoute

WorkerRoute.propTypes = {
  children: PropTypes.element,
}