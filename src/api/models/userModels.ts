

export interface UserRegisterModel {
  "name": string,
  "email": string,
  "password": string,
  "phoneNumber": string
}


export interface UserLoginModel {
  "email": string,
  "password": string
}

export interface UserResponseModel {
  "id": "string",
  "name": "string"
}