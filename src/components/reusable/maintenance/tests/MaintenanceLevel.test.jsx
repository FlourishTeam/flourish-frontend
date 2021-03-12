import React from 'react';
import { render, cleanup } from '@testing-library/react';
import MaintenanceLevel from '../MaintenanceLevel';

describe('MaintenanceLevel component', () => {
  afterEach(() => cleanup());

  it('renders MaintenanceLevel', () => {
    const { asFragment } = render(<MaintenanceLevel />);
    expect(asFragment()).toMatchSnapshot();
  });
});
