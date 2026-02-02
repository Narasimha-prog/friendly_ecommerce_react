import React, { useState, type ChangeEvent } from 'react'
import type { UserRegisterModel } from '../api/models/userModels';
import { createUser } from '../api/userService';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/auth/authReducer';

const RegisterPage = () => {



   const [formData, setFormData] = useState<UserRegisterModel>({
    name: "",
    email: "",
    password: "",
    phoneNumber: ""
  });
               const dispatch = useDispatch();
                               
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target;

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
       
    console.log("Form Data Submitted:", formData);
    // Here you can add logic to send formData to your API  for registration
     const response = createUser(formData).then(response => {
      console.log("User created successfully:", response);
    }).catch(error => {
      console.error("Error creating user:", error);
    });

     dispatch( loginSuccess(response))

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      password: "",
      phoneNumber: ""
    });

  }


  return (
    <div>
        RegisterPage

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="name"  value={formData.name}  onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </div>
          <button type="submit">Register</button>
        </form>

    </div>
  )
}

export default RegisterPage