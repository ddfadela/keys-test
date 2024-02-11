// TextAreaInput.js
import React, { useState } from 'react';

// Define the type for the props
interface TextAreaInputProps {
  onAddKey: (key: string) => void;
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({ onAddKey }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddKey = () => {
    if (inputValue.trim() !== '') {
      onAddKey(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className='flex flex-col gap-4 '>
      <textarea className='bg-gray-300 '
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className='rounded-xl bg-green-300 p-[10px] px-[20px]' onClick={handleAddKey}>Add Key</button>
    </div>
  );
};

export default TextAreaInput;
