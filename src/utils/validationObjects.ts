export const userValidation = [
    { fieldName: "name", required: true },
    { fieldName: "email", required: true, unique: true },
    { fieldName: "password", required: true }
];
