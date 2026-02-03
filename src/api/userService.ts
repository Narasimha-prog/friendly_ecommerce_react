import api from "./axios";
import type { UserLoginModel, UserLoginResponse, UserRegisterModel, UserResponseModel } from "./models/userModels";


export const getUsers = async (): Promise<UserResponseModel[]> => {
  const res = await api.get("/users");
  return res.data;
};

export const loginUser= async (data:UserLoginModel): Promise<UserLoginResponse> =>{
     const res=await api.post("/users/login",data)
     return res.data;
}

export const getUserById = async (id: string): Promise<UserResponseModel> => {
  const res = await api.get(`/users/${id}`);
  return res.data;
};

export const createUser = async (data: UserRegisterModel): Promise<UserResponseModel> => {
  const res = await api.post("/users/register", data);
  return res.data;
};

export const updateUser = async (id: string, data: { name?: string; email?: string }): Promise<UserResponseModel> => {
  const res = await api.put(`/users/${id}`, data);
  return res.data;
};

export const deleteUser = async (id: string): Promise<string> => {
  const res = await api.delete(`/users/${id}`);
  return res.data;
};