import React from 'react';
import CallList from '@/components/CallList';

const Previous = () => {
  return (
    <div className='flex flex-col gap-10 text-white'>
      <h1 className='text-3xl font-bold'>Previous Calls</h1>
      <CallList type='ended' />
    </div>
  );
};

export default Previous;