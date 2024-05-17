import axios from "axios";
import { server } from "../store";

export const register = (formData) => async (dispatch) => {
    try {
      dispatch({ type: 'registerRequest' });
      const { data } = await axios.post(`${server}/register`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });
      dispatch({ type: 'registerSuccess', payload: data });
    } catch (error) {
      dispatch({ type: 'registerFail', payload: error.response.data.message });
    }
  };
  
