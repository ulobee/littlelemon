import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReservationForm from './components/sections/reservePages/BookingForm';
import { BrowserRouter as Router } from 'react-router-dom';



describe('ReservationForm', () => {
  let availableTimes = ["12:00 PM", "1:00 PM", "2:00 PM"];

  beforeEach(() => {
    render(
      <Router>
        <ReservationForm availableTimes={availableTimes} />
      </Router>
    );
  });
  it('renders all form fields', () => {
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument(); 
  });

  it('updates first name on change', () => {
    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: 'John' }
    });
    expect(screen.getByLabelText(/first name/i)).toHaveValue('John');
  });

  
  it('calls on submit with the right data', () => {

  });

});
