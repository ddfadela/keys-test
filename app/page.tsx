"use client";
import React, { useState } from 'react';
import TextAreaInput from './_components/TextArea';
import KeyList from './_components/KeyList';

export default function Home() {
  const [keys, setKeys] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleAddKey = (key: string) => {
    if (!keys.includes(key)) {
      setKeys([...keys, key]);
      setErrorMessage('');
    } else {
      setErrorMessage('Key already exists!');
    }
  };

  const handleDeleteKey = (key: string) => {
    setKeys(keys.filter((k) => k !== key));
  };

  return (
    <div className='flex justify-center items-center mt-[200px] flex-col'>
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      <TextAreaInput  onAddKey={handleAddKey} />
      <KeyList keys={keys} onDelete={handleDeleteKey} />
    </div>
  );
};
