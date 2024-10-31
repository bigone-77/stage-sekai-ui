import { ReactNode } from 'react';

import CaptionSVG from './Caption.svg?react';

interface IErrorMessageProps {
  children: ReactNode;
}

export default function ErrorMessage({ children }: IErrorMessageProps) {
  return (
    <span className='flex items-center gap-x-1'>
      <CaptionSVG />
      <p className='text-caption text-error-0'>{children}</p>
    </span>
  );
}
