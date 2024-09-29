import { useCallback, useReducer } from 'react'
import { useNavigate } from "react-router-dom";

import BookingForm from '../components/BookingForm'
import {fetchAPI, submitAPI} from '../api'

function updateTimes(state, newDate) {
  if(!newDate) return state

  return fetchAPI(newDate)
}

function initializeTimes() {
    return fetchAPI(new Date())
}

export default function BookingPage() {
  const [availableTimes, updateAvailableTimes] = useReducer(updateTimes, [], initializeTimes)

  const navigate = useNavigate();
  const submitForm = useCallback((formData) => {
    if(submitAPI(formData))
      navigate('/confirmation')
  }, [])

  return (
    <BookingForm availableTimes={availableTimes} onDateChange={updateAvailableTimes} onSubmitForm={submitForm}/>
  );
}
