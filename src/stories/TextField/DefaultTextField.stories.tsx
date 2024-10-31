import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from '@storybook/preview-api';

import DefaultTextField from '@/stories/TextField';

const meta = {
  title: 'Input/DefaultTextField',
  component: DefaultTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          width: '500px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    id: {
      control: 'text',
      description: '텍스트 필드의 id 값',
    },
    htmlFor: {
      control: 'text',
      description: '텍스트 필드의 htmlFor값',
    },
    labelText: {
      control: 'text',
      description: '텍스트 필드의 label 문구',
    },
    value: {
      control: 'text',
      description: '텍스트 필드의 값',
    },
    onChange: {
      action: 'changed',
      description: '텍스트 필드 값 변경 이벤트',
    },
    placeholder: {
      control: 'text',
      description: '텍스트 필드에 들어갈 문자열의 정보',
    },
    type: {
      control: { type: 'select', options: ['text', 'password'] },
      description: '텍스트 필드의 타입',
    },
    isError: {
      control: 'boolean',
      description: '에러 상태 유무',
    },
    errorMessage: {
      control: 'text',
      description: '에러 메세지에 들어갈 문구',
    },
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    id: 'text',
    value: '',
    onChange: fn(),
    placeholder: 'Enter your text here',
    type: 'text',
    isError: false,
    errorMessage: '다시 확인해주세요',
  },
  render: function Render(args) {
    const [value, setValue] = useState<string>('');

    return (
      <DefaultTextField
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const Password: Story = {
  args: {
    id: 'password',
    value: '',
    onChange: fn(),
    placeholder: 'Enter your password here',
    type: 'password',
    isError: false,
    errorMessage: '비밀번호를 8자 이상 입력하세요',
  },
  render: function Render(args) {
    const [value, setValue] = useState<string>('');

    return (
      <DefaultTextField
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const LabelField: Story = {
  args: {
    htmlFor: 'label-field',
    labelText: 'Name',
    id: 'label-field',
    value: '',
    onChange: fn(),
    placeholder: 'Enter your name here',
    type: 'text',
    isError: false,
    errorMessage: '이름을 2~10자 이내로 입력하세요',
  },
  render: function Render(args) {
    const [value, setValue] = useState<string>('');

    return (
      <DefaultTextField
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};
