import React from 'react';
import IconsSVG from './icons.svg';

function Icons({name, size}) {

  return(
    <svg width={size} height={size}>
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  )
}

export default Icons;