import React from 'react';
    import { render, screen } from '@testing-library/react';
    import '@testing-library/jest-dom';
    import AssessmentForm from './AssessmentForm';

    test('renders assessment form with deployment frequency label', () => {
      render(<AssessmentForm onSubmit={() => {}} />);
      expect(screen.getByLabelText(/Deployment Frequency/i)).toBeInTheDocument();
    });
