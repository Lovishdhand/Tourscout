import axios from "axios";



export const fetchUsers = async (page = 1, limit = 10, search = "") => {
  console.log('searchapi',search);
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allusers`, {
    params: { page, limit, search },
  });
  // console.log('data',data);
  return data;
};

export const addUser = async (newUser) => {
  const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/createuser`, newUser);
  return data;
};

export const editUser=async(editUser) =>{
  const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/editUser`,editUser);
  return data;
};
export const deleteUser = async (payload) => {
  
  const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteuser`, {
    data: payload,
  });
  return data;
};


export const addAlbum=async(newAlbum)=>{
  const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/createalbum`, newAlbum);
  return data;
}



export const fetchAlbums = async () => {

  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allalbums`,
    
);
  // console.log('data',data);
  return data;
};


export const addPhoto=async(newPhoto)=>{
  const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/photos`, newPhoto,);
  return data;
}


export const fetchPhotos = async (page = 1, limit = 10, search = "", userId=null,albumId=null) => {

  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allphotos`, {
    params: { page, limit, search,userId,albumId },
  },
    
);
  // console.log('data',data);
  return data;
};