import axios from "axios";

export const fetchUsers = async () => {

  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allusers`);
  return data;
};

export const addUser = async (newUser) => {
  const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/createuser`, newUser);
  return data;
};

export const editUser=async(editUser) =>{
  const {} = await axios.post(`${import.meta.meta.env.VITE_API_URL}/editUser`,editUser);
};