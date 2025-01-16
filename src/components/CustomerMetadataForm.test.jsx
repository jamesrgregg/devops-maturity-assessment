import React from 'react';
    import { render, screen } from '@testing-library/react';
    import '@testing-library/jest-dom';
    import CustomerMetadataForm from './CustomerMetadataForm';

    test('renders customer metadata form with customer name label', () => {
      render(<CustomerMetadataForm onSubmit={() => {}} />);
      expect(screen.getByLabelText(/Customer Name/i)).toBeInTheDocument();
    });
