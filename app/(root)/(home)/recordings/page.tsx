import React from 'react';
import CallList from '@/components/CallList';

const Recordings = () => {
  return (
    <div className='flex flex-col gap-10 text-white'>
      <h1 className='text-3xl font-bold'>Recordings</h1>
      <CallList type='recordings' />
    </div>
  );
};

export default Recordings;