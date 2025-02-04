import { useState } from 'react';

export const FormSearch = () => {
  const [title, setTitle] = useState('');

  const handledSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='text-center'>
        <h2 className='text-4xl font-bold my-6'>Old Movies Finder</h2>
        <form onSubmit={handledSubmit}>
          <div className='max-w-[100%] mx-auto  flex '>
            <input
              className='w-[70%] h-[35px] px-2 rounded-l-[8px] outline-none border-y-[1px] border-l-[1px]'
              type='text'
              placeholder='Ingresa una pelicula...'
              onChange={onChange}
            />
            <button className='w-[30%] h-[35px] bg-black text-white rounded-r-[8px] text-center'>
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
