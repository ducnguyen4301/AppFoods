import {object, string} from 'yup';
import {phoneRegExp} from '@utils/constants';
export const loginPhone = object().shape({
  phone: string().matches(phoneRegExp, 'Phone number is not valid').required(),
});
