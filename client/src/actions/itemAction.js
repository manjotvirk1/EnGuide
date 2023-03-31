import axios from 'axios';

import { tokenConfig } from './authAction';
import { returnErrors } from './errorAction';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
    .get('/api/auth/assignment')
    .then(res => 
        dispatch({
            type: "GET_ITEMS",
            payload: res.data
        }))
    .catch( err => 
        dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addItem = task => (dispatch,getState) => {
    axios
    .post('/api/auth/assignment', task, tokenConfig(getState))
    .then(res => 
        dispatch({
        type: "ADD_ITEM",
        payload: res.data
    })
    )
    .catch( err => 
        dispatch(returnErrors(err.response.data, err.response.status))
    );
};



export const deleteItem = id => (dispatch,getState) => {
    axios.delete(`/api/auth/assignment/deleteassignment/${id}`,tokenConfig(getState))
    .then(res => 
        dispatch({
            type: "DELETE_ITEM",
            payload: id
        })
    )
    .catch( err => 
        dispatch(returnErrors(err.response.data, err.response.status))
    );

};


export const setItemsLoading = () => {
    return{
        type: "ITEMS_LOADING"
    };
};