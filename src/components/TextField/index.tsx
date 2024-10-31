import { ChangeEvent, useState } from 'react';

import BlindSVG from './Blind.svg?react';

import ErrorMessage from '../../components/ErrorMessage';

interface IDefaultTextFieldProps {
  htmlFor?: string;
  labelText?: string;
  id: string;
  type?: 'text' | 'password';
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  isError?: boolean;
  errorMessage?: string;
}

export default function DefaultTextField({
  htmlFor,
  labelText,
  id,
  type = 'text',
  value = '',
  onChange,
  placeholder,
  isError = false,
  errorMessage = '다시 확인해주세요',
}: IDefaultTextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className='relative'>
      {labelText && (
        <label
          className='absolute -top-7 text-text-20 text-subtitle-h5'
          htmlFor={htmlFor}
        >
          {labelText}
        </label>
      )}
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <input
          id={id}
          className={`
            w-full p-4 border rounded-textField box-border border-text-50 text-body-1 transition-all duration-300
            ${isFocused && 'border-primary-30 shadow-input-focus outline-none'}
          `}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
        />
      </div>
      {type === 'password' && (
        <BlindSVG className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer' />
      )}
      <div className='absolute -bottom-6'>
        {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    </div>
  );
}
