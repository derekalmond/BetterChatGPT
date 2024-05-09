import React from 'react';

const UpArrow = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      stroke='currentColor'
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-4 w-4 m-1'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <line x1='12' y1='19' x2='12' y2='5'></line> {/* Inverted the line to match the direction */}
      <polyline points='12 5 5 19 19 19'></polyline> {/* Adjusted to point upward */}
    </svg>
  );
};

export default UpArrow;
