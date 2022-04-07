import {InputProps} from '@components/TextInput/types';
import {Control} from 'react-hook-form';

export interface FormInputProps extends InputProps {
  name: string;
  control: Control<any>;
}
