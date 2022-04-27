import {object, string} from 'yup';
export const recoveryValidate = object().shape({
  email: string()
    .email('Email không đúng địng dạng')
    .required('Email không được để trống'),
});
