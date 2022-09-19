import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

const initialState = {
  isAuth: JSON.parse(localStorage.getItem('username')) ? true : false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, actions) => {
      localStorage.setItem('username', JSON.stringify(actions?.payload))
      state.isAuth = true
    },
    logout: (state) => {
      localStorage.removeItem('username')
      state.isAuth = false
    },
  },
})
export const getAuth = () => useSelector((state) => state?.auth?.isAuth)
export const { login, logout } = authSlice.actions
export default authSlice.reducer
