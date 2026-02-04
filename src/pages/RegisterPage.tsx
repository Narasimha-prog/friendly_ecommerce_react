import React, { useState, type ChangeEvent, type FormEvent } from 'react'
import type { UserRegisterModel } from '../api/models/userModels';
import { createUser } from '../api/userService';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/user/userReducer';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {


  const navigate=useNavigate();

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
       
    console.log("Form Data Submitted:", formData);
    // Here you can add logic to send formData to your API  for registration
     createUser(formData).then(response => {
      console.log("User created successfully:", response);
       dispatch( setUser(response))
       navigate("/login")

    }).catch(error => {
      console.error("Error creating user:", error);
    });

    

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
      <form    
             onSubmit={handleSubmit}
             className="max-w-md mx-auto p-4 border border-gray-300 rounded"
          
             >

        <div>
          <label htmlFor="username">Username:</label>
          <input
          className='border rounded p-2 w-full mb-4'
            type="text"
            id="username"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
             className='border rounded p-2 w-full mb-4'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
             className='border rounded p-2 w-full mb-4'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
             className='border rounded p-2 w-full mb-4'
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button
              type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage