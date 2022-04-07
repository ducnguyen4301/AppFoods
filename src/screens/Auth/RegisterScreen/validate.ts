import {object, string} from 'yup';

export const registerValidate = object().shape({
  username: string().required('Tên đăng nhập không được bỏ trống'),
  password: string().required('Mật khẩu không được bỏ trống'),
});
