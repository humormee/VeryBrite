
// export const fetchRegistrations = () => (
//   $.ajax({
//     method: 'GET',
//     url: 'api/registrations',
//   })
// )

export const fetchRegistrations = eventId => (
  $.ajax({
    method: 'GET',
    url: `api/events/${eventId}/registrations`,
  })
)

export const createRegistration = registration => {
  debugger
  return (
    $.ajax({
    method: 'POST',
    // url should be: /api/events/:id/registrations
    url: `api/events/${registration.event_id}/registrations`,
    data: { registration }
  })
  )
  
}

export const deleteRegistration = registration => {
  debugger
  return(
  $.ajax({
    method: 'DELETE',
    url: `api/events/${registration.event_id}/registrations/${registration.id}`
  })
)
}
