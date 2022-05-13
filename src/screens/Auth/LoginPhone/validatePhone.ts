import {object, string} from 'yup';
import {PHONE_REGEX} from '@utils/constants';
export const phoneValidate = object().shape({
  phone: string()
    .required('This field is Required')
    .matches(PHONE_REGEX, 'Phone number is not valid')
    .required(),
});
