import {object, string} from 'yup';
import {phoneRegExp} from '@utils/constants';
export const loginOTP = object().shape({
  phonenumber: string().matches(phoneRegExp, 'Phone number is not valid'),
});
