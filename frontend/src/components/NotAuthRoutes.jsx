import React from 'react'
import { Navigate, Outlet } from "react-router-dom"
import PropTypes from 'prop-types';

const NotAuthRoutes = ({isAuth}) => {
  
  NotAuthRoutes.propTypes = {
    isAuth: PropTypes.bool.isRequired,
  };

  return (
    isAuth ? <Navigate to={'/'}/> : <Outlet/> 
  )
}

export default NotAuthRoutes