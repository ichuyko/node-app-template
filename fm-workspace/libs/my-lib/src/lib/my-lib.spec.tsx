import React from 'react';
import { render, cleanup } from '@testing-library/react';

import MyLib from './my-lib';

describe(' MyLib', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<MyLib />);
    expect(baseElement).toBeTruthy();
  });
});
