import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import axios from 'axios'
import { app } from '../Firebase/firebase.config'
import useAxiosCommon from '../assets/Components/Hook/useAxiosCommon'
export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const axiosPublic = useAxiosCommon();
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  } 

  const resetPassword = email => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

  const logOut = () =>{
    setLoading(true);
    return signOut(auth);
}

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  // save user
  const saveUser = async user => {
    const currentUser = {
      email: user?.email,
      role: 'Worker',
      status: 'Verified',
      name:user?.displayName,
      image:user?.photoURL,
    }
    const { data } = await axios.put(
      `${import.meta.env.VITE_API_URL}/users`,
      currentUser
    )
    return data
  }

  // onAuthStateChange
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
         setUser(currentUser)
         console.log('current user -->',currentUser)
         if(currentUser){
             const userInfo = {email : currentUser.email}
             axiosPublic.post('/jwt',userInfo)
             .then(res=>{
                 if(res.data.token){
                     localStorage.setItem('access-token',res.data.token)
                     setLoading(false)
                 }
             })
             saveUser(currentUser)
         }
         else{
             localStorage.removeItem('access-token')   
             setLoading(false)       
         }
     })
     return ()=>{
         return unsubscribe();
     }
 },[axiosPublic,user?.email])

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    resetPassword,
    logOut,
    updateUserProfile,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  // Array of children.
  children: PropTypes.array,
}

export default AuthProvider