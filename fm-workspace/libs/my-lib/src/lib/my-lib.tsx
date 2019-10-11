import React from 'react';

import './my-lib.scss';

/* eslint-disable-next-line */
export interface MyLibProps {}

export const MyLib = (props: MyLibProps) => {
  return (
    <div>
      <h1>Welcome to my-lib component!</h1>
    </div>
  );
};

export default MyLib;
