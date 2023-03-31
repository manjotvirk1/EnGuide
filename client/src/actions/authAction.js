import axios from 'axios';
import { returnErrors } from './errorAction';

export const loadUser = (dispatch,getState) => {
    dispatch({type:"USER_LOADING"});

    axios.get('/api/auth/user',tokenConfig)
        .then(res => 
            dispatch({
                type:"USER_LOADED",
                payload:res.data
            })
        )
        .catch(err => {
            dispatch(returnErrors(err.response.data,err.response.status));
            dispatch({
                type: "AUTH_ERROR"
            });
        })
}

// Register User
export const register = ({ userType, name, email, password }) => dispatch => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    // Request body
    const body = JSON.stringify({ userType, name, email, password });
  
    axios
      .post('/api/auth/user/createuser', body, config)
      .then(res =>
        dispatch({
          type: "REGISTER_SUCCESS",
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(
          returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
        );
        dispatch({
          type: "REGISTER_FAIL"
        });
      });
  };
  
  
  //Login user
  export const login = ({ userType,email, password }) => dispatch => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    // Request body
    const body = JSON.stringify({ userType,email, password });
  
    axios
      .post('/api/auth/user/login', body, config)
      .then(res =>
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(
          returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
        );
        dispatch({
          type: "LOGIN_FAIL"
        });
      });
  };
  
  
  
  //Logout user 
  export const logout = () => {
    return {
      type: "LOGOUT_SUCCESS"
    };
  };
  
  
  // Setup config/headers and token
  export const tokenConfig = (getState) => {
    // Get token from localstorage
    const token = getState().auth.token;
  
    // Headers
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };
  
    // If token, add to headers
    if (token) {
      config.headers['authToken'] = token;
    }
  
    return config;
  };