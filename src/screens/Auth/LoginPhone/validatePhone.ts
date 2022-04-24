import {object, string} from 'yup';
import {PHONE_REGEX} from '@utils/constants';
export const loginPhone = object().shape({
  phoneNumber: string()
    .matches(PHONE_REGEX, 'Phone number is not valid')
    .required(),
});
