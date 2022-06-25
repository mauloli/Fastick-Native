import axios from '../../utils/axios';

export const getUserById = id => {
  return {
    type: 'GET_USER_BY_ID',
    payload: axios.get(`user/${id}`),
  };
};
export const updateUser = (id, form) => {
  return {
    type: 'UPDATE_USER',
    payload: axios.patch(`user/${id}`, form),
  };
};
export const updatePasswordUser = (id, form) => {
  return {
    type: 'UPDATE_PASSWORD_USER',
    payload: axios.patch(`user/password/${id}`, form),
  };
};
