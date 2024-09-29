import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingPage, {initializeTimes, updateTimes} from './BookingPage';
import { MemoryRouter } from 'react-router';

test('renders a form with a date input', () => {
  render((
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  ))

  expect(screen.getByText('Choose date')).toBeInTheDocument();
})

test('initializeTimes returns an initial list of times', () => {
  expect(initializeTimes()).toStrictEqual([
    "17:00",
    "17:30",
    "19:30",
    "20:00",
    "21:00",
    "23:00"
  ])
})

test('updateTimes returns a list of times for the selected date', () => {
  expect(updateTimes([], new Date('2024-09-28'))).toStrictEqual([
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:30",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30"
  ])
})