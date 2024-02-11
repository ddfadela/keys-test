import React from 'react';

const KeyList = ({ keys, onDelete }) => {
  return (
    <div className="">
      {keys.map((key) => (
        <div key={key} className="flex justify-between items-center space-x-4">
          <span>{key}</span>
          <button className='text-red-500' onClick={() => onDelete(key)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default KeyList;
