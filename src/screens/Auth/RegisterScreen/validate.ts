import {object, string} from 'yup';
import {PASSWORD_REGEX, USERNAME_REGEX} from '@utils/constants';
import {ref} from 'yup';

export const signUpValidate = object().shape({
  email: string()
    .email('Email không đúng địng dạng')
    .required('Email không được để trống'),
  fullName: string().required('Họ và tên không được để trống'),
  username: string()
    .matches(USERNAME_REGEX, 'Tên đăng nhập không đúng định dạng')
    .required('Tên đăng nhập không được để trống'),
  password: string()
    .matches(PASSWORD_REGEX, 'Mật khẩu không đúng định dạng')
    .required('Mật khẩu không được để trống'),
  confirmPassword: string()
    .required('Mật khẩu xác thực không được để trống')
    .oneOf([ref('password'), null], 'Mật khẩu xác thực không trùng khớp'),
});
