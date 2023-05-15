export const userValidation = [
    { fieldName: "name", required: true },
    { fieldName: "email", required: true, unique: true },
    { fieldName: "password", required: true }
];

export const userAuthValidation = [
  { fieldName: "email", required: true },
  { fieldName: "password", required: true }
];
